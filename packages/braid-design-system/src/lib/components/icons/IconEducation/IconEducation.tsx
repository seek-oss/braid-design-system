import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconEducationSvg } from './IconEducationSvg';

export type IconEducationProps = IconContainerProps;

export const IconEducation: FC<IconEducationProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconEducationSvg} {...svgProps} />}
  </IconContainer>
);
