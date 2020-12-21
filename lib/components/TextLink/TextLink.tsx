import React from 'react';
import {
  PrivateTextLinkRenderer,
  PrivateTextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import {
  useLinkComponentWithoutRefSupport,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface TextLinkProps
  extends Omit<PrivateTextLinkRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {}

export const TextLink = ({
  weight,
  showVisited,
  hitArea,
  ...props
}: TextLinkProps) => {
  const LinkComponent = useLinkComponentWithoutRefSupport();

  return (
    <PrivateTextLinkRenderer
      weight={weight}
      showVisited={showVisited}
      hitArea={hitArea}
    >
      {(styleProps) => <LinkComponent {...props} {...styleProps} />}
    </PrivateTextLinkRenderer>
  );
};
