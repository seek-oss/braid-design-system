import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconChecklistSvg } from './IconChecklistSvg';

export type IconChecklistProps = IconContainerProps;

export const IconChecklist: FC<IconChecklistProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconChecklistSvg} {...svgProps} />}
  </IconContainer>
);
