import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconClearSvg } from './IconClearSvg';

export type IconClearProps = IconContainerProps;

export const IconClear: FC<IconClearProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconClearSvg} {...svgProps} />}
  </IconContainer>
);
