import React, { forwardRef, ReactNode } from 'react';
import {
  PrivateButtonRenderer,
  PrivateButtonRendererProps,
} from '../ButtonRenderer/ButtonRenderer';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

export interface ButtonLinkProps
  extends Omit<PrivateButtonRendererProps, 'children'>,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
  data?: DataAttributeMap;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      size,
      tone,
      weight,
      variant,
      bleedY,
      loading,
      data,
      ...restProps
    },
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
          <LinkComponent
            ref={ref}
            {...restProps}
            {...buttonProps}
            {...(data ? buildDataAttributes(data) : undefined)}
          >
            <ButtonChildren>{children}</ButtonChildren>
          </LinkComponent>
        )}
      </PrivateButtonRenderer>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
