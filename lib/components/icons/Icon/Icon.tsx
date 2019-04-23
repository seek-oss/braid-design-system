import React, { ComponentType } from 'react';
import { useClassNames } from 'sku/treat';
import { TextSize, Fill } from '../../../themes/theme';
import { Box } from '../../Box/Box';
import * as styles from './Icon.treat';
import { useTheme } from '../../private/ThemeContext';
import { useForeground } from '../../Box/ContrastContext';

type IconSize = TextSize | 'fill';

export interface IconProps {
  size?: IconSize;
  inline?: boolean;
  fill?: Fill;
  svgComponent: ComponentType;
}

const resolveSizeClasses = (size: IconSize, inline: boolean) => {
  if (size === 'fill') {
    return styles.fill;
  }

  return inline
    ? [styles.inline, styles.inlineSizes[size]]
    : styles.blockSizes[size];
};

export const Icon = ({
  size = 'standard',
  svgComponent,
  inline = false,
  fill = 'currentColor',
}: IconProps) => {
  const theme = useTheme();

  return (
    <Box
      component={svgComponent}
      width={size === 'fill' ? 'full' : undefined}
      display={inline ? 'inlineBlock' : 'block'}
      className={useClassNames(
        resolveSizeClasses(size, inline),
        theme.atoms.fill[useForeground(fill)],
      )}
    />
  );
};
