import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconCoverLetterSvg } from './IconCoverLetterSvg';

export type IconCoverLetterProps = IconContainerProps;

export const IconCoverLetter = (props: IconCoverLetterProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCoverLetterSvg} {...svgProps} />}
  </IconContainer>
);
