import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
export var useFallbackId = function useFallbackId() {
  return useRef("fallbackId-".concat(uuid())).current;
};