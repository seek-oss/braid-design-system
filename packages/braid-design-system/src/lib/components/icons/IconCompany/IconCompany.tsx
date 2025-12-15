import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = IconContainerProps;

export const IconCompany: FC<IconCompanyProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconCompanySvg} {...svgProps} />}
  </IconContainer>
);
