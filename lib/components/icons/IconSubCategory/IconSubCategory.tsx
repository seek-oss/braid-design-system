import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = UseIconProps;

export const IconSubCategory = (props: IconSubCategoryProps) => {
  const iconProps = useIcon(props);

  return <IconSubCategorySvg {...iconProps} />;
};
