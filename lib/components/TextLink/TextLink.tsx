import React, { AllHTMLAttributes } from 'react';
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface TextLinkProps
  extends Omit<TextLinkRendererProps, 'children'>,
    Omit<AnchorProps, 'className' | 'style'> {}

export const TextLink = ({ showVisited, hitArea, ...props }: TextLinkProps) => (
  <TextLinkRenderer showVisited={showVisited} hitArea={hitArea}>
    {styleProps => <a {...props} {...styleProps} />}
  </TextLinkRenderer>
);
