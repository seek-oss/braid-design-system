import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Color } from '../../themes/theme';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './Text.treat';
import { useTheme } from '../private/ThemeContext';
import { useForeground } from '../Box/ContrastContext';
import useTypography, { FontWeight } from '../../hooks/useTypography';

type TextSize = 'standard' | 'large';

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
      display="block"
      component={component}
      className={useClassNames(
        useTypography({ weight, size, baseline }),
        theme.atoms.color[useForeground(color)],
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
