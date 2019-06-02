import React, { ComponentType } from 'react';
import { useClassNames } from 'sku/treat';
import { Box } from '../../Box/Box';
import * as styles from './Icon.treat';
import { useTextColor, UseTextProps } from '../../../hooks/typography';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface IconProps {
  size?: IconSize;
  inline?: boolean;
  fill?: UseTextProps['color'];
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
  fill,
}: IconProps) => (
  <Box
    component={svgComponent}
    width={size === 'fill' ? 'full' : undefined}
    display={inline ? 'inlineBlock' : 'block'}
    className={useClassNames(
      resolveSizeClasses(size, inline),
      styles.currentColor,
      fill ? useTextColor(fill) : null,
    )}
  />
);
