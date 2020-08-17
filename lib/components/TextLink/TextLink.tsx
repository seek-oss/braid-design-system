import React from 'react';
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import {
  useLinkComponentWithoutRefSupport,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface TextLinkProps
  extends Omit<TextLinkRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {}

export const TextLink = ({
  weight,
  showVisited,
  hitArea,
  ...props
}: TextLinkProps) => {
  const LinkComponent = useLinkComponentWithoutRefSupport();

  return (
    <TextLinkRenderer
      weight={weight}
      showVisited={showVisited}
      hitArea={hitArea}
    >
      {(styleProps) => <LinkComponent {...props} {...styleProps} />}
    </TextLinkRenderer>
  );
};
