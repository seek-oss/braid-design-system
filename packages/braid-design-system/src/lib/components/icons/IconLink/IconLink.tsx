import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLinkSvg } from './IconLinkSvg';

export type IconLinkProps = IconContainerProps;

export const IconLink: FC<IconLinkProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLinkSvg} {...svgProps} />}
  </IconContainer>
);
