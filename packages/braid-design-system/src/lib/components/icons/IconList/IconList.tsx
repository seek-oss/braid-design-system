import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconListSvg } from './IconListSvg';

export type IconListProps = IconContainerProps;

export const IconList = (props: IconListProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconListSvg} {...boxProps} />}
  </IconContainer>
);
