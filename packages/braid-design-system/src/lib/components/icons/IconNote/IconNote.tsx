import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconNoteSvg } from './IconNoteSvg';

export type IconNoteProps = IconContainerProps;

export const IconNote = (props: IconNoteProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconNoteSvg} {...svgProps} />}
  </IconContainer>
);
