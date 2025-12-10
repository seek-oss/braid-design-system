import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDocumentSvg } from './IconDocumentSvg';

export type IconDocumentProps = IconContainerProps;

export const IconDocument: FC<IconDocumentProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDocumentSvg} {...svgProps} />}
  </IconContainer>
);
