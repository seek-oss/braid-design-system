import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconInvoiceSvg } from './IconInvoiceSvg';

export type IconInvoiceProps = UseIconProps;

export const IconInvoice = (props: IconInvoiceProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconInvoiceSvg} {...iconProps} />;
};
