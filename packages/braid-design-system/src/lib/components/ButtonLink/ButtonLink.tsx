import { type ReactNode, forwardRef } from 'react';

import { Box } from '../Box/Box';
import {
  type LinkComponentProps,
  useLinkComponent,
} from '../BraidProvider/BraidProvider';
import {
  type ButtonProps,
  type ButtonStyleProps,
  ButtonContainer,
  ButtonOverlays,
  ButtonText,
  useButtonStyles,
} from '../Button/Button';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

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
    const { root, content } = useButtonStyles({
      variant,
      tone,
      size,
      bleed,
      loading,
    });

    return (
      <ButtonContainer bleed={bleed} variant={variant}>
        <Box
          component={LinkComponent}
          outline="focus"
          ref={ref}
          {...restProps}
          {...root}
          {...buildDataAttributes({ data, validateRestProps: false })}
        >
          <Box {...content}>
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
        </Box>
      </ButtonContainer>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
