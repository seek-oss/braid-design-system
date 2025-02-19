import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';

export type IconDocumentBrokenProps = IconContainerProps;

export const IconDocumentBroken = (props: IconDocumentBrokenProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDocumentBrokenSvg} {...svgProps} />}
  </IconContainer>
);
