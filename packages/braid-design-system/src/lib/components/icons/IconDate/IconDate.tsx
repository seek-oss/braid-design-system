import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDateSvg } from './IconDateSvg';

export type IconDateProps = IconContainerProps;

export const IconDate: FC<IconDateProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDateSvg} {...svgProps} />}
  </IconContainer>
);
