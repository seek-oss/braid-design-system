import React, { AllHTMLAttributes } from 'react';
import { Omit } from 'utility-types';
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface TextLinkProps
  extends Omit<TextLinkRendererProps, 'children'>,
    Omit<AnchorProps, 'className' | 'style'> {}

export const TextLink = ({ inline, ...restProps }: TextLinkProps) => (
  <TextLinkRenderer inline={inline}>
    {props => <a {...restProps} {...props} />}
  </TextLinkRenderer>
);
