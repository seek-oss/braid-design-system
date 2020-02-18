import { useEffect, useState, useRef, useCallback } from 'react';

interface UseTimeoutProps {
  onTimeout: () => void;
  duration: number;
  enabled: boolean;
}
export const useTimeout = ({
  onTimeout,
  duration,
  enabled,
}: UseTimeoutProps) => {
  const [activated, setActivated] = useState(enabled);
  const timeoutRef = useRef<number | undefined>();

  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);

  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);

      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);

  const startTimeout = useCallback(() => {
    if (enabled) {
      setActivated(true);
    }
  }, [enabled]);

  return {
    stopTimeout,
    startTimeout,
  };
};
