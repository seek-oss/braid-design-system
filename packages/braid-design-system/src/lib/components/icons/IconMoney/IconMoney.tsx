import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = IconContainerProps;

export const IconMoney = (props: IconMoneyProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconMoneySvg} {...boxProps} />}
  </IconContainer>
);
