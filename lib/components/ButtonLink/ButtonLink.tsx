import React, { forwardRef, ReactNode } from 'react';
import {
  PrivateButtonRenderer,
  PrivateButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';

export interface ButtonLinkProps
  extends Omit<PrivateButtonRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, size, tone, weight, variant, bleedY, loading, ...restProps },
    ref,
  ) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <PrivateButtonRenderer
        size={size}
        tone={tone}
        weight={weight}
        variant={variant}
        loading={loading}
        bleedY={bleedY}
      >
        {(ButtonChildren, buttonProps) => (
          <LinkComponent ref={ref} {...restProps} {...buttonProps}>
            <ButtonChildren>{children}</ButtonChildren>
          </LinkComponent>
        )}
      </PrivateButtonRenderer>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
