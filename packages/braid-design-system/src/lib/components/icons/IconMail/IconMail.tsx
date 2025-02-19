import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = IconContainerProps;

export const IconMail = (props: IconMailProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMailSvg} {...svgProps} />}
  </IconContainer>
);
