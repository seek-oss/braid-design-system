import { ReactNode } from 'react';
import { Toast } from './ToastTypes';
interface ToastProviderProps {
    children: ReactNode;
}
export declare const ToastProvider: ({ children }: ToastProviderProps) => JSX.Element;
export declare const useToast: () => (toast: Toast) => void;
export {};
