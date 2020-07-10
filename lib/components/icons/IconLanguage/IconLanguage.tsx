import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconLanguageSvg } from './IconLanguageSvg';

export type IconLanguageProps = UseIconProps;

export const IconLanguage = (props: IconLanguageProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconLanguageSvg} {...iconProps} />;
};
