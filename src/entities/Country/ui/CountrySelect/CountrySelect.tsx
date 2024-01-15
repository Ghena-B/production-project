import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
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
        <Select
            className={classNames('', {}, [className])}
            label={t('Select country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
