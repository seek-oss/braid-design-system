import { LinkProps } from '../Link/Link';
import { MenuItemProps } from './MenuItem';
export interface MenuItemLinkProps
  extends MenuItemProps,
    Pick<LinkProps, 'href' | 'target' | 'rel'> {}
export declare const MenuItemLink: ({
  href,
  target,
  rel,
  onClick,
  tone,
  data,
  children,
}: MenuItemLinkProps) => JSX.Element;
