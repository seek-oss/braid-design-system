import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps } from '../../hooks/typography';
import * as styleRefs from './Text.treat';

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
  const styles = useStyles(styleRefs);
  const isListItem = typeof component === 'string' && /^li$/i.test(component);

  return (
    <Box
      display={!isListItem ? 'block' : undefined}
      component={component}
      className={classnames(useText({ weight, size, baseline, color }), {
        [styles.listItem]: isListItem,
      })}
    >
      {children}
    </Box>
  );
};
