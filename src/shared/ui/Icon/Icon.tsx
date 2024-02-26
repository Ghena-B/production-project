import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string,
    Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo(({
    className, Svg, inverted, ...otherProps
}: IconProps) => (
    <Svg
        className={inverted ? cls.inverted : classNames(cls.Icon, {}, [className])}
        {...otherProps}
    />
));
