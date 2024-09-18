import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconCategorySvg } from './IconCategorySvg';

export type IconCategoryProps = IconContainerProps;

export const IconCategory = (props: IconCategoryProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCategorySvg} {...svgProps} />}
  </IconContainer>
);
