import {
  type ReactNode,
  useContext,
  createContext,
  useReducer,
  useCallback,
  useState,
  useEffect,
  Fragment,
  type FC,
} from 'react';

import { BraidPortal } from '../BraidPortal/BraidPortal';

import type { Toast, InternalToast } from './ToastTypes';
import { Toaster } from './Toaster';

let toastCounter = 0;

type AddToast = (toast: InternalToast) => void;

const ToastControllerContext = createContext<AddToast | null>(null);

const QUEUE_TOAST = 0;
const REMOVE_TOAST = 1;

type Actions =
  | { type: typeof QUEUE_TOAST; toast: InternalToast }
  | { type: typeof REMOVE_TOAST; dedupeKey: string };

interface ToastState {
  toasts: InternalToast[];
  queuedToasts: Record<string, InternalToast | undefined>;
}

function reducer(state: ToastState, action: Actions): ToastState {
  switch (action.type) {
    case QUEUE_TOAST: {
      const { toast } = action;

      const hasExistingToast = state.toasts.some(
        (t) => t.dedupeKey === toast.dedupeKey,
      );

      if (hasExistingToast) {
        return {
          toasts: state.toasts.map((t) => {
            if (t.dedupeKey === toast.dedupeKey) {
              return {
                ...t,
                shouldRemove: true,
              };
            }

            return t;
          }),
          queuedToasts: {
            ...state.queuedToasts,
            [toast.dedupeKey]: toast,
          },
        };
      }

      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }

    case REMOVE_TOAST: {
      const toasts = state.toasts.filter(
        ({ dedupeKey }) => dedupeKey !== action.dedupeKey,
      );

      const queuedToast = state.queuedToasts[action.dedupeKey];

      if (queuedToast) {
        return {
          queuedToasts: {
            ...state.queuedToasts,
            [action.dedupeKey]: undefined,
          },
          toasts: [...toasts, queuedToast],
        };
      }

      return {
        ...state,
        toasts,
      };
    }
  }
}
interface ToastProviderProps {
  children: ReactNode;
}
const InternalToastProvider = ({ children }: ToastProviderProps) => {
  const [{ toasts }, dispatch] = useReducer(reducer, {
    toasts: [],
    queuedToasts: {},
  });

  const addToast = useCallback(
    (toast: InternalToast) => dispatch({ type: QUEUE_TOAST, toast }),
    [],
  );

  const removeToast = useCallback(
    (dedupeKey: string) => dispatch({ type: REMOVE_TOAST, dedupeKey }),
    [],
  );

  return (
    <ToastControllerContext.Provider value={addToast}>
      {children}
      <ToastPortal>
        <Toaster toasts={toasts} removeToast={removeToast} />
      </ToastPortal>
    </ToastControllerContext.Provider>
  );
};

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const currentContext = useContext(ToastControllerContext);

  if (currentContext !== null) {
    // Bail early as "ToastProvider" is already setup
    return <Fragment>{children}</Fragment>;
  }

  return <InternalToastProvider>{children}</InternalToastProvider>;
};

interface ToastPortalProps {
  children: ReactNode;
}
const ToastPortal = ({ children }: ToastPortalProps) => {
  const [toastElement, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const toastContainerId = 'braid-toast-container';
    let element = document.getElementById(toastContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', toastContainerId);
      element.setAttribute('class', '');

      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!toastElement) {
    return null;
  }

  return <BraidPortal container={toastElement}>{children}</BraidPortal>;
};

export const useToast = () => {
  const addToast = useContext(ToastControllerContext);

  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }

  return useCallback(
    (toast: Toast) => {
      const toastKey = `${toastCounter++}`;
      const { key, ...rest } = toast;
      const dedupeKey = key ?? toastKey;

      addToast({
        ...rest,
        toastKey,
        dedupeKey,
        shouldRemove: false,
      });
    },
    [addToast],
  );
};
