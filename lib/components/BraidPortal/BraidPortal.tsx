import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { TextContext } from '../Text/TextContext';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { VanillaThemeContainer } from '../BraidProvider/VanillaThemeContainer';

export interface BraidPortalProps {
  children: ReactNode;
  container?: Element;
}

export const BraidPortal = ({ children, container }: BraidPortalProps) => {
  const { vanillaTheme } = useBraidTheme();

  return createPortal(
    <TextContext.Provider value={false}>
      <VanillaThemeContainer theme={vanillaTheme} setDefaultTextTones>
        {children}
      </VanillaThemeContainer>
    </TextContext.Provider>,
    container ?? document.body,
  );
};
