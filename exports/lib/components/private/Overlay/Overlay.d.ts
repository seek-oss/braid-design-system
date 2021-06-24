import { BoxProps } from '../../Box/Box';
export interface OverlayProps extends Partial<Pick<BoxProps, 'component' | 'children' | 'zIndex' | 'background' | 'borderRadius' | 'boxShadow' | 'transition' | 'className'>> {
    visible?: boolean;
    onlyVisibleForKeyboardNavigation?: boolean;
}
export declare const Overlay: ({ component, zIndex, background, borderRadius, boxShadow, transition, visible, onlyVisibleForKeyboardNavigation, className, children, }: OverlayProps) => JSX.Element;
