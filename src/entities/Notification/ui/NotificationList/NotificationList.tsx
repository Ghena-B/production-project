import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import { toggleFeatures } from '@/shared/features';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface NotificationProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });
    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {data?.map((item) => (
                <NotificationItem item={item} key={item.id} />
            ))}
        </VStack>
    );
});
