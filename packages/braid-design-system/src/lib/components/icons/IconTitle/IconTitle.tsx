import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconTitleSvg } from './IconTitleSvg';

export type IconTitleProps = IconContainerProps;

export const IconTitle = (props: IconTitleProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconTitleSvg} {...svgProps} />}
  </IconContainer>
);
