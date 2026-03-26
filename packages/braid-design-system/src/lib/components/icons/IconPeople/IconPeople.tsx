import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPeopleActiveSvg } from './IconPeopleActiveSvg';
import { IconPeopleSvg } from './IconPeopleSvg';

export type IconPeopleProps = IconContainerProps & {
  active?: boolean;
};

export const IconPeople: FC<IconPeopleProps> = ({
  active = false,
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={active ? IconPeopleActiveSvg : IconPeopleSvg}
        {...svgProps}
      />
    )}
  </IconContainer>
);
