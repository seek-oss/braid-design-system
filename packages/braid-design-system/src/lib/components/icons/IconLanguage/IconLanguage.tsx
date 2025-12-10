import type { FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLanguageSvg } from './IconLanguageSvg';

export type IconLanguageProps = IconContainerProps;

export const IconLanguage: FC<IconLanguageProps> = (props) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLanguageSvg} {...svgProps} />}
  </IconContainer>
);
