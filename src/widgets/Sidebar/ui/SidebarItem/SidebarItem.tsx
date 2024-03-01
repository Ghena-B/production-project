import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import MainIcon from '@/shared/assets/icons/Main.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

import { RoutePath } from '@/shared/const/router';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <Link to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </Link>
    );
});
