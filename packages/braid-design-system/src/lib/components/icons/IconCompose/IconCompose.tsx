import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconComposeSvg } from './IconComposeSvg';

export type IconComposeProps = IconContainerProps;

export const IconCompose: FC<IconComposeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconComposeSvg} {...svgProps} />}
  </IconContainer>
);
