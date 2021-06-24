import React, { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { TextContext } from '../Text/TextContext';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export interface BraidPortalProps {
  children: ReactNode;
  container?: Element;
}

export const BraidPortal = ({ children, container }: BraidPortalProps): ReactPortal => {
  const { vanillaTheme } = useBraidTheme();

  return createPortal(
    <TextContext.Provider value={false}>
      <div className={vanillaTheme}>{children}</div>
    </TextContext.Provider>,
    container ?? document.body,
  );
};
