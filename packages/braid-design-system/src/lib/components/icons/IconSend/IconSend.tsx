import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSendSvg } from './IconSendSvg';

export type IconSendProps = IconContainerProps;

export const IconSend: FC<IconSendProps> = (props) => (
  <IconContainer
    {...props}
    verticalCorrection={{
      uppercase: 'none',
      lowercase: 'up',
    }}
  >
    {(svgProps) => <Box component={IconSendSvg} {...svgProps} />}
  </IconContainer>
);
