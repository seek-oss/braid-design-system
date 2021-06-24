import { InternalToast } from './ToastTypes';
interface ToasterProps {
    toasts: InternalToast[];
    removeToast: (key: string) => void;
}
export declare const Toaster: ({ toasts, removeToast }: ToasterProps) => JSX.Element;
export {};
