import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconLinkSvg } from './IconLinkSvg';

export type IconLinkProps = UseIconProps;

export const IconLink = (props: IconLinkProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconLinkSvg} {...iconProps} />;
};
