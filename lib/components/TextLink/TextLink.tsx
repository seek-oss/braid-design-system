import React, { forwardRef } from 'react';
import {
  PrivateTextLinkRenderer,
  PrivateTextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface TextLinkProps
  extends Omit<PrivateTextLinkRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ weight, showVisited, hitArea, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <PrivateTextLinkRenderer
        weight={weight}
        showVisited={showVisited}
        hitArea={hitArea}
      >
        {(styleProps) => <LinkComponent ref={ref} {...props} {...styleProps} />}
      </PrivateTextLinkRenderer>
    );
  },
);
