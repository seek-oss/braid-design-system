import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLicenceSvg } from './IconLicenceSvg';

export type IconLicenceProps = IconContainerProps;

export const IconLicence: FC<IconLicenceProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLicenceSvg} {...svgProps} />}
  </IconContainer>
);
