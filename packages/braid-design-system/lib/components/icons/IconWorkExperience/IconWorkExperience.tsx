import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconWorkExperienceSvg } from './IconWorkExperienceSvg';

export type IconWorkExperienceProps = UseIconProps;

export const IconWorkExperience = (props: IconWorkExperienceProps) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'up',
      lowercase: 'up',
    },
  });

  return <Box component={IconWorkExperienceSvg} {...iconProps} />;
};
