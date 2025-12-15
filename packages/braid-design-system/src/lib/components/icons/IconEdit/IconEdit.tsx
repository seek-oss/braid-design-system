import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = IconContainerProps;

export const IconEdit: FC<IconEditProps> = (props) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconEditSvg} {...svgProps} />}
  </IconContainer>
);
