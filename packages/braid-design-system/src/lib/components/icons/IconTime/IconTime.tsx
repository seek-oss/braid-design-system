import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTimeSvg } from './IconTimeSvg';

export type IconTimeProps = IconContainerProps;

export const IconTime: FC<IconTimeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTimeSvg} {...svgProps} />}
  </IconContainer>
);
