import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { type UseIconProps } from '../../../hooks/useIcon';
import { IconGiftSvg } from './IconGiftSvg';

export type IconGiftProps = UseIconProps;

export const IconGift = (props: IconGiftProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconGiftSvg} {...iconProps} />;
};
