import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSecuritySvg } from './IconSecuritySvg';

export type IconSecurityProps = UseIconProps;

export const IconSecurity = (props: IconSecurityProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSecuritySvg} {...iconProps} />;
};
