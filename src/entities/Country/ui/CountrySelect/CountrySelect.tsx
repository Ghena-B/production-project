import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    readonly?: boolean,
    onChange?: (value: Country) => void
}
const options = [
    { value: Country.MOLDOVA, content: Country.MOLDOVA },
    { value: Country.ROMANIA, content: Country.ROMANIA },
    { value: Country.GERMANY, content: Country.GERMANY },
    { value: Country.SPAIN, content: Country.SPAIN },
];
export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Choose a country')}
            label={t('Choose a country')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
});
