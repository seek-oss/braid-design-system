import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconMailSvg } from './IconMailSvg';

export type IconMailProps = IconContainerProps;

export const IconMail: FC<IconMailProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconMailSvg} {...svgProps} />}
  </IconContainer>
);
