import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconRocketSvg } from './IconRocketSvg';

export type IconRocketProps = IconContainerProps;

export const IconRocket: FC<IconRocketProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRocketSvg} {...svgProps} />}
  </IconContainer>
);
