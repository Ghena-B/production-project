import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string,

}

export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t("You don't have access to this page")}
        </Page>
    );
});
