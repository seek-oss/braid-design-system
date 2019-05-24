import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../Box/Box';
import * as styles from './Text.treat';
import { useText, UseTextProps } from '../../hooks/typography';

export interface TextProps extends Pick<BoxProps, 'component'> {
  children?: ReactNode;
  size?: UseTextProps['size'];
  color?: UseTextProps['color'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
}

export const Text = ({
  component,
  size,
  color,
  weight,
  baseline = true,
  children,
}: TextProps) => {
  const isListItem = typeof component === 'string' && /^li$/i.test(component);

  return (
    <Box
      display={!isListItem ? 'block' : undefined}
      component={component}
      className={useClassNames(useText({ weight, size, baseline, color }), {
        [styles.listItem]: isListItem,
      })}
    >
      {children}
    </Box>
  );
};
