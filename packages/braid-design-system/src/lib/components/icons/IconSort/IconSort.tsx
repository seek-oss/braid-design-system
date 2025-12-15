import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSortSvg } from './IconSortSvg';

export type IconSortProps = IconContainerProps;

export const IconSort: FC<IconSortProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSortSvg} {...svgProps} />}
  </IconContainer>
);
