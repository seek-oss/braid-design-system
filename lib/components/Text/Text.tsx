import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Color, FontWeight, Theme } from '../../themes/theme';
import { Box, BoxProps } from '../Box/Box';
import styles from './Text.css.js';
import { useTheme } from '../private/ThemeContext';
import { useForeground } from '../Box/ContrastContext';

type TextSize = 'standard' | 'large';

const resolveTransformAtom = (
  size: TextSize,
  baseline: boolean,
  theme: Theme,
): string | null => {
  if (!baseline) {
    return null;
  }
  if (size === 'standard') {
    return theme.atoms.transform.standardText;
  }
  if (size === 'large') {
    return theme.atoms.transform.largeText;
  }
  throw new Error('No valid text size provided');
};

export interface TextProps extends Pick<BoxProps, 'component'> {
  children?: ReactNode;
  size?: TextSize;
  color?: Color;
  weight?: FontWeight;
  baseline?: boolean;
}

export const Text = ({
  component,
  size = 'standard',
  color = 'neutral',
  weight,
  baseline = true,
  children,
}: TextProps) => {
  const theme = useTheme();

  return (
    <Box
      component={component}
      className={classnames(
        styles.block,
        theme.atoms.fontFamily.text,
        theme.atoms.color[useForeground(color)],
        theme.atoms.fontSize[size],
        theme.atoms.fontWeight[weight || 'regular'],
        resolveTransformAtom(size, baseline, theme),
        {
          [styles.listItem]:
            typeof component === 'string' && /^li$/i.test(component),
        },
      )}
    >
      {children}
    </Box>
  );
};
