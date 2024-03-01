import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};
