import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const { view, onChangeView } = useArticleFilters();
        return <ArticleViewSelector view={view} onViewClick={onChangeView} />;
    },
);
