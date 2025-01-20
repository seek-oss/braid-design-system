import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCreditCardSvg } from './IconCreditCardSvg';

export type IconCreditCardProps = IconContainerProps;

export const IconCreditCard = (props: IconCreditCardProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCreditCardSvg} {...svgProps} />}
  </IconContainer>
);
