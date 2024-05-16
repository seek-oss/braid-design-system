import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconSkillsSvg } from './IconSkillsSvg';

export type IconSkillsProps = UseIconProps;

export const IconSkills = (props: IconSkillsProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSkillsSvg} {...iconProps} />;
};
