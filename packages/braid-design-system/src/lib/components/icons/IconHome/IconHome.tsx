import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconHomeSvg } from './IconHomeSvg';

export type IconHomeProps = IconContainerProps;

export const IconHome: FC<IconHomeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconHomeSvg} {...svgProps} />}
  </IconContainer>
);
