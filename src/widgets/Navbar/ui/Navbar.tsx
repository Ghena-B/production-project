import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const onCLoseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} title={t('Ghena\'s app')} theme={TextTheme.INVERTED} />
                <Link to={RoutePath.article_create} className={cls.createBtn}>
                    {t('Add a new article')}
                </Link>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin'),
                            href: RoutePath.admin_panel,
                        }] : []),
                        {
                            content: t('User\'s profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Sign out'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
                {t('Sign in')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCLoseModal} />}
        </header>
    );
});
