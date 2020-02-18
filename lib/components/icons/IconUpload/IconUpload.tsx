import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = UseIconProps;

export const IconUpload = (props: IconUploadProps) => {
  const iconProps = useIcon(props, {
    nudge: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });

  return <Box component={IconUploadSvg} {...iconProps} />;
};
