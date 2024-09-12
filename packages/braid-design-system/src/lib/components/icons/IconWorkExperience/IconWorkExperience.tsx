import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconWorkExperienceSvg } from './IconWorkExperienceSvg';

export type IconWorkExperienceProps = UseIconProps;

export const IconWorkExperience = (props: IconWorkExperienceProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props, {
    verticalCorrection: {
      uppercase: 'up',
      lowercase: 'up',
    },
  });

  const iconElement = <Box component={IconWorkExperienceSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
