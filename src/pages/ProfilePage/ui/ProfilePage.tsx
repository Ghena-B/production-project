import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynanmicModuleLoader, ReducerList } from 'shared/lib/components/DynanmicModuleLoader/DynanmicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynanmicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynanmicModuleLoader>
    );
};

export default ProfilePage;
