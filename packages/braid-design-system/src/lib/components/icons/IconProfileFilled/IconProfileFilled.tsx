import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconProfileFilledSvg } from './IconProfileFilledSvg';

export type IconProfileFilledProps = IconContainerProps;

export const IconProfileFilled: FC<IconProfileFilledProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconProfileFilledSvg} {...svgProps} />}
  </IconContainer>
);
