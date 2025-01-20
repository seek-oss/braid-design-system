import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSkillsSvg } from './IconSkillsSvg';

export type IconSkillsProps = IconContainerProps;

export const IconSkills = (props: IconSkillsProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSkillsSvg} {...svgProps} />}
  </IconContainer>
);
