import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconInfoSvg } from './IconInfoSvg';

export type IconInfoProps = IconContainerProps;

export const IconInfo: FC<IconInfoProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconInfoSvg} {...svgProps} />}
  </IconContainer>
);
