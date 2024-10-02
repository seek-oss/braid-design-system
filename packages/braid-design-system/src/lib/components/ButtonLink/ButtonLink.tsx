import React, { type ReactNode, forwardRef } from 'react';
import {
  type LinkComponentProps,
  useLinkComponent,
} from '../BraidProvider/BraidProvider';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  type ButtonProps,
  type ButtonStyleProps,
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
            bleed,
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
