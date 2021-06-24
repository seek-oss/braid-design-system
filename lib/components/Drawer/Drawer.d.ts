import { ModalProps } from '../private/Modal/Modal';
import { ModalContentProps } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';
declare const validWidths: readonly ["small", "medium", "large"];
declare const modalStyle: {
    readonly position: "right";
    readonly headingLevel: "2";
    readonly illustration: undefined;
};
export interface DrawerProps extends Omit<ModalProps, keyof typeof modalStyle | 'width'> {
    width?: typeof validWidths[number];
}
export declare const Drawer: ({ width, ...restProps }: DrawerProps) => JSX.Element;
interface DrawerContentProps extends Omit<ModalContentProps, keyof typeof modalStyle | 'width'> {
    width?: typeof validWidths[number];
}
export declare const DrawerContent: ({ width, ...restProps }: DrawerContentProps) => JSX.Element;
