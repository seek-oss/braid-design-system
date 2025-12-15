import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconNumberedListSvg } from './IconNumberedListSvg';

export type IconNumberedListProps = IconContainerProps;

export const IconNumberedList: FC<IconNumberedListProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconNumberedListSvg} {...svgProps} />}
  </IconContainer>
);
