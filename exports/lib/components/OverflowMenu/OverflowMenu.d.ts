import { MenuRendererProps } from '../MenuRenderer/MenuRenderer';
interface OverflowMenuProps
  extends Omit<MenuRendererProps, 'trigger' | 'align' | 'offsetSpace'> {
  label: string;
}
export declare const OverflowMenu: ({
  label,
  children,
  ...menuProps
}: OverflowMenuProps) => JSX.Element;
export {};
