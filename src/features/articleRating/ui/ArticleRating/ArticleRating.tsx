import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);
    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }

    const rating = data?.[0];
    return (
        <RatingCard
            rate={rating?.rate}
            className={classNames('', {}, [className])}
            title={t('Please rate this article')}
            feedbackTitle={t('Leave a feedback')}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});
export default ArticleRating;
