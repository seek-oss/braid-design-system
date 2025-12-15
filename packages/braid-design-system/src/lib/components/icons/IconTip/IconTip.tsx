import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTipSvg } from './IconTipSvg';

export type IconTipProps = IconContainerProps;

export const IconTip: FC<IconTipProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTipSvg} {...svgProps} />}
  </IconContainer>
);
