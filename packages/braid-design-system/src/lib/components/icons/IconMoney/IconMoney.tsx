import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMoneySvg } from './IconMoneySvg';

export type IconMoneyProps = IconContainerProps;

export const IconMoney: FC<IconMoneyProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMoneySvg} {...svgProps} />}
  </IconContainer>
);
