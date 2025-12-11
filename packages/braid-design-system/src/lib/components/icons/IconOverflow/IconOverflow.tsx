import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconOverflowSvg } from './IconOverflowSvg';

export type IconOverflowProps = IconContainerProps;

export const IconOverflow: FC<IconOverflowProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconOverflowSvg} {...svgProps} />}
  </IconContainer>
);
