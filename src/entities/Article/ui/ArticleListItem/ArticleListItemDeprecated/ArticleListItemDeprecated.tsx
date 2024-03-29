import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from '../ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

export const ArticleListItemDeprecated = memo(
    ({ className, article, view, target }: ArticleListItemProps) => {
        const { t } = useTranslation();
        const types = (
            <Text text={article.type.join(', ')} className={cls.types} />
        );
        const views = (
            <>
                <Text text={String(article.views)} className={cls.views} />
                <Icon Svg={EyeIcon} />
            </>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;
            return (
                <div
                    data-testid="ArticleListItem"
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <Text text={article.title} className={cls.title} />
                        {types}
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <Link
                                to={getRouteArticleDetails(article.id)}
                                target={target}
                            >
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Read more...')}
                                </Button>
                            </Link>

                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <Link
                data-testid="ArticleListItem"
                to={getRouteArticleDetails(article.id)}
                target={target}
            >
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.imageWrapper}>
                            <AppImage
                                fallback={<Skeleton width={200} height={200} />}
                                src={article.img}
                                className={cls.img}
                                alt={article.title}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <div className={cls.infoWrapper}>
                            {types}
                            {views}
                        </div>
                        <Text text={article.title} className={cls.title} />
                    </Card>
                </div>
            </Link>
        );
    },
);
