export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface Toast {
  id: string;
  treatTheme: string;
  tone: 'positive' | 'critical';
  message: string;
  description?: string;
  action?: ToastAction;
}
