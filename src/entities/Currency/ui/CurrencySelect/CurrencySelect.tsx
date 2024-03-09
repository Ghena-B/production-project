import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ListBox } from '@/shared/ui/deprecated/Popups';

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
            <ListBox
                className={className}
                value={value}
                defaultValue={t('Choose a currency')}
                label={t('Choose a currency')}
                items={options}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        );
    },
);
