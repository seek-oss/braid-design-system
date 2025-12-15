import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconGlobeSvg } from './IconGlobeSvg';

export type IconGlobeProps = IconContainerProps;

export const IconGlobe: FC<IconGlobeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconGlobeSvg} {...svgProps} />}
  </IconContainer>
);
