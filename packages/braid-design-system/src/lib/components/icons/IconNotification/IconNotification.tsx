import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconNotificationSvg } from './IconNotificationSvg';

export type IconNotificationProps = IconContainerProps;

export const IconNotification = (props: IconNotificationProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconNotificationSvg} {...boxProps} />}
  </IconContainer>
);
