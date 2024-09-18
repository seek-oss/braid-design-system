import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconHistorySvg } from './IconHistorySvg';

export type IconHistoryProps = IconContainerProps;

export const IconHistory = (props: IconHistoryProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconHistorySvg} {...boxProps} />}
  </IconContainer>
);
