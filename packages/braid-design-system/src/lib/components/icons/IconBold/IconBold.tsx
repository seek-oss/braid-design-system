import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBoldSvg } from './IconBoldSvg';

export type IconBoldProps = IconContainerProps;

export const IconBold = (props: IconBoldProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconBoldSvg} {...svgProps} />}
  </IconContainer>
);
