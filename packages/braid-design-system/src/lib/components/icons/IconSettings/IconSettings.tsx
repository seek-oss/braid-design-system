import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSettingsSvg } from './IconSettingsSvg';

export type IconSettingsProps = IconContainerProps;

export const IconSettings: FC<IconSettingsProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSettingsSvg} {...svgProps} />}
  </IconContainer>
);
