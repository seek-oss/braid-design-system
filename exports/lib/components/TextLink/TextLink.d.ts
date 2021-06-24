import React from 'react';
import { PrivateTextLinkRendererProps } from '../TextLinkRenderer/TextLinkRenderer';
import { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface TextLinkProps
  extends Omit<PrivateTextLinkRendererProps, 'reset' | 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  data?: DataAttributeMap;
}
export declare const TextLink: React.ForwardRefExoticComponent<
  TextLinkProps & React.RefAttributes<HTMLAnchorElement>
>;
