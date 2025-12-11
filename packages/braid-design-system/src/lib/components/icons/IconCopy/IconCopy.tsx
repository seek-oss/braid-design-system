import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCopySvg } from './IconCopySvg';

export type IconCopyProps = IconContainerProps;

export const IconCopy: FC<IconCopyProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCopySvg} {...svgProps} />}
  </IconContainer>
);
