import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTagSvg } from './IconTagSvg';

export type IconTagProps = IconContainerProps;

export const IconTag: FC<IconTagProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTagSvg} {...svgProps} />}
  </IconContainer>
);
