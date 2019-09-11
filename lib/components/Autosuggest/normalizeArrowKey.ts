import { KeyboardEvent } from 'react';

// Normalizes the 'key' property of a KeyboardEvent in IE/Edge
export function normalizeArrowKey({ key, keyCode }: KeyboardEvent) {
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return `Arrow${key}`;
  }
  return key;
}
