import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPhotoAddSvg } from './IconPhotoAddSvg';

export type IconPhotoAddProps = IconContainerProps;

export const IconPhotoAdd: FC<IconPhotoAddProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPhotoAddSvg} {...svgProps} />}
  </IconContainer>
);
