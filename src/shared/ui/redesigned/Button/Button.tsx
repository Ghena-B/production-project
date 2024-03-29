import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonSize = 'm' | 'l' | 'xl';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            size = 'm',
            disabled,
            fullWidth,
            addonLeft,
            addonRight,
            ...otherProps
        } = props;
        return (
            <button
                ref={ref}
                type="button"
                className={classNames(
                    cls.Button,
                    {
                        [cls.square]: square,
                        [cls.disabled]: disabled,
                        [cls.fullWidth]: fullWidth,
                        [cls.withAddon]:
                            Boolean(addonLeft) || Boolean(addonRight),
                    },
                    [className, cls[variant], cls[size]],
                )}
                disabled={disabled}
                {...otherProps}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
