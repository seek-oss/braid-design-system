import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMessageSvg } from './IconMessageSvg';

export type IconMessageProps = IconContainerProps;

export const IconMessage: FC<IconMessageProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMessageSvg} {...svgProps} />}
  </IconContainer>
);
