import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconItalicSvg } from './IconItalicSvg';

export type IconItalicProps = IconContainerProps;

export const IconItalic = (props: IconItalicProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconItalicSvg} {...svgProps} />}
  </IconContainer>
);
