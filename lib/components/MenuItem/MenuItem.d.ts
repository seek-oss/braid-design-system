import { ReactNode } from 'react';
import { UseMenuItemProps } from './useMenuItem';
export interface MenuItemProps extends Pick<UseMenuItemProps, 'tone' | 'onClick' | 'data'> {
    children: ReactNode;
}
export declare const MenuItem: ({ children, onClick, data, tone }: MenuItemProps) => JSX.Element;
