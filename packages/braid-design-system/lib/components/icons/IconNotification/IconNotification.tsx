import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconNotificationSvg } from './IconNotificationSvg';

export type IconNotificationProps = UseIconProps;

export const IconNotification = (props: IconNotificationProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconNotificationSvg} {...iconProps} />;
};
