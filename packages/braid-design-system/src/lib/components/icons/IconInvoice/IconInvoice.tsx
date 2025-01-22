import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconInvoiceSvg } from './IconInvoiceSvg';

export type IconInvoiceProps = IconContainerProps;

export const IconInvoice = (props: IconInvoiceProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconInvoiceSvg} {...svgProps} />}
  </IconContainer>
);
