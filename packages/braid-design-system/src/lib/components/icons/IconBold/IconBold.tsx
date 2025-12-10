import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBoldSvg } from './IconBoldSvg';

export type IconBoldProps = IconContainerProps;

export const IconBold: FC<IconBoldProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconBoldSvg} {...svgProps} />}
  </IconContainer>
);
