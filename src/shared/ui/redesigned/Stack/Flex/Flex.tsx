import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        justify = 'start',
        align = 'center',
        direction = 'row',
        children,
        gap,
        wrap = 'nowrap',
        max,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
