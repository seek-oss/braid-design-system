import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconNumberedListSvg } from './IconNumberedListSvg';

export type IconNumberedListProps = IconContainerProps;

export const IconNumberedList = (props: IconNumberedListProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconNumberedListSvg} {...svgProps} />}
  </IconContainer>
);
