import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Color } from '../../themes/theme';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './Text.treat';
import { useTheme } from '../private/ThemeContext';
import { useForeground } from '../Box/ContrastContext';
import { useText, TextWeight } from '../../hooks/useTypography';

type TextSize = 'standard' | 'large';

export interface TextProps extends Pick<BoxProps, 'component'> {
  children?: ReactNode;
  size?: TextSize;
  color?: Color;
  weight?: TextWeight;
  baseline?: boolean;
}

export const Text = ({
  component,
  size,
  color = 'neutral',
  weight,
  baseline = true,
  children,
}: TextProps) => {
  const theme = useTheme();
  const isListItem = typeof component === 'string' && /^li$/i.test(component);

  return (
    <Box
      display={!isListItem ? 'block' : undefined}
      component={component}
      className={useClassNames(
        useText({ weight, size, baseline }),
        theme.atoms.color[useForeground(color)],
        {
          [styles.listItem]: isListItem,
        },
      )}
    >
      {children}
    </Box>
  );
};
