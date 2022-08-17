export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface InternalToast {
  id: string;
  dedupeKey: string;
  treatTheme: string;
  vanillaTheme: string;
  tone: 'positive' | 'critical';
  message: string;
  shouldRemove: boolean;
  description?: string;
  action?: ToastAction;
  closeLabel?: string;
}

export interface Toast {
  key?: string;
  tone: 'positive' | 'critical';
  message: string;
  description?: string;
  action?: ToastAction;
  closeLabel?: string;
}
