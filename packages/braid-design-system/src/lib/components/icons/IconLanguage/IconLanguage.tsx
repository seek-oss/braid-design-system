import React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconLanguageSvg } from './IconLanguageSvg';

export type IconLanguageProps = IconContainerProps;

export const IconLanguage = (props: IconLanguageProps) => (
  <IconContainer {...props}>
    {(boxProps) => <Box component={IconLanguageSvg} {...boxProps} />}
  </IconContainer>
);
