export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface InternalToast {
  id: string;
  dedupeKey: string;
  treatTheme: string;
  tone: 'positive' | 'critical';
  message: string;
  shouldRemove: boolean;
  description?: string;
  action?: ToastAction;
}

export interface Toast {
  key?: string;
  tone: 'positive' | 'critical';
  message: string;
  description?: string;
  action?: ToastAction;
}
