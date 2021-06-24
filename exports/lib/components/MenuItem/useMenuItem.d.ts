import React, { KeyboardEvent, ReactNode, MouseEvent } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type MenuItemTone = 'critical' | undefined;
export interface UseMenuItemProps {
  onClick?: () => void;
  formElement?: boolean;
  data?: DataAttributeMap;
  displayName?: string;
  tone?: MenuItemTone;
}
export declare function useMenuItem<MenuItemElement extends HTMLElement>({
  displayName,
  formElement,
  tone,
  onClick,
  data,
}: UseMenuItemProps): {
  readonly MenuItemChildren: typeof MenuItemChildren;
  readonly menuItemProps: {
    readonly role: 'menuitem';
    readonly tabIndex: -1;
    readonly ref: React.RefObject<MenuItemElement>;
    readonly onKeyUp: (event: KeyboardEvent<MenuItemElement>) => void;
    readonly onKeyDown: (event: KeyboardEvent<MenuItemElement>) => void;
    readonly onMouseEnter: () => void;
    readonly onClick: (event: MouseEvent) => void;
    readonly className: readonly [string, string, string];
  };
};
interface MenuItemChildrenProps {
  children: ReactNode;
  tone: MenuItemTone;
}
declare function MenuItemChildren({
  tone,
  children,
}: MenuItemChildrenProps): JSX.Element;
export {};
