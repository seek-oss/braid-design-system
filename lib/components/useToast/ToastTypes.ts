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
  clearAfter?: '5s' | '10s' | 'never';
}
