import { useRef } from 'react';
import { v4 as uuid } from 'uuid';

export const useFallbackId = () => useRef(`fallbackId-${uuid()}`).current;
