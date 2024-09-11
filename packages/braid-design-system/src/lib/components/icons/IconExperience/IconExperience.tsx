import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconExperienceSvg } from './IconExperienceSvg';

export type IconExperienceProps = UseIconProps;

export const IconExperience = (props: IconExperienceProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconExperienceSvg} {...iconProps} />;
};
