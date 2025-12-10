import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = IconContainerProps;

export const IconSubCategory: FC<IconSubCategoryProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSubCategorySvg} {...svgProps} />}
  </IconContainer>
);
