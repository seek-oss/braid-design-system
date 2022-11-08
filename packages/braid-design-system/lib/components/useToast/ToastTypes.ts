import type { ReactElement } from 'react';
import type { UseIconProps } from '../../hooks/useIcon';
import type { DataAttributeMap } from '../private/buildDataAttributes';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface InternalToast {
  id: string;
  dedupeKey: string;
  treatTheme: string;
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
