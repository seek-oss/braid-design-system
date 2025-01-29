import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconGiftSvg } from './IconGiftSvg';

export type IconGiftProps = IconContainerProps;

export const IconGift = (props: IconGiftProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconGiftSvg} {...svgProps} />}
  </IconContainer>
);
