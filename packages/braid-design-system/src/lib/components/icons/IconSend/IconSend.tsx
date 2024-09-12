import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSendSvg } from './IconSendSvg';

export type IconSendProps = UseIconProps;

export const IconSend = (props: IconSendProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  const iconElement = <Box component={IconSendSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
