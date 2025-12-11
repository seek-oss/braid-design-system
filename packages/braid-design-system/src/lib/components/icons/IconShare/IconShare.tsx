import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconShareSvg } from './IconShareSvg';

export type IconShareProps = IconContainerProps;

export const IconShare: FC<IconShareProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconShareSvg} {...svgProps} />}
  </IconContainer>
);
