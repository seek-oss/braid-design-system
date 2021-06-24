import { KeyboardEvent, MouseEvent, ReactNode, Ref } from 'react';
import type { ResponsiveSpace } from '../../atoms/atoms';
import { DataAttributeMap } from '../private/buildDataAttributes';
interface TriggerProps {
    'aria-haspopup': boolean;
    'aria-expanded': boolean;
    ref: Ref<HTMLButtonElement>;
    onKeyUp: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onClick: (event: MouseEvent) => void;
}
interface TriggerState {
    open: boolean;
}
export interface MenuRendererProps {
    trigger: (props: TriggerProps, state: TriggerState) => ReactNode;
    align?: 'left' | 'right';
    offsetSpace?: ResponsiveSpace;
    onOpen?: () => void;
    onClose?: () => void;
    data?: DataAttributeMap;
    children: ReactNode;
}
export declare const MenuRenderer: ({ onOpen, onClose, trigger, align, offsetSpace, children, data, }: MenuRendererProps) => JSX.Element;
export {};
