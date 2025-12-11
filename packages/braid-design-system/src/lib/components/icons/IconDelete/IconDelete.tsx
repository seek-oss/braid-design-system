import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDeleteSvg } from './IconDeleteSvg';

export type IconDeleteProps = IconContainerProps;

export const IconDelete: FC<IconDeleteProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDeleteSvg} {...svgProps} />}
  </IconContainer>
);
