import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

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
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation();
        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);
        const dispatch = useAppDispatch();
        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );
        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [onCommentTextChange, onSendComment, text]);
        return (
            <DynamicModuleLoader reducers={reducers}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Card max padding="24" border="round">
                            <HStack
                                data-testid="AddCommentForm"
                                max
                                gap="8"
                                justify="between"
                                className={classNames(
                                    cls.AddCommentFormRedesigned,
                                    {},
                                    [className],
                                )}
                            >
                                <Input
                                    data-testid="AddCommentForm.Input"
                                    className={cls.input}
                                    placeholder={t('Type your comment')}
                                    value={text}
                                    onChange={onCommentTextChange}
                                />
                                <Button
                                    data-testid="AddCommentForm.Button"
                                    variant="outline"
                                    onClick={onSendHandler}
                                >
                                    {t('Send')}
                                </Button>
                            </HStack>
                        </Card>
                    }
                    off={
                        <HStack
                            data-testid="AddCommentForm"
                            max
                            gap="16"
                            justify="between"
                            className={classNames(cls.AddCommentForm, {}, [
                                className,
                            ])}
                        >
                            <InputDeprecated
                                data-testid="AddCommentForm.Input"
                                className={cls.input}
                                placeholder={t('Type your comment')}
                                value={text}
                                onChange={onCommentTextChange}
                            />
                            <ButtonDeprecated
                                data-testid="AddCommentForm.Button"
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSendHandler}
                            >
                                {t('Send')}
                            </ButtonDeprecated>
                        </HStack>
                    }
                />
            </DynamicModuleLoader>
        );
    },
);
export default AddCommentForm;
