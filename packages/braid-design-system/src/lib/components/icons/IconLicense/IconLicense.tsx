import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLicenseSvg } from './IconLicenseSvg';

export type IconLicenseProps = IconContainerProps;

export const IconLicense = (props: IconLicenseProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLicenseSvg} {...svgProps} />}
  </IconContainer>
);
