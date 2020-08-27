import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  Reducer,
  useReducer,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { useStyles } from 'sku/react-treat';
import { hideOthers as ariaHideOthers } from 'aria-hidden';
import assert from 'assert';
import { Box } from '../Box/Box';
import { externalGutter } from './DialogExternalGutter';
import { DialogCard, DialogCardProps } from './DialogCard';
import * as styleRefs from './Dialog.treat';

export interface DialogProps extends Omit<DialogCardProps, 'onClose'> {
  open: boolean;
  onClose: (open: boolean) => void;
}

const DialogContext = createContext(false);

export const AllowCloseContext = createContext(true);

interface DialogPortalProps {
  children: ReactNode;
}
const DialogPortal = ({ children }: DialogPortalProps) => {
  const [dialogElement, setElement] = useState<HTMLElement | null>(null);
  const dialogContext = useContext(DialogContext);

  assert(!dialogContext, 'Nested Dialogs are not supported.');

  useEffect(() => {
    const dialogContainerId = 'braid-dialog-container';
    let element = document.getElementById(dialogContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', dialogContainerId);
      element.setAttribute('class', '');

      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!dialogElement) {
    return null;
  }

  return createPortal(
    <DialogContext.Provider value={true}>{children}</DialogContext.Provider>,
    dialogElement,
  );
};

// Actions
const OPEN_DIALOG = 1;
const CLOSE_DIALOG = 2;
const ANIMATION_COMPLETE = 3;

// States
const INITIAL = 1;
const OPEN = 2;
const OPENING = 3;
const CLOSED = 4;
const CLOSING = 5;

type Action =
  | typeof OPEN_DIALOG
  | typeof CLOSE_DIALOG
  | typeof ANIMATION_COMPLETE;
type State =
  | typeof INITIAL
  | typeof OPEN
  | typeof OPENING
  | typeof CLOSED
  | typeof CLOSING;

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action) {
    case OPEN_DIALOG: {
      switch (prevState) {
        case INITIAL:
        case CLOSING:
        case CLOSED: {
          return OPENING;
        }
      }
    }

    case CLOSE_DIALOG: {
      switch (prevState) {
        case OPEN:
        case OPENING: {
          return CLOSING;
        }
      }
    }

    case ANIMATION_COMPLETE: {
      switch (prevState) {
        case CLOSING: {
          return CLOSED;
        }

        case OPENING: {
          return OPEN;
        }
      }
    }
  }

  return prevState;
};

const CLOSE_ANIMATION_DURATION = 200;
export const Dialog = ({
  id,
  open,
  children,
  description,
  onClose,
  width,
  closeLabel,
  illustration,
  title,
}: DialogProps) => {
  const styles = useStyles(styleRefs);
  const [trapActive, setTrapActive] = useState(true);
  const [state, dispatch] = useReducer(reducer, INITIAL);

  const allowClose = useContext(AllowCloseContext);
  const shouldFocus =
    typeof document !== 'undefined' &&
    typeof document.hasFocus === 'function' &&
    document.hasFocus();

  const openRef = useRef<boolean>(open);
  const dialogRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLElement>(null);
  const closeHandlerRef = useRef<DialogProps['onClose']>(onClose);

  const initiateClose = () => {
    if (allowClose) {
      dispatch(CLOSE_DIALOG);
    }
  };

  useEffect(() => {
    openRef.current = open;
    dispatch(open ? OPEN_DIALOG : CLOSE_DIALOG);
  }, [open]);

  useEffect(() => {
    if (state === CLOSING) {
      const timer = setTimeout(() => {
        dispatch(ANIMATION_COMPLETE);
      }, CLOSE_ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }

    if (state === OPEN && dialogRef.current) {
      return ariaHideOthers(dialogRef.current);
    }

    if (state === CLOSED && openRef.current) {
      closeHandlerRef.current(false);
    }
  }, [state]);

  useEffect(() => {
    if (typeof onClose === 'function') {
      closeHandlerRef.current = onClose;
    }
  }, [onClose]);

  useEffect(() => {
    const event = trapActive ? 'blur' : 'focus';
    const handleEvent = () => setTrapActive(!trapActive);

    window.addEventListener(event, handleEvent);

    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, [trapActive]);

  return (
    <DialogPortal>
      {state === OPENING || state === OPEN || state === CLOSING ? (
        <FocusLock
          disabled={!trapActive}
          autoFocus={false}
          onActivation={() => {
            if (headingRef.current && shouldFocus) {
              headingRef.current.focus();
            }

            dispatch(ANIMATION_COMPLETE);
          }}
          returnFocus
        >
          <Box
            onClick={state === OPEN ? initiateClose : undefined}
            position="fixed"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex="modalBackdrop"
            transition="fast"
            opacity={state !== OPEN ? 0 : undefined}
            className={styles.backdrop}
          />

          <Box
            position="fixed"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex="modal"
            display="flex"
            alignItems="center"
            justifyContent="center"
            pointerEvents="none"
            transition="fast"
            opacity={state !== OPEN ? 0 : undefined}
            padding={externalGutter}
            className={[
              styles.dialogContainer,
              state === OPENING && styles.entrance,
            ]}
          >
            <DialogCard
              id={id}
              description={description}
              onClose={initiateClose}
              width={width}
              closeLabel={closeLabel}
              illustration={illustration}
              title={title}
              headingRef={headingRef}
              dialogRef={dialogRef}
            >
              {children}
            </DialogCard>
          </Box>
        </FocusLock>
      ) : null}
    </DialogPortal>
  );
};
