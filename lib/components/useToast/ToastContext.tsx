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
import { ContentBlockProps } from '../ContentBlock/ContentBlock';

let toastCounter = 0;

type AddToast = (toast: Toast) => void;

const ToastControllerContext = createContext<AddToast | null>(null);

type Actions =
  | { type: 'QUEUE_TOAST'; value: Toast }
  | { type: 'REMOVE_TOAST'; value: string };

interface ToastState {
  toasts: Toast[];
}

function reducer(state: ToastState, action: Actions): ToastState {
  switch (action.type) {
    case 'QUEUE_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.value],
      };
    }

    case 'REMOVE_TOAST': {
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
  width?: ContentBlockProps['width'];
  children: ReactNode;
}
const InternalToastProvider = ({ width, children }: ToastProviderProps) => {
  const [{ toasts }, dispatch] = useReducer(reducer, {
    toasts: [],
  });

  const addToast = useCallback(
    (props: Toast) => dispatch({ type: 'QUEUE_TOAST', value: props }),
    [],
  );

  const removeToast = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_TOAST', value: id }),
    [],
  );

  return (
    <ToastControllerContext.Provider value={addToast}>
      {children}
      <ToastPortal>
        <Toaster width={width} toasts={toasts} removeToast={removeToast} />
      </ToastPortal>
    </ToastControllerContext.Provider>
  );
};

export const ToastProvider = ({ width, children }: ToastProviderProps) => {
  const currentContext = useContext(ToastControllerContext);

  if (currentContext !== null) {
    // Bail early as "ToastProvider" is already setup
    return <Fragment>{children}</Fragment>;
  }

  return (
    <InternalToastProvider width={width}>{children}</InternalToastProvider>
  );
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

  return (props: Omit<Toast, 'treatTheme' | 'id'>) =>
    addToast({ ...props, treatTheme, id: `${toastCounter++}` });
};
