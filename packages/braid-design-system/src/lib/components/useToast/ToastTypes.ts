import type { ReactElement } from 'react';

import type { UseIconProps } from '../../hooks/useIcon';
import type { DataAttributeMap } from '../private/buildDataAttributes';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface InternalToast {
  /** Unique for each copy of a toast. Used to handle adding and removing from the DOM. */
  toastKey: string;
  /** Used to guarantee that only a single toast with a given key is visible at once. */
  dedupeKey: string;
  vanillaTheme: string;
  tone: 'positive' | 'critical' | 'neutral';
  icon?: ReactElement<UseIconProps>;
  message: string;
  shouldRemove: boolean;
  description?: string;
  action?: ToastAction;
  closeLabel?: string;
  data?: DataAttributeMap;
}

export type Toast = {
  key?: string;
  message: string;
  description?: string;
  action?: ToastAction;
  closeLabel?: string;
  data?: DataAttributeMap;
} & (
  | {
      tone: 'positive' | 'critical';
    }
  | { tone: 'neutral'; icon?: ReactElement<UseIconProps> }
);
