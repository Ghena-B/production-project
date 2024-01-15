import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    error?: string;
    isLoading?: boolean;
    readonly ?: boolean;
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
            >
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An unexpected error has occurred')}
                    text={t('Please refresh the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <Avatar src={data?.avatar} alt="avatar" />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your family')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Your username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                {/* eslint-disable-next-line i18next/no-literal-string */}

                <Input
                    value={data?.avatar}
                    placeholder={t('Your avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
