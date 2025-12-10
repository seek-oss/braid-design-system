import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconResumeSvg } from './IconResumeSvg';

export type IconResumeProps = IconContainerProps;

export const IconResume: FC<IconResumeProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconResumeSvg} {...svgProps} />}
  </IconContainer>
);
