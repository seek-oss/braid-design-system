import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import { BackgroundColor, Color } from 'lib/themes/theme';
import styles from './Button.css.js';
import Box, { BoxProps } from '../Box/Box';
import Text from '../Text/Text';

type ButtonWeight = 'weak' | 'regular' | 'strong';
type ButtonState = 'base' | 'hover' | 'active';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps
  extends Pick<NativeButtonProps, 'type' | 'onClick'> {
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
    weak: undefined,
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

const Overlay = ({ className, ...props }: BoxProps) => (
  <Box
    paddingLeft="gutter"
    paddingRight="gutter"
    paddingBottom="standardTouchableText"
    paddingTop="standardTouchableText"
    borderRadius="standard"
    className={classnames(styles.overlay, className)}
    {...props}
  />
);

export default class Button extends Component<ButtonProps> {
  static displayName = 'Button';

  render() {
    const { children, weight = 'regular', type = 'button' } = this.props;

    const isWeak = weight === 'weak';

    return (
      <Box
        component="button"
        type={type}
        display="block"
        borderRadius="standard"
        boxShadow={isWeak ? 'borderFormAccentLarge' : undefined}
        backgroundColor={backgroundColor.base[weight]}
        transform="touchable"
        transition="touchable"
        className={classnames(styles.root, {
          [styles.weak]: isWeak,
        })}
      >
        <Overlay boxShadow="outlineFocus" className={styles.focusOverlay} />
        <Overlay
          backgroundColor={backgroundColor.hover[weight]}
          className={styles.hoverOverlay}
        />
        <Overlay
          backgroundColor={backgroundColor.active[weight]}
          className={styles.activeOverlay}
        />
        <Overlay className={styles.content}>
          <Text
            baseline={false}
            weight="medium"
            color={foregroundColor[weight]}
          >
            {children}
          </Text>
        </Overlay>
      </Box>
    );
  }
}
