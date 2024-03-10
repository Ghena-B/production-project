import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type,
        onChangeType,
    } = useArticleFilters();
    return (
        <ArticlesFilters
            type={type}
            search={search}
            sort={sort}
            order={order}
            onChangeSearch={onChangeSearch}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            className={classNames('', {}, [className])}
        />
    );
});
