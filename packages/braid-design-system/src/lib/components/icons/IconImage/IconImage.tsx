import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconImageSvg } from './IconImageSvg';

export type IconImageProps = IconContainerProps;

export const IconImage: FC<IconImageProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconImageSvg} {...svgProps} />}
  </IconContainer>
);
