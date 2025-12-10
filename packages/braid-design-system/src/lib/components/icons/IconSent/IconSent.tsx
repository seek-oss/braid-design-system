import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSentSvg } from './IconSentSvg';

export type IconSentProps = IconContainerProps;

export const IconSent: FC<IconSentProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSentSvg} {...svgProps} />}
  </IconContainer>
);
