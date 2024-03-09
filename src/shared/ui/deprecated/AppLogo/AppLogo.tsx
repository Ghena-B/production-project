import React, { memo } from 'react';

import AppSvg from '../../../assets/icons/app-image.svg';
import { HStack } from '../Stack';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}
/**
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => (
    <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
    >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <AppSvg className={cls.appLogo} />
    </HStack>
));
