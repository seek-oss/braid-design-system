import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = UseIconProps;

export const IconEdit = (props: IconEditProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  const iconElement = <Box component={IconEditSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
