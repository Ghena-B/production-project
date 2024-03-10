import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ToggleFeatures } from '@/shared/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}
const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RON, content: Currency.RON },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ListBox
                        className={className}
                        value={value}
                        defaultValue={t('Choose a currency')}
                        label={t('Choose a currency')}
                        items={options}
                        onChange={onChangeHandler}
                        readonly={readonly}
                        direction="top right"
                    />
                }
                off={
                    <ListBoxDeprecated
                        className={className}
                        value={value}
                        defaultValue={t('Choose a currency')}
                        label={t('Choose a currency')}
                        items={options}
                        onChange={onChangeHandler}
                        readonly={readonly}
                    />
                }
            />
        );
    },
);
