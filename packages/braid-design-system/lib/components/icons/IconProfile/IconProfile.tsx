import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconProfileSvg } from './IconProfileSvg';

export type IconProfileProps = UseIconProps;

export const IconProfile = (props: IconProfileProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconProfileSvg} {...iconProps} />;
};
