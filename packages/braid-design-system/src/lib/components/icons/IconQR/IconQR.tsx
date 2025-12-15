import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconQRSvg } from './IconQRSvg';

export type IconQRProps = IconContainerProps;

export const IconQR: FC<IconQRProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconQRSvg} {...svgProps} />}
  </IconContainer>
);
