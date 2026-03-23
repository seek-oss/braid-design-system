import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPeopleFilledSvg } from './IconPeopleFilledSvg';

export type IconPeopleFilledProps = IconContainerProps;

export const IconPeopleFilled: FC<IconPeopleFilledProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPeopleFilledSvg} {...svgProps} />}
  </IconContainer>
);
