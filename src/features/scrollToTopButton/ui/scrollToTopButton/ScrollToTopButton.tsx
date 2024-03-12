import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface scrollToTopButtonProps {
    className?: string;
}

const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Icon
            clickable
            Svg={CircleIcon}
            onClick={onClick}
            className={classNames('', {}, [className])}
        />
    );
});
