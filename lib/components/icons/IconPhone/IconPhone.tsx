import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconPhoneSvg } from './IconPhoneSvg';

export type IconPhoneProps = UseIconProps;

export const IconPhone = (props: IconPhoneProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconPhoneSvg} {...iconProps} />;
};
