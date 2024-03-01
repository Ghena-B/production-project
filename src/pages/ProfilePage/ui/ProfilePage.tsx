import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');
    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
