import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconBulletListSvg } from './IconBulletListSvg';

export type IconBulletListProps = IconContainerProps;

export const IconBulletList = (props: IconBulletListProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconBulletListSvg} {...svgProps} />}
  </IconContainer>
);
