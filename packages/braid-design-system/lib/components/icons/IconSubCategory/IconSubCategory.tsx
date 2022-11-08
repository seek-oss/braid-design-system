import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = UseIconProps;

export const IconSubCategory = (props: IconSubCategoryProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSubCategorySvg} {...iconProps} />;
};
