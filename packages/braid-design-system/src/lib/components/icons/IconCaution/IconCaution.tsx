import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCautionSvg } from './IconCautionSvg';

export type IconCautionProps = IconContainerProps;

export const IconCaution = (props: IconCautionProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCautionSvg} {...svgProps} />}
  </IconContainer>
);
