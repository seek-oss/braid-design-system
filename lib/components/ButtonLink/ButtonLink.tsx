import dedent from 'dedent';
import React, { forwardRef, ReactNode } from 'react';
import {
  useLinkComponent,
  LinkComponentProps,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  ButtonContainer,
  ButtonOverlays,
  ButtonProps,
  ButtonStyleProps,
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
          {...(data ? buildDataAttributes(data) : undefined)}
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
          >
            {children}
          </ButtonText>
        </Box>
      </ButtonContainer>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
