import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { VanillaThemeContainer } from '../BraidProvider/VanillaThemeContainer';
import { TextContext } from '../Text/TextContext';

export interface BraidPortalProps {
  children: ReactNode;
  container?: Element;
}

export const BraidPortal: FC<BraidPortalProps> = ({ children, container }) => {
  const { vanillaTheme } = useBraidTheme();

  return createPortal(
    <TextContext.Provider value={null}>
      <VanillaThemeContainer theme={vanillaTheme} setDefaultTextTones>
        {children}
      </VanillaThemeContainer>
    </TextContext.Provider>,
    container ?? document.body,
  );
};
