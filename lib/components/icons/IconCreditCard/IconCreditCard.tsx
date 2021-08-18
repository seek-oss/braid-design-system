import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCreditCardSvg } from './IconCreditCardSvg';

export type IconCreditCardProps = UseIconProps;

export const IconCreditCard = (props: IconCreditCardProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCreditCardSvg} {...iconProps} />;
};
