import { useEffect } from 'react';

import { isMac } from './platformTest';

interface UseSearchHotkeyOptions {
  onOpen: () => void;
}

export const useSearchHotkey = ({ onOpen }: UseSearchHotkeyOptions) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isModifierPressed = isMac() ? event.metaKey : event.ctrlKey;

      if (isModifierPressed && event.key === 'k') {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpen]);
};
