import React, { ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { toggleFeatures } from '@/shared/features';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;
/**
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    'app_modal',
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
