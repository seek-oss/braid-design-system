import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconUndoSvg } from './IconUndoSvg';

export type IconUndoProps = IconContainerProps;

export const IconUndo = (props: IconUndoProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconUndoSvg} {...svgProps} />}
  </IconContainer>
);
