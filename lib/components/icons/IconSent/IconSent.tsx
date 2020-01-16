import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSentSvg } from './IconSentSvg';

export type IconSentProps = UseIconProps;

export const IconSent = (props: IconSentProps) => {
  const iconProps = useIcon(props);

  return <IconSentSvg {...iconProps} />;
};
