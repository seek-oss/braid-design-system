import { useId } from 'react';

export const useFallbackId = (id?: string) => {
  const fallbackId = useId();
  return id || fallbackId;
};
