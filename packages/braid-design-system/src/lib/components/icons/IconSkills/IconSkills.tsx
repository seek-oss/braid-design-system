import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSkillsSvg } from './IconSkillsSvg';

export type IconSkillsProps = UseIconProps;

export const IconSkills = (props: IconSkillsProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSkillsSvg} {...iconProps} />;
};
