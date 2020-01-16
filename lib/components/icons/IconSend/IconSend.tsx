import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSendSvg } from './IconSendSvg';

export type IconSendProps = UseIconProps;

export const IconSend = (props: IconSendProps) => {
  const iconProps = useIcon(props);

  return <IconSendSvg {...iconProps} />;
};
