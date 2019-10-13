import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { Box, Stack } from '..';
import { Toast as ToastComponent } from './Toast';

interface Toast {
  message: string;
}

type AddToast = (toast: Toast) => void;

const ToastControllerContext = createContext<AddToast | null>(null);

type Actions = { type: 'QUEUE_TOAST'; value: Toast } | { type: 'REMOVE_TOAST' };

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
      return {
        ...state,
        activeToasts: state.activeToasts.slice(
          0,
          state.activeToasts.length - 1,
        ),
      };
    }
  }

  return state;
}

interface ToastProviderProps {
  children: ReactNode;
}
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [{ activeToasts }, dispatch] = useReducer(reducer, {
    activeToasts: [],
    queuedToasts: [],
  });

  const addToast = useCallback(
    (props: Toast) => dispatch({ type: 'QUEUE_TOAST', value: props }),
    [],
  );

  const removeToast = () => dispatch({ type: 'REMOVE_TOAST' });

  return (
    <ToastControllerContext.Provider value={addToast}>
      {children}
      <ToastPortal>
        <Box
          position="fixed"
          display="flex"
          justifyContent="center"
          paddingBottom="medium"
          width="full"
          pointerEvents="none"
          style={{ bottom: 0 }}
        >
          <Stack space="medium">
            {activeToasts.map(({ message }, index) => (
              <ToastComponent
                key={index}
                message={message}
                onClear={removeToast}
              />
            ))}
          </Stack>
        </Box>
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
  const addToast = useContext(ToastControllerContext);

  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }

  return addToast;
};
