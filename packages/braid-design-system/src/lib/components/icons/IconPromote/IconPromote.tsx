import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPromoteSvg } from './IconPromoteSvg';

export type IconPromoteProps = IconContainerProps;

export const IconPromote: FC<IconPromoteProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPromoteSvg} {...svgProps} />}
  </IconContainer>
);
