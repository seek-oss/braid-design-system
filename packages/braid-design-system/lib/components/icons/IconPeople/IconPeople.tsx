import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = UseIconProps;

export const IconPeople = (props: IconPeopleProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPeopleSvg} {...iconProps} />;
};
