import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconTipSvg } from './IconTipSvg';

export type IconTipProps = UseIconProps;

export const IconTip = (props: IconTipProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconTipSvg} {...iconProps} />;
};
