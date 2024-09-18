import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconCompanySvg } from './IconCompanySvg';

export type IconCompanyProps = IconContainerProps;

export const IconCompany = (props: IconCompanyProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconCompanySvg} {...boxProps} />}
  </IconContainer>
);
