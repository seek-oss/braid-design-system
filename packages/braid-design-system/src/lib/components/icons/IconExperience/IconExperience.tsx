import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconExperienceSvg } from './IconExperienceSvg';

export type IconExperienceProps = IconContainerProps;

export const IconExperience: FC<IconExperienceProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconExperienceSvg} {...svgProps} />}
  </IconContainer>
);
