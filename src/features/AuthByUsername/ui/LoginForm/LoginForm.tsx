import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,

}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input type="text" className={cls.input} placeholder="username" autofocus />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input type="text" className={cls.input} placeholder="password" />
            <Button className={cls.loginBtn}>{t('Sing in')}</Button>
        </div>
    );
};
