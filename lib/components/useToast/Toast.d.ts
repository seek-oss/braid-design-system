import React from 'react';
import { InternalToast } from './ToastTypes';
interface ToastProps extends InternalToast {
    onClear: (dedupeKey: string, id: string) => void;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export default Toast;
