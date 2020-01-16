import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconNoteSvg } from './IconNoteSvg';

export type IconNoteProps = UseIconProps;

export const IconNote = (props: IconNoteProps) => {
  const iconProps = useIcon(props);

  return <IconNoteSvg {...iconProps} />;
};
