import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconUndoSvg } from './IconUndoSvg';

export type IconUndoProps = IconContainerProps;

export const IconUndo: FC<IconUndoProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconUndoSvg} {...svgProps} />}
  </IconContainer>
);
