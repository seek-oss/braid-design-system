import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconPromoteSvg } from './IconPromoteSvg';

export type IconPromoteProps = UseIconProps;

export const IconPromote = (props: IconPromoteProps) => {
  const { isInline, boxProps: iconProps } = useIcon(props);

  const iconElement = <Box component={IconPromoteSvg} {...iconProps} />;

  return isInline ? (
    <Box component="span" display="inlineBlock">
      {iconElement}
    </Box>
  ) : (
    iconElement
  );
};
