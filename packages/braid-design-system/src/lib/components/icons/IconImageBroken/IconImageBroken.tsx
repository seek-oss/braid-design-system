import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconImageBrokenSvg } from './IconImageBrokenSvg';

export type IconImageBrokenProps = IconContainerProps;

export const IconImageBroken: FC<IconImageBrokenProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconImageBrokenSvg} {...svgProps} />}
  </IconContainer>
);
