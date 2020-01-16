import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = UseIconProps;

export const IconMail = (props: IconMailProps) => {
  const iconProps = useIcon(props);

  return <IconMailSvg {...iconProps} />;
};
