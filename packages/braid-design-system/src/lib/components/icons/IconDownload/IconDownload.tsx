import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconDownloadSvg } from './IconDownloadSvg';

export type IconDownloadProps = UseIconProps;

export const IconDownload = (props: IconDownloadProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  const iconElement = <Box component={IconDownloadSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
