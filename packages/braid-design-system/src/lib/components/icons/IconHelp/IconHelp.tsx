import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconHelpSvg } from './IconHelpSvg';

export type IconHelpProps = IconContainerProps;

export const IconHelp = (props: IconHelpProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconHelpSvg} {...svgProps} />}
  </IconContainer>
);
