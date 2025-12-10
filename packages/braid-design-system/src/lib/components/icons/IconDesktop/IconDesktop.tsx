import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDesktopSvg } from './IconDesktopSvg';

export type IconDesktopProps = IconContainerProps;

export const IconDesktop: FC<IconDesktopProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDesktopSvg} {...svgProps} />}
  </IconContainer>
);
