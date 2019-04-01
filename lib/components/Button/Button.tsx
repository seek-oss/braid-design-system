import React, { ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import { BackgroundColor, Color } from '../../themes/theme';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import styles from './Button.css.js';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonState = 'base' | 'hover' | 'active';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  onClick: NonNullable<NativeButtonProps['onClick']>;
  type?: NativeButtonProps['type'];
  children?: ReactNode;
  weight?: ButtonWeight;
}

const backgroundColor: Record<
  ButtonState,
  Record<ButtonWeight, BackgroundColor | undefined>
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

const foregroundColor: Record<ButtonWeight, Color> = {
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
      className={classnames(styles.root, {
        [styles.weak]: isWeak,
      })}
      onClick={onClick}
    >
      <FieldOverlay variant="focus" className={styles.focusOverlay} />
      <FieldOverlay
        backgroundColor={backgroundColor.hover[weight]}
        className={styles.hoverOverlay}
      />
      <FieldOverlay
        backgroundColor={backgroundColor.active[weight]}
        className={styles.activeOverlay}
      />
      <Box
        paddingLeft="gutter"
        paddingRight="gutter"
        paddingBottom="standardTouchableText"
        paddingTop="standardTouchableText"
        className={styles.content}
      >
        <Text baseline={false} weight="medium" color={foregroundColor[weight]}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
