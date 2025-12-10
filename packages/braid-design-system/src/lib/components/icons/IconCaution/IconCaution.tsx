import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCautionSvg } from './IconCautionSvg';

export type IconCautionProps = IconContainerProps;

export const IconCaution: FC<IconCautionProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCautionSvg} {...svgProps} />}
  </IconContainer>
);
