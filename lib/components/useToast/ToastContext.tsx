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
import { useTheme } from 'sku/treat';
import { Toast, Toaster } from './Toaster';

type AddToast = (toast: Toast) => void;

const ToastControllerContext = createContext<AddToast | null>(null);

type Actions =
  | { type: 'QUEUE_TOAST'; value: Toast }
  | { type: 'REMOVE_TOAST'; value: number };

interface ToastState {
  activeToasts: Toast[];
  queuedToasts: Toast[];
}

function reducer(state: ToastState, action: Actions) {
  switch (action.type) {
    case 'QUEUE_TOAST': {
      return {
        ...state,
        activeToasts: [...state.activeToasts, action.value],
      };
    }

    case 'REMOVE_TOAST': {
      const newActiveToasts = state.activeToasts.slice();
      newActiveToasts.splice(action.value, 1);

      return {
        ...state,
        activeToasts: newActiveToasts,
      };
    }
  }

  return state;
}

interface ToastProviderProps {
  children: ReactNode;
}
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const currentContext = useContext(ToastControllerContext);
  if (currentContext !== null) {
    // Bail early as "ToastProvider" is already setup
    return <Fragment>{children}</Fragment>;
  }

  const [{ activeToasts }, dispatch] = useReducer(reducer, {
    activeToasts: [],
    queuedToasts: [],
  });

  const addToast = useCallback(
    (props: Toast) => dispatch({ type: 'QUEUE_TOAST', value: props }),
    [],
  );

  const removeToast = useCallback(
    (toastIndex: number) =>
      dispatch({ type: 'REMOVE_TOAST', value: toastIndex }),
    [],
  );

  return (
    <ToastControllerContext.Provider value={addToast}>
      {children}
      <ToastPortal>
        <Toaster activeToasts={activeToasts} removeToast={removeToast} />
      </ToastPortal>
    </ToastControllerContext.Provider>
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

  return (props: Omit<Toast, 'treatTheme'>) =>
    addToast({ ...props, treatTheme });
};
