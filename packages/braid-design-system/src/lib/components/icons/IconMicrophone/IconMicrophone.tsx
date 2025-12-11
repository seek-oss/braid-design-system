import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMicrophoneSvg } from './IconMicrophoneSvg';

export type IconMicrophoneProps = IconContainerProps;

export const IconMicrophone: FC<IconMicrophoneProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMicrophoneSvg} {...svgProps} />}
  </IconContainer>
);
