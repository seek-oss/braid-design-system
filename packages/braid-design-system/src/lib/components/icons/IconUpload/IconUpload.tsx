import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = IconContainerProps;

export const IconUpload = (props: IconUploadProps) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(boxProps) => <Box component={IconUploadSvg} {...boxProps} />}
  </IconContainer>
);
