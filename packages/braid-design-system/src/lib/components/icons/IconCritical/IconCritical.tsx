import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCriticalSvg } from './IconCriticalSvg';

export type IconCriticalProps = IconContainerProps;

export const IconCritical: FC<IconCriticalProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCriticalSvg} {...svgProps} />}
  </IconContainer>
);
