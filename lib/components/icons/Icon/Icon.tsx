import React, { ComponentType } from 'react';
import { useClassNames } from 'sku/treat';
import { TextSize } from '../../../themes/theme';
import { Box } from '../../Box/Box';
import * as styles from './Icon.treat';
import { useForeground } from '../../Box/ContrastContext';

type IconSize = TextSize | 'fill';

export interface IconProps {
  size?: IconSize;
  inline?: boolean;
  fill?: keyof typeof styles.fill;
  svgComponent: ComponentType;
}

const resolveSizeClasses = (size: IconSize, inline: boolean) => {
  if (size === 'fill') {
    return styles.fullHeight;
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
}: IconProps) => (
  <Box
    component={svgComponent}
    width={size === 'fill' ? 'full' : undefined}
    display={inline ? 'inlineBlock' : 'block'}
    className={useClassNames(
      resolveSizeClasses(size, inline),
      styles.fill[useForeground(fill)],
    )}
  />
);
