import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = IconContainerProps;

export const IconSubCategory = (props: IconSubCategoryProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconSubCategorySvg} {...boxProps} />}
  </IconContainer>
);
