import React from 'react';
import { Box } from '../../Box/Box';
import type { UseIconProps } from '../../../hooks/useIcon';
import useIcon from '../../../hooks/useIcon';
import { IconCategorySvg } from './IconCategorySvg';

export type IconCategoryProps = UseIconProps;

export const IconCategory = (props: IconCategoryProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconCategorySvg} {...iconProps} />;
};
