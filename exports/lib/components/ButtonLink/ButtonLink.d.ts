import React, { ReactNode } from 'react';
import { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';
import { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface ButtonLinkProps
  extends Omit<PrivateButtonRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
  data?: DataAttributeMap;
}
export declare const ButtonLink: React.ForwardRefExoticComponent<
  ButtonLinkProps & React.RefAttributes<HTMLAnchorElement>
>;
