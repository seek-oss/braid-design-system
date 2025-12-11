import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCoverLetterSvg } from './IconCoverLetterSvg';

export type IconCoverLetterProps = IconContainerProps;

export const IconCoverLetter: FC<IconCoverLetterProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCoverLetterSvg} {...svgProps} />}
  </IconContainer>
);
