import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconPhoneSvg } from './IconPhoneSvg';

export type IconPhoneProps = IconContainerProps;

export const IconPhone: FC<IconPhoneProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconPhoneSvg} {...svgProps} />}
  </IconContainer>
);
