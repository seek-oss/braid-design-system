import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
  ReactNode,
  useState,
  useEffect,
  Fragment,
} from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'sku/react-treat';

import { Toaster } from './Toaster';
import { Toast } from './ToastTypes';

let toastCounter = 0;

type AddToast = (toast: Toast) => void;

const ToastControllerContext = createContext<AddToast | null>(null);

const QUEUE_TOAST = 0;
const REMOVE_TOAST = 1;

type Actions =
  | { type: typeof QUEUE_TOAST; value: Toast }
  | { type: typeof REMOVE_TOAST; value: string };

interface ToastState {
  toasts: Toast[];
}

function reducer(state: ToastState, action: Actions): ToastState {
  switch (action.type) {
    case QUEUE_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, action.value],
      };
    }

    case REMOVE_TOAST: {
      const toasts = state.toasts.filter(({ id }) => id !== action.value);

      return {
        ...state,
        toasts,
      };
    }
  }

  return state;
}
interface ToastProviderProps {
  children: ReactNode;
}
const InternalToastProvider = ({ children }: ToastProviderProps) => {
  const [{ toasts }, dispatch] = useReducer(reducer, {
    toasts: [],
  });

  const addToast = useCallback(
    (props: Toast) => dispatch({ type: QUEUE_TOAST, value: props }),
    [],
  );

  const removeToast = useCallback(
    (id: string) => dispatch({ type: REMOVE_TOAST, value: id }),
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

export const ToastProvider = ({ children }: ToastProviderProps) => {
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

  return createPortal(children, toastElement);
};

export const useToast = () => {
  const treatTheme = useTheme();
  const addToast = useContext(ToastControllerContext);

  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }

  return useCallback(
    (props: Omit<Toast, 'treatTheme' | 'id'>) =>
      addToast({ ...props, treatTheme, id: `${toastCounter++}` }),
    [treatTheme, addToast],
  );
};
