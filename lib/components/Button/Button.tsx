import React, { ReactNode, AllHTMLAttributes } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { useTouchableSpace } from '../../hooks/typography';
import * as styleRefs from './Button.treat';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonState = 'base' | 'hover' | 'active';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  id?: NativeButtonProps['id'];
  onClick?: NativeButtonProps['onClick'];
  type?: NativeButtonProps['type'];
  children?: ReactNode;
  weight?: ButtonWeight;
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
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
  id,
  'aria-describedby': ariaDescribedBy,
}: ButtonProps) => {
  const styles = useStyles(styleRefs);
  const isWeak = weight === 'weak';

  return (
    <Box
      id={id}
      component="button"
      type={type}
      aria-describedby={ariaDescribedBy}
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
      <FieldOverlay
        variant="focus"
        className={classnames(styles.focusOverlay)}
      />
      <FieldOverlay
        backgroundColor={backgroundColor.hover[weight]}
        className={classnames(styles.hoverOverlay)}
      />
      <FieldOverlay
        backgroundColor={backgroundColor.active[weight]}
        className={classnames(styles.activeOverlay)}
      />
      <Box
        paddingLeft="gutter"
        paddingRight="gutter"
        className={classnames(styles.content, useTouchableSpace('standard'))}
      >
        <Text baseline={false} weight="medium" color={foregroundColor[weight]}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};
