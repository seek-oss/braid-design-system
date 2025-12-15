import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTickSvg } from './IconTickSvg';

export type IconTickProps = IconContainerProps;

export const IconTick: FC<IconTickProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTickSvg} {...svgProps} />}
  </IconContainer>
);
