import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';

export type IconDocumentBrokenProps = UseIconProps;

export const IconDocumentBroken = (props: IconDocumentBrokenProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconDocumentBrokenSvg} {...iconProps} />;
};
