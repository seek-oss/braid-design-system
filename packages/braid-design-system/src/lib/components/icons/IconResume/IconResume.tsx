import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconResumeSvg } from './IconResumeSvg';

export type IconResumeProps = IconContainerProps;

export const IconResume = (props: IconResumeProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconResumeSvg} {...boxProps} />}
  </IconContainer>
);
