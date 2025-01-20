import React from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = IconContainerProps;

export const IconPeople = (props: IconPeopleProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPeopleSvg} {...svgProps} />}
  </IconContainer>
);
