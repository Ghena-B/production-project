import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDePrecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDePrecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}
const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];
export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const { t } = useTranslation();
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        border="round"
                        className={classNames(
                            cls.ArticleViewSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <HStack gap="8">
                            {viewTypes.map((viewType) => (
                                <Icon
                                    key={viewType.view}
                                    clickable
                                    Svg={viewType.icon}
                                    onClick={onClick(viewType.view)}
                                    className={classNames('', {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    })}
                                />
                            ))}
                        </HStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames(cls.ArticleViewSelector, {}, [
                            className,
                        ])}
                    >
                        {viewTypes.map((viewType) => (
                            <ButtonDePrecated
                                key={viewType.view}
                                theme={ButtonTheme.CLEAR}
                                onClick={onClick(viewType.view)}
                            >
                                <IconDePrecated
                                    width={24}
                                    height={24}
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    })}
                                />
                            </ButtonDePrecated>
                        ))}
                    </div>
                }
            />
        );
    },
);
