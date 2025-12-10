import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLinkBrokenSvg } from './IconLinkBrokenSvg';

export type IconLinkBrokenProps = IconContainerProps;

export const IconLinkBroken: FC<IconLinkBrokenProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLinkBrokenSvg} {...svgProps} />}
  </IconContainer>
);
