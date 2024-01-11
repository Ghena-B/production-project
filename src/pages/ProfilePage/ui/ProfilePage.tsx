import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynanmicModuleLoader, ReducerList } from 'shared/lib/components/DynanmicModuleLoader/DynanmicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <DynanmicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile Page')}
            </div>
        </DynanmicModuleLoader>
    );
};

export default ProfilePage;
