import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCategorySvg } from './IconCategorySvg';

export type IconCategoryProps = IconContainerProps;

export const IconCategory: FC<IconCategoryProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCategorySvg} {...svgProps} />}
  </IconContainer>
);
