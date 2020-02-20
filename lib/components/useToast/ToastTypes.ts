export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface Toast {
  id: string;
  treatTheme: string;
  tone: 'neutral' | 'critical';
  message: string;
  description?: string;
  actions?: ToastAction[];
  clearAfter?: '10s' | '20s';
}
