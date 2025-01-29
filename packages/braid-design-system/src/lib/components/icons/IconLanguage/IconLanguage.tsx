import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconLanguageSvg } from './IconLanguageSvg';

export type IconLanguageProps = IconContainerProps;

export const IconLanguage = (props: IconLanguageProps) => (
  <IconContainer {...props}>
    {(svgProps) => <Box component={IconLanguageSvg} {...svgProps} />}
  </IconContainer>
);
