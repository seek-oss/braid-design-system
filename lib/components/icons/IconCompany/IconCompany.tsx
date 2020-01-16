import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = UseIconProps;

export const IconCompany = (props: IconCompanyProps) => {
  const iconProps = useIcon(props);

  return <IconCompanySvg {...iconProps} />;
};
