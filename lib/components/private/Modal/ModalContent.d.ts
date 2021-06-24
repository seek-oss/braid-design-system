import { ReactNode, Ref } from 'react';
import { BoxProps } from '../../Box/Box';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import { DataAttributeMap } from '../buildDataAttributes';
export interface ModalContentProps {
    id: string;
    title: string;
    children: ReactNode;
    onClose: () => void;
    closeLabel?: string;
    width: BoxProps['maxWidth'] | 'content';
    description?: ReactNodeNoStrings;
    illustration?: ReactNodeNoStrings;
    position: 'center' | 'right';
    headingLevel: '2' | '3';
    scrollLock?: boolean;
    headingRef?: Ref<HTMLElement>;
    modalRef?: Ref<HTMLElement>;
    data?: DataAttributeMap;
}
export declare const ModalContent: ({ id, children, description, onClose, width, closeLabel, illustration, title, headingRef: headingRefProp, modalRef: modalRefProp, scrollLock, position, headingLevel, data, }: ModalContentProps) => JSX.Element;
