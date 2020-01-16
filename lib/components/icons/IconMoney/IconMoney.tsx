import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = UseIconProps;

export const IconMoney = (props: IconMoneyProps) => {
  const iconProps = useIcon(props);

  return <IconMoneySvg {...iconProps} />;
};
