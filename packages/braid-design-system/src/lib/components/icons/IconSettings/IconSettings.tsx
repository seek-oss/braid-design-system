import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSettingsSvg } from './IconSettingsSvg';

export type IconSettingsProps = IconContainerProps;

export const IconSettings = (props: IconSettingsProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconSettingsSvg} {...svgProps} />}
  </IconContainer>
);
