import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTitleSvg } from './IconTitleSvg';

export type IconTitleProps = IconContainerProps;

export const IconTitle: FC<IconTitleProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTitleSvg} {...svgProps} />}
  </IconContainer>
);
