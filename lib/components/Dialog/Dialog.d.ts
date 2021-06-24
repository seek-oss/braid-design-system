import { ModalProps } from '../private/Modal/Modal';
import { ModalContentProps } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';
declare const modalStyle: {
    readonly position: "center";
    readonly headingLevel: "3";
};
export interface DialogProps extends Omit<ModalProps, keyof typeof modalStyle | 'width'> {
    width?: ModalProps['width'];
}
export declare const Dialog: ({ width, ...restProps }: DialogProps) => JSX.Element;
interface DialogContentProps extends Omit<ModalContentProps, keyof typeof modalStyle | 'width'> {
    width?: ModalContentProps['width'];
}
export declare const DialogContent: ({ width, ...restProps }: DialogContentProps) => JSX.Element;
