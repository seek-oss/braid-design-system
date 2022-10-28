import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = UseIconProps;

export const IconCompany = (props: IconCompanyProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCompanySvg} {...iconProps} />;
};
