import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMobileSvg } from './IconMobileSvg';

export type IconMobileProps = IconContainerProps;

export const IconMobile: FC<IconMobileProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMobileSvg} {...svgProps} />}
  </IconContainer>
);
