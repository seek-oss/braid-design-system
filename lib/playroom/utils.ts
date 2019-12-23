import { useRef } from 'react';
import uuid from 'uuid/v4';

export const useFallbackId = () => {
  return useRef(`fallbackId-${uuid()}`).current;
};
