import React from 'react';
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {}

export const TextLink = ({ showVisited, hitArea, ...props }: TextLinkProps) => {
  const LinkComponent = useLinkComponent();

  return (
    <TextLinkRenderer showVisited={showVisited} hitArea={hitArea}>
      {(styleProps) => <LinkComponent {...props} {...styleProps} />}
    </TextLinkRenderer>
  );
};
