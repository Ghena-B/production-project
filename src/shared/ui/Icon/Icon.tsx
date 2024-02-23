import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string,
    Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => (
    <Svg className={inverted ? cls.inverted : classNames(cls.Icon, {}, [className])} />
));
