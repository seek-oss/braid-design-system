import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = UseIconProps;

export const IconUpload = (props: IconUploadProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  const iconElement = <Box component={IconUploadSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
