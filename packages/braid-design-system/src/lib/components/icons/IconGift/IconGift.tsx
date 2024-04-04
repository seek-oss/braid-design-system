import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconGiftSvg } from './IconGiftSvg';

export type IconGiftProps = UseIconProps;

export const IconGift = (props: IconGiftProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGiftSvg} {...iconProps} />;
};
