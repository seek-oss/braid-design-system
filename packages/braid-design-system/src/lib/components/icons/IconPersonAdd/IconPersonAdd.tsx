import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPersonAddSvg } from './IconPersonAddSvg';

export type IconPersonAddProps = IconContainerProps;

export const IconPersonAdd: FC<IconPersonAddProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPersonAddSvg} {...svgProps} />}
  </IconContainer>
);
