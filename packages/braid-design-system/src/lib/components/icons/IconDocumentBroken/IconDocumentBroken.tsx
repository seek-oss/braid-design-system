import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';

export type IconDocumentBrokenProps = IconContainerProps;

export const IconDocumentBroken: FC<IconDocumentBrokenProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconDocumentBrokenSvg} {...svgProps} />}
  </IconContainer>
);
