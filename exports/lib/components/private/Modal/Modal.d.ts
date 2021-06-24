import React from 'react';
import { ModalContentProps } from './ModalContent';
export interface ModalProps extends Omit<ModalContentProps, 'onClose' | 'scrollLock' | 'headingRef' | 'modalRef'> {
    open: boolean;
    onClose: (openState: false) => void;
}
export declare const AllowCloseContext: React.Context<boolean>;
export declare const Modal: ({ id, open, children, description, onClose, width, closeLabel, illustration, title, headingLevel, position, data, }: ModalProps) => JSX.Element;
