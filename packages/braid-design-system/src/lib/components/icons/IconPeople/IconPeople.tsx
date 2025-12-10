import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = IconContainerProps;

export const IconPeople: FC<IconPeopleProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPeopleSvg} {...svgProps} />}
  </IconContainer>
);
