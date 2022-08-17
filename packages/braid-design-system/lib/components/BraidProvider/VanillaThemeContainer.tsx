import React, { ReactNode } from 'react';

import * as typographyStyles from '../../hooks/typography/typography.css';

interface Props {
  children: ReactNode;
  theme: string;
  setDefaultTextTones: boolean;
}

const textTones = [
  typographyStyles.lightModeTone.light,
  typographyStyles.darkModeTone.dark,
].join(' ');

export const VanillaThemeContainer = ({
  children,
  theme,
  setDefaultTextTones,
}: Props) => (
  <div className={`${theme}${setDefaultTextTones ? ` ${textTones}` : ''}`}>
    {children}
  </div>
);
