import React, { forwardRef } from 'react';
import type { PrivateTextLinkRendererProps } from '../TextLinkRenderer/TextLinkRenderer';
import { PrivateTextLinkRenderer } from '../TextLinkRenderer/TextLinkRenderer';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';

export interface TextLinkProps
  extends Omit<PrivateTextLinkRendererProps, 'reset' | 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  data?: DataAttributeMap;
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ weight, showVisited, hitArea, data, ...props }, ref) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <PrivateTextLinkRenderer
        weight={weight}
        showVisited={showVisited}
        hitArea={hitArea}
      >
        {(styleProps) => (
          <LinkComponent
            ref={ref}
            {...props}
            {...styleProps}
            {...(data ? buildDataAttributes(data) : undefined)}
          />
        )}
      </PrivateTextLinkRenderer>
    );
  },
);

TextLink.displayName = 'TextLink';
