import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
