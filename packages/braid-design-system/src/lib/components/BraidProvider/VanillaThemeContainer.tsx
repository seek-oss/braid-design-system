import type { ReactNode } from 'react';

import * as typographyStyles from '../../css/typography.css';

interface Props {
  children: ReactNode;
  theme: string;
}

const textTones = [
  typographyStyles.lightModeTone.light,
  typographyStyles.darkModeTone.dark,
].join(' ');

export const VanillaThemeContainer = ({ children, theme }: Props) => (
  <div className={`${theme} ${textTones}`}>{children}</div>
);
