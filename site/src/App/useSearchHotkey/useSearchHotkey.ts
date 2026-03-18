import { useEffect } from 'react';

interface UseSearchHotkeyOptions {
  onOpen: () => void;
}

export const useSearchHotkey = ({ onOpen }: UseSearchHotkeyOptions) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const isModifierPressed = isMac ? event.metaKey : event.ctrlKey;

      if (isModifierPressed && event.key === 'k') {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpen]);
};
