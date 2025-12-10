import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconHelpSvg } from './IconHelpSvg';

export type IconHelpProps = IconContainerProps;

export const IconHelp: FC<IconHelpProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconHelpSvg} {...svgProps} />}
  </IconContainer>
);
