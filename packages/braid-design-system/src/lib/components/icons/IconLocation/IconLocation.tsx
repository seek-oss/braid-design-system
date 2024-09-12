import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconLocationSvg } from './IconLocationSvg';

export type IconLocationProps = UseIconProps;

export const IconLocation = (props: IconLocationProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconLocationSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
