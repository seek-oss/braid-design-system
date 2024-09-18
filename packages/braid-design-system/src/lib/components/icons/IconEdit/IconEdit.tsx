import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = IconContainerProps;

export const IconEdit = (props: IconEditProps) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(boxProps) => <Box component={IconEditSvg} {...boxProps} />}
  </IconContainer>
);
