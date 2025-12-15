import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconRedoSvg } from './IconRedoSvg';

export type IconRedoProps = IconContainerProps;

export const IconRedo: FC<IconRedoProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRedoSvg} {...svgProps} />}
  </IconContainer>
);
