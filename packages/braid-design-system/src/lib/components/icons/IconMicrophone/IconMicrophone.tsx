import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMicrophoneSvg } from './IconMicrophoneSvg';

export type IconMicrophoneProps = IconContainerProps;

export const IconMicrophone = (props: IconMicrophoneProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMicrophoneSvg} {...svgProps} />}
  </IconContainer>
);
