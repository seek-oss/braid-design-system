import { ReactElement } from 'react';
import { UseIconProps } from '../../hooks/useIcon';

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
}

export type Toast = {
  key?: string;
  message: string;
  description?: string;
  action?: ToastAction;
  closeLabel?: string;
} & (
  | {
      tone: 'positive' | 'critical';
    }
  | { tone: 'neutral'; icon?: ReactElement<UseIconProps> }
);
