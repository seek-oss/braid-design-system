import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconGridSvg } from './IconGridSvg';

export type IconGridProps = IconContainerProps;

export const IconGrid: FC<IconGridProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconGridSvg} {...svgProps} />}
  </IconContainer>
);
