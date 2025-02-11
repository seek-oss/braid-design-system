import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconRedoSvg } from './IconRedoSvg';

export type IconRedoProps = IconContainerProps;

export const IconRedo = (props: IconRedoProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconRedoSvg} {...svgProps} />}
  </IconContainer>
);
