import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps } from '../../hooks/typography';
import * as styleRefs from './Text.treat';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone,
  weight,
  baseline = true,
  children,
}: TextProps) => {
  const styles = useStyles(styleRefs);
  const isListItem = typeof component === 'string' && /^li$/i.test(component);

  return (
    <Box
      id={id}
      display={!isListItem ? 'block' : undefined}
      component={component}
      className={classnames(useText({ weight, size, baseline, tone }), {
        [styles.listItem]: isListItem,
      })}
    >
      {children}
    </Box>
  );
};
