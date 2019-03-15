import React, { Component, ReactNode, AllHTMLAttributes } from 'react';
import classnames from 'classnames';
import { BackgroundColor, Color } from 'lib/themes/theme';
import styles from './Button.css.js';
import Box from '../Box/Box';
import Text from '../Text/Text';
import FieldOverlay from '../private/FieldOverlay/FieldOverlay';

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

export default class Button extends Component<ButtonProps> {
  static displayName = 'Button';

  render() {
    const { children, weight = 'regular', type = 'button' } = this.props;

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
          <Text
            baseline={false}
            weight="medium"
            color={foregroundColor[weight]}
          >
            {children}
          </Text>
        </Box>
      </Box>
    );
  }
}
