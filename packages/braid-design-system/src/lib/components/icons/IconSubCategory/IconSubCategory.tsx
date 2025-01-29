import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSubCategorySvg } from './IconSubCategorySvg';

export type IconSubCategoryProps = IconContainerProps;

export const IconSubCategory = (props: IconSubCategoryProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSubCategorySvg} {...svgProps} />}
  </IconContainer>
);
