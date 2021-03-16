import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { TextContext } from '../Text/TextContext';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export interface BraidPortalProps {
  children: ReactNode;
  container?: Element;
}

export const BraidPortal = ({ children, container }: BraidPortalProps) => {
  const { nextTheme } = useBraidTheme();

  return createPortal(
    <TextContext.Provider value={false}>
      <div className={nextTheme}>{children}</div>
    </TextContext.Provider>,
    container ?? document.body,
  );
};
