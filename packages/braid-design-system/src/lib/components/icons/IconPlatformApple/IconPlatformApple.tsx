import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPlatformAppleSvg } from './IconPlatformAppleSvg';

export type IconPlatformAppleProps = IconContainerProps;

export const IconPlatformApple: FC<IconPlatformAppleProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPlatformAppleSvg} {...svgProps} />}
  </IconContainer>
);
