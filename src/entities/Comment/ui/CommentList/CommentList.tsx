import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { ToggleFeatures } from '@/shared/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(
    ({ className, comments, isLoading }: CommentListProps) => {
        const { t } = useTranslation();
        if (isLoading) {
            return (
                <VStack gap="16" max>
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            );
        }
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            comment={comment}
                            key={comment.id}
                            isLoading={isLoading}
                        />
                    ))
                ) : (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={t('No comments')} />}
                        off={<TextDeprecated text={t('No comments')} />}
                    />
                )}
            </VStack>
        );
    },
);
