import React, {
  ReactNode,
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  ComponentType,
  Ref,
} from 'react';
import { BraidTheme } from '../../themes/BraidTheme';
export interface LinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export declare const makeLinkComponent: (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => {
  readonly __forwardRef__: React.ForwardRefExoticComponent<
    LinkComponentProps & React.RefAttributes<HTMLAnchorElement>
  >;
};
export declare type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>;
export declare const useLinkComponent: (
  ref: Ref<HTMLAnchorElement>,
) =>
  | React.ForwardRefExoticComponent<
      LinkComponentProps & React.RefAttributes<HTMLAnchorElement>
    >
  | React.ComponentType<LinkComponentProps>;
export interface BraidProviderProps {
  theme: BraidTheme;
  styleBody?: boolean;
  linkComponent?: LinkComponent;
  children: ReactNode;
}
export declare const BraidProvider: ({
  theme,
  styleBody,
  linkComponent,
  children,
}: BraidProviderProps) => JSX.Element;
