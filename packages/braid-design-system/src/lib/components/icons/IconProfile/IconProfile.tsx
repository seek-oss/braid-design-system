import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = IconContainerProps;

export const IconProfile: FC<IconProfileProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconProfileSvg} {...svgProps} />}
  </IconContainer>
);
