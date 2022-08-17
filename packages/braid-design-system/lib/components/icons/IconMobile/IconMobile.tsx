import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconMobileSvg } from './IconMobileSvg';

export type IconMobileProps = UseIconProps;

export const IconMobile = (props: IconMobileProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMobileSvg} {...iconProps} />;
};
