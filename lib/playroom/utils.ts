import { useRef } from 'react';
import uuid from 'uuid/v4';

export const useFallbackId = () => useRef(`fallbackId-${uuid()}`).current;
