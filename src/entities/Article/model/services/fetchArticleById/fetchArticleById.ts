import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';

import { Article } from '../../types/article';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchProfileData', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        if (!articleId) {
            throw new Error('');
        }
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );
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
});
