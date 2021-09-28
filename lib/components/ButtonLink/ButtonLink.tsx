import React, { forwardRef, ReactNode } from 'react';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  ButtonOverlays,
  ButtonStyleProps,
  useButtonStyles,
} from '../Button/Button';
import { Box } from '../Box/Box';

export interface ButtonLinkProps
  extends ButtonStyleProps,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
  data?: DataAttributeMap;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, size, tone, variant, bleedY, loading, data, ...restProps },
    ref,
  ) => {
    const LinkComponent = useLinkComponent(ref);

    return (
      <Box
        component={LinkComponent}
        ref={ref}
        {...restProps}
        {...(data ? buildDataAttributes(data) : undefined)}
        {...useButtonStyles({ variant, tone, size, bleedY, loading })}
      >
        <ButtonOverlays
          variant={variant}
          tone={tone}
          size={size}
          loading={loading}
        >
          {children}
        </ButtonOverlays>
      </Box>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
