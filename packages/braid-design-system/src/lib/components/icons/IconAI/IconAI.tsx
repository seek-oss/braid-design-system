import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconAISvg } from './IconAISvg';

export type IconAiProps = IconContainerProps;

export const IconAI: FC<IconAiProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconAISvg} {...svgProps} />}
  </IconContainer>
);
