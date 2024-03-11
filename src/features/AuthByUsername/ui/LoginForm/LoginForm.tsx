import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { ToggleFeatures } from '@/shared/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynanmicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="8"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('Sign in')} />
                        {error && <Text text={error} variant="error" />}
                        <Input
                            onChange={onChangeUsername}
                            value={username}
                            type="text"
                            className={cls.input}
                            placeholder="username"
                            autofocus
                        />
                        <Input
                            onChange={onChangePassword}
                            value={password}
                            type="text"
                            className={cls.input}
                            placeholder="password"
                        />
                        <Button
                            variant="outline"
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Sing in')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Sign in')} />
                        {error && (
                            <TextDeprecated
                                text={error}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            onChange={onChangeUsername}
                            value={username}
                            type="text"
                            className={cls.input}
                            placeholder="username"
                            autofocus
                        />
                        <InputDeprecated
                            onChange={onChangePassword}
                            value={password}
                            type="text"
                            className={cls.input}
                            placeholder="password"
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Sing in')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});
export default LoginForm;
