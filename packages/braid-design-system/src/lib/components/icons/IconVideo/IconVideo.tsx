import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconVideoSvg } from './IconVideoSvg';

export type IconVideoProps = IconContainerProps;

export const IconVideo: FC<IconVideoProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconVideoSvg} {...svgProps} />}
  </IconContainer>
);
