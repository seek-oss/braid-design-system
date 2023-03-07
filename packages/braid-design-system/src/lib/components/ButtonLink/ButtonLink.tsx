import dedent from 'dedent';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import type { ButtonProps, ButtonStyleProps } from '../Button/Button';
import {
  ButtonContainer,
  ButtonOverlays,
  ButtonText,
  useButtonStyles,
} from '../Button/Button';
import { Box } from '../Box/Box';

export interface ButtonLinkProps
  extends ButtonStyleProps,
    Omit<LinkComponentProps, 'className' | 'style'> {
  children?: ReactNode;
  data?: DataAttributeMap;
  icon?: ButtonProps['icon'];
  iconPosition?: 'leading' | 'trailing';
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      size,
      tone,
      variant,
      bleedY,
      bleed,
      icon,
      iconPosition,
      loading,
      data,
      ...restProps
    },
    ref,
  ) => {
    const LinkComponent = useLinkComponent(ref);

    if (process.env.NODE_ENV !== 'production') {
      if (typeof bleedY !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn(
          dedent`
            The "bleedY" prop has been deprecated and will be removed in a future version. Use "bleed" instead.
               <Button
              %c-   bleedY
              %c+   bleed
               %c/>
          `,
          'color: red',
          'color: green',
          'color: inherit',
        );
      }
    }

    return (
      <ButtonContainer bleed={bleed} variant={variant}>
        <Box
          component={LinkComponent}
          ref={ref}
          {...restProps}
          {...buildDataAttributes({ data, validateRestProps: false })}
          {...useButtonStyles({
            variant,
            tone,
            size,
            bleed: bleed || bleedY,
            loading,
          })}
        >
          <ButtonOverlays variant={variant} tone={tone} />

          <ButtonText
            variant={variant}
            tone={tone}
            size={size}
            loading={loading}
            icon={icon}
            iconPosition={iconPosition}
            bleed={bleed}
          >
            {children}
          </ButtonText>
        </Box>
      </ButtonContainer>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
