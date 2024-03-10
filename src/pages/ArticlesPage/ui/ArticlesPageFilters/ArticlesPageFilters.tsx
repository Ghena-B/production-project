import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation();
        const {
            onChangeSearch,
            search,
            onChangeSort,
            sort,
            onChangeView,
            view,
            onChangeOrder,
            order,
            type,
            onChangeType,
        } = useArticleFilters();
        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        placeholder={t('Search')}
                        value={search}
                        onChange={onChangeSearch}
                    />
                </Card>
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </div>
        );
    },
);
