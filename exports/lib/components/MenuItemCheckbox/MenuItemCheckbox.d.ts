import { ReactNode } from 'react';
import { MenuItemProps } from '../MenuItem/MenuItem';
interface MenuItemCheckboxProps extends Pick<MenuItemProps, 'data'> {
  children: ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
}
export declare const MenuItemCheckbox: ({
  children,
  onChange,
  checked,
  data,
}: MenuItemCheckboxProps) => JSX.Element;
export {};
