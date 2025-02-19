import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMessageSvg } from './IconMessageSvg';

export type IconMessageProps = IconContainerProps;

export const IconMessage = (props: IconMessageProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMessageSvg} {...svgProps} />}
  </IconContainer>
);
