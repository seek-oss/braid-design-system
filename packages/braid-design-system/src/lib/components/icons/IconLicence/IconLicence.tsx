import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLicenceSvg } from './IconLicenceSvg';

export type IconLicenceProps = IconContainerProps;

export const IconLicence = (props: IconLicenceProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLicenceSvg} {...svgProps} />}
  </IconContainer>
);
