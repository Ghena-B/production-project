import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string,

}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Edit article with ID ') + id
                : t('Add a new article')}
        </Page>
    );
});
export default ArticleEditPage;
