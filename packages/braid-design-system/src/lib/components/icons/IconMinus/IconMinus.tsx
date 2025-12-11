import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMinusSvg } from './IconMinusSvg';

export type IconMinusProps = IconContainerProps;

export const IconMinus: FC<IconMinusProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMinusSvg} {...svgProps} />}
  </IconContainer>
);
