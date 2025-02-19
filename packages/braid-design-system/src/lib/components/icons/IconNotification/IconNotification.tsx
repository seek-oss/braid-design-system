import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconNotificationSvg } from './IconNotificationSvg';

export type IconNotificationProps = IconContainerProps;

export const IconNotification = (props: IconNotificationProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconNotificationSvg} {...svgProps} />}
  </IconContainer>
);
