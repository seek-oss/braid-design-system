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
import FocusLock from 'react-focus-lock';
import { ariaHideOthers } from './ariaHideOthers';
import { Box } from '../../Box/Box';
import { BraidPortal } from '../../BraidPortal/BraidPortal';
import { externalGutter } from './ModalExternalGutter';
import { ModalContent, ModalContentProps } from './ModalContent';
import * as styles from './Modal.css';

export interface ModalProps
  extends Omit<
    ModalContentProps,
    'onClose' | 'scrollLock' | 'headingRef' | 'modalRef'
  > {
  open: boolean;
  onClose: (openState: false) => void;
}

export const AllowCloseContext = createContext(true);

interface ModalPortalProps {
  children: ReactNode;
}
const ModalPortal = ({ children }: ModalPortalProps) => {
  const [modalElement, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalContainerId = 'braid-modal-container';
    let element = document.getElementById(modalContainerId);

    if (!element) {
      element = document.createElement('div');
      element.setAttribute('id', modalContainerId);
      element.setAttribute('class', styles.fixedStackingContext);

      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!modalElement) {
    return null;
  }

  return <BraidPortal container={modalElement}>{children}</BraidPortal>;
};

// Actions
const OPEN_MODAL = 1;
const CLOSE_MODAL = 2;
const ANIMATION_COMPLETE = 3;

// States
const INITIAL = 1;
const OPEN = 2;
const OPENING = 3;
const CLOSED = 4;
const CLOSING = 5;

type Action =
  | typeof OPEN_MODAL
  | typeof CLOSE_MODAL
  | typeof ANIMATION_COMPLETE;
type State =
  | typeof INITIAL
  | typeof OPEN
  | typeof OPENING
  | typeof CLOSED
  | typeof CLOSING;

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action) {
    case OPEN_MODAL: {
      switch (prevState) {
        case INITIAL:
        case CLOSING:
        case CLOSED: {
          return OPENING;
        }
      }
    }

    case CLOSE_MODAL: {
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

const ANIMATION_DURATION = 300;
export const Modal = ({
  id,
  open,
  children,
  description,
  onClose,
  width,
  closeLabel,
  illustration,
  title,
  headingLevel,
  position,
  data,
}: ModalProps) => {
  const [trapActive, setTrapActive] = useState(true);
  const [state, dispatch] = useReducer(reducer, INITIAL);

  const allowClose = useContext(AllowCloseContext);
  const shouldFocus =
    typeof document !== 'undefined' &&
    typeof document.hasFocus === 'function' &&
    document.hasFocus();

  const openRef = useRef<boolean>(open);
  const modalRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLElement>(null);
  const closeHandlerRef = useRef<ModalProps['onClose']>(onClose);

  const initiateClose = () => {
    if (allowClose) {
      dispatch(CLOSE_MODAL);
    }
  };

  useEffect(() => {
    openRef.current = open;
    dispatch(open ? OPEN_MODAL : CLOSE_MODAL);
  }, [open]);

  useEffect(() => {
    if (state === CLOSING) {
      const timer = setTimeout(() => {
        dispatch(ANIMATION_COMPLETE);
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }

    if (state === CLOSED && openRef.current) {
      closeHandlerRef.current(false);
    }
  }, [state]);

  const shouldAriaHideOthers = state === OPEN || state === CLOSING;
  useEffect(() => {
    if (shouldAriaHideOthers && modalRef.current) {
      return ariaHideOthers(modalRef.current, { delay: ANIMATION_DURATION });
    }
  }, [shouldAriaHideOthers]);

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

  return state === OPENING || state === OPEN || state === CLOSING ? (
    <ModalPortal>
      <FocusLock
        className={styles.resetStackingContext}
        disabled={!trapActive}
        autoFocus={false}
        onActivation={() => {
          if (state === OPEN) {
            return;
          }

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
          inset={0}
          zIndex="modalBackdrop"
          transition={position === 'center' ? 'fast' : undefined}
          opacity={state !== OPEN ? 0 : undefined}
          pointerEvents={state === CLOSING ? 'none' : undefined}
          className={[
            styles.backdrop,
            position === 'left' ||
              (position === 'right' && styles.horiztontalTransition),
          ]}
        />

        <Box
          position="fixed"
          inset={0}
          zIndex="modal"
          pointerEvents="none"
          transition="fast"
          opacity={state !== OPEN ? 0 : undefined}
          paddingLeft={position === 'right' ? ['none', 'xlarge'] : undefined}
          paddingRight={position === 'left' ? ['none', 'xlarge'] : undefined}
          padding={position === 'center' ? externalGutter : undefined}
          className={[
            styles.modalContainer,
            position === 'left' ||
              (position === 'right' && styles.horiztontalTransition),
            state === OPENING && styles.entrance[position],
            state === CLOSING &&
              position in styles.exit &&
              styles.exit[position as keyof typeof styles.exit],
          ]}
        >
          <ModalContent
            id={id}
            description={description}
            onClose={initiateClose}
            width={width}
            closeLabel={closeLabel}
            illustration={illustration}
            title={title}
            headingLevel={headingLevel}
            headingRef={headingRef}
            modalRef={modalRef}
            position={position}
            scrollLock={!(state === CLOSING)}
            data={data}
          >
            {children}
          </ModalContent>
        </Box>
      </FocusLock>
    </ModalPortal>
  ) : null;
};
