import React, { ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import styles from './Text.css.js';
import Box, { BoxProps } from '../Box/Box';
import { Color, FontWeight, Theme } from '../../themes/theme';

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

const Text = ({
  component,
  size = 'standard',
  color,
  weight,
  baseline = true,
  children,
}: TextProps) => (
  <ThemeConsumer>
    {theme => (
      <Box
        component={component}
        className={classnames(
          styles.block,
          theme.atoms.fontFamily.text,
          theme.atoms.color[color || 'neutral'],
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
    )}
  </ThemeConsumer>
);

Text.displayName = 'Text';

export default Text;
