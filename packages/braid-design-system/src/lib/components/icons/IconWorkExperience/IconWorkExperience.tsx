import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconWorkExperienceSvg } from './IconWorkExperienceSvg';

export type IconWorkExperienceProps = IconContainerProps;

export const IconWorkExperience = (props: IconWorkExperienceProps) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'up',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconWorkExperienceSvg} {...svgProps} />}
  </IconContainer>
);
