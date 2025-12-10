import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSearchSvg } from './IconSearchSvg';

export type IconSearchProps = IconContainerProps;

export const IconSearch: FC<IconSearchProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSearchSvg} {...svgProps} />}
  </IconContainer>
);
