import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCompanyFilledSvg } from './IconCompanyFilledSvg';

export type IconCompanyFilledProps = IconContainerProps;

export const IconCompanyFilled: FC<IconCompanyFilledProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCompanyFilledSvg} {...svgProps} />}
  </IconContainer>
);
