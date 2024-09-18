import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconDocumentSvg } from './IconDocumentSvg';

export type IconDocumentProps = IconContainerProps;

export const IconDocument = (props: IconDocumentProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconDocumentSvg} {...boxProps} />}
  </IconContainer>
);
