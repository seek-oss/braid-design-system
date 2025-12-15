import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBluetoothSvg } from './IconBluetoothSvg';

export type IconBluetoothProps = IconContainerProps;

export const IconBluetooth: FC<IconBluetoothProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconBluetoothSvg} {...svgProps} />}
  </IconContainer>
);
