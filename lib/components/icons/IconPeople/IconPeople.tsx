import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = UseIconProps;

export const IconPeople = (props: IconPeopleProps) => {
  const iconProps = useIcon(props);

  return <IconPeopleSvg {...iconProps} />;
};
