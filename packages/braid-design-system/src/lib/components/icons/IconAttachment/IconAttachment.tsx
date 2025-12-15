import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconAttachmentSvg } from './IconAttachmentSvg';

export type IconAttachmentProps = IconContainerProps;

export const IconAttachment: FC<IconAttachmentProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconAttachmentSvg} {...svgProps} />}
  </IconContainer>
);
