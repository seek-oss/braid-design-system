import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCreditCardSvg } from './IconCreditCardSvg';

export type IconCreditCardProps = IconContainerProps;

export const IconCreditCard: FC<IconCreditCardProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCreditCardSvg} {...svgProps} />}
  </IconContainer>
);
