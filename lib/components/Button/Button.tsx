import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import * as styles from './Button.treat';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonState = 'base' | 'hover' | 'active';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  onClick?: NativeButtonProps['onClick'];
  type?: NativeButtonProps['type'];
  children?: ReactNode;
  weight?: ButtonWeight;
}

const backgroundColor: Record<
  ButtonState,
  Record<ButtonWeight, BoxProps['backgroundColor'] | undefined>
> = {
  base: {
    weak: undefined,
    regular: 'formAccent',
    strong: 'brandAccent',
  },
  hover: {
    weak: 'formAccentHover',
    regular: 'formAccentHover',
    strong: 'brandAccentHover',
  },
  active: {
    weak: 'formAccentActive',
    regular: 'formAccentActive',
    strong: 'brandAccentActive',
  },
};

const foregroundColor: Record<ButtonWeight, TextProps['color']> = {
  weak: 'formAccent',
  regular: 'white',
  strong: 'brandAccentForeground',
};

export const Button = ({
  onClick,
  children,
  weight = 'regular',
  type = 'button',
}: ButtonProps) => {
  const isWeak = weight === 'weak';

  return (
    <Box
      component="button"
      type={type}
      width="full"
      display="block"
      borderRadius="standard"
      boxShadow={isWeak ? 'borderFormAccentLarge' : undefined}
      backgroundColor={backgroundColor.base[weight]}
      transform="touchable"
      transition="touchable"
      className={useClassNames(styles.root, {
        [styles.weak]: isWeak,
      })}
      onClick={onClick}
    >
      <FieldOverlay
        variant="focus"
        className={useClassNames(styles.focusOverlay)}
      />
      <FieldOverlay
        backgroundColor={backgroundColor.hover[weight]}
        className={useClassNames(styles.hoverOverlay)}
      />
      <FieldOverlay
        backgroundColor={backgroundColor.active[weight]}
        className={useClassNames(styles.activeOverlay)}
      />
      <Box
        paddingLeft="gutter"
        paddingRight="gutter"
        paddingBottom="standardTouchableText"
        paddingTop="standardTouchableText"
        className={useClassNames(styles.content)}
      >
        <Text baseline={false} weight="medium" color={foregroundColor[weight]}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
