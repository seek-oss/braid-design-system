import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconWorkExperienceSvg } from './IconWorkExperienceSvg';

export type IconWorkExperienceProps = UseIconProps;

export const IconWorkExperience = (props: IconWorkExperienceProps) => {
  const iconProps = useIcon(props);

  return <IconWorkExperienceSvg {...iconProps} />;
};
