import { OverlayProps } from '../Overlay/Overlay';
declare type FieldOverlayVariant = 'default' | 'disabled' | 'focus' | 'hover' | 'critical';
export interface FieldOverlayProps extends Pick<OverlayProps, 'children' | 'visible' | 'onlyVisibleForKeyboardNavigation' | 'background' | 'borderRadius' | 'className'> {
    variant?: FieldOverlayVariant;
}
export declare const FieldOverlay: ({ variant, ...restProps }: FieldOverlayProps) => JSX.Element;
export {};
