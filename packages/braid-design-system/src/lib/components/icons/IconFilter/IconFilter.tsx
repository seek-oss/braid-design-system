import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconFilterSvg } from './IconFilterSvg';

export type IconFilterProps = IconContainerProps;

export const IconFilter: FC<IconFilterProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconFilterSvg} {...svgProps} />}
  </IconContainer>
);
