import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = IconContainerProps;

export const IconUpload: FC<IconUploadProps> = (props) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconUploadSvg} {...svgProps} />}
  </IconContainer>
);
