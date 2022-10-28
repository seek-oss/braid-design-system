import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = UseIconProps;

export const IconMoney = (props: IconMoneyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconMoneySvg} {...iconProps} />;
};
