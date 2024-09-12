import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconEducationSvg } from './IconEducationSvg';

export type IconEducationProps = UseIconProps;

export const IconEducation = (props: IconEducationProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconEducationSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
