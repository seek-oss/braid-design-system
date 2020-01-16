import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconInvoiceSvg } from './IconInvoiceSvg';

export type IconInvoiceProps = UseIconProps;

export const IconInvoice = (props: IconInvoiceProps) => {
  const iconProps = useIcon(props);

  return <IconInvoiceSvg {...iconProps} />;
};
