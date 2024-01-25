import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchProfileData',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(
                i18n.t('The username or password is incorrect', { ns: 'auth' }),
            );
        }
    },
);
