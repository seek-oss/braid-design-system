import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = UseIconProps;

export const IconProfile = (props: IconProfileProps) => {
  const iconProps = useIcon(props);

  return <IconProfileSvg {...iconProps} />;
};
