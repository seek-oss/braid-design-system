import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDocumentSvg } from './IconDocumentSvg';

export type IconDocumentProps = UseIconProps;

export const IconDocument = (props: IconDocumentProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDocumentSvg} {...iconProps} />;
};
