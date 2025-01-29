import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconOverflowSvg } from './IconOverflowSvg';

export type IconOverflowProps = IconContainerProps;

export const IconOverflow = (props: IconOverflowProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconOverflowSvg} {...svgProps} />}
  </IconContainer>
);
