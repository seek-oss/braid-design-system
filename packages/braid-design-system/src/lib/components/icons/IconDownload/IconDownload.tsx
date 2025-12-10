import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDownloadSvg } from './IconDownloadSvg';

export type IconDownloadProps = IconContainerProps;

export const IconDownload: FC<IconDownloadProps> = (props) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconDownloadSvg} {...svgProps} />}
  </IconContainer>
);
