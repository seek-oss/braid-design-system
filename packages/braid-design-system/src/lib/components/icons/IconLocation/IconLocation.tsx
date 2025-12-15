import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLocationSvg } from './IconLocationSvg';

export type IconLocationProps = IconContainerProps;

export const IconLocation: FC<IconLocationProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLocationSvg} {...svgProps} />}
  </IconContainer>
);
