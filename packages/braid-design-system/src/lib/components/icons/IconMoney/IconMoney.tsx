import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = IconContainerProps;

export const IconMoney = (props: IconMoneyProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMoneySvg} {...svgProps} />}
  </IconContainer>
);
