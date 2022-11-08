import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = UseIconProps;

export const IconCompose = (props: IconComposeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconComposeSvg} {...iconProps} />;
};
