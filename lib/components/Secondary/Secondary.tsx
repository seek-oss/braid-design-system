import React, { ReactNode } from 'react';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';

export interface SecondaryProps {
  children: ReactNode;
}

const Secondary = ({ children }: Secondary) => (
  <ThemeConsumer>
    {({ atoms }) => <span className={atoms.color.secondary}>{children}</span>}
  </ThemeConsumer>
);

Secondary.displayName = 'Secondary';

export default Secondary;
