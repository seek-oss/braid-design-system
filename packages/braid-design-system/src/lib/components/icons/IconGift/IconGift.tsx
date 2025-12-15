import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconGiftSvg } from './IconGiftSvg';

export type IconGiftProps = IconContainerProps;

export const IconGift: FC<IconGiftProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconGiftSvg} {...svgProps} />}
  </IconContainer>
);
