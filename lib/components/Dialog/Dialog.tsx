import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  forwardRef,
  Fragment,
  useContext,
  Reducer,
  useReducer,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { useStyles } from 'sku/react-treat';
import { hideOthers as ariaHideOthers } from 'aria-hidden';
import assert from 'assert';
import { Box } from '../Box/Box';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { normalizeKey } from '../private/normalizeKey';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { ContentBlock, ContentBlockProps } from '../ContentBlock/ContentBlock';
import { Overlay } from '../private/Overlay/Overlay';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { externalGutter } from './DialogExternalGutter';
import * as styleRefs from './Dialog.treat';

export interface DialogProps {
  id: string;
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: (open: boolean) => void;
  closeLabel?: string;
  width?: ContentBlockProps['width'] | 'content';
  description?: ReactNodeNoStrings;
  illustration?: ReactNodeNoStrings;
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

const dialogPadding = ['gutter', 'large'] as const;

interface HeaderProps extends Pick<DialogProps, 'description'> {
  title: string;
  descriptionId: string;
  center?: boolean;
}
const DialogHeader = forwardRef<HTMLElement, HeaderProps>(
  ({ title, description, descriptionId, center }, ref) => {
    const styles = useStyles(styleRefs);

    return (
      <Stack space="medium">
        <Heading level="3" align={center ? 'center' : undefined}>
          <Box
            ref={ref}
            component="span"
            tabIndex={-1}
            outline="none"
            position="relative"
            className={styles.heading}
          >
            {title}
            <Overlay
              boxShadow="outlineFocus"
              borderRadius="standard"
              transition="fast"
              className={styles.heading}
              onlyVisibleForKeyboardNavigation
            />
          </Box>
        </Heading>
        {description ? <Box id={descriptionId}>{description}</Box> : null}
      </Stack>
    );
  },
);

const Container = ({
  children,
  width,
}: {
  children: ReactNode;
  width: DialogProps['width'];
}) =>
  width !== 'content' ? (
    <ContentBlock width={width}>{children}</ContentBlock>
  ) : (
    <Fragment>{children}</Fragment>
  );

type Action = 'OPEN' | 'CLOSE' | 'ANIMATION_COMPLETE';
type State = 'INITIAL' | 'OPEN' | 'OPENING' | 'CLOSED' | 'CLOSING';

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action) {
    case 'OPEN': {
      switch (prevState) {
        case 'INITIAL':
        case 'CLOSING':
        case 'CLOSED': {
          return 'OPENING';
        }
      }
    }

    case 'CLOSE': {
      switch (prevState) {
        case 'OPEN':
        case 'OPENING': {
          return 'CLOSING';
        }
      }
    }

    case 'ANIMATION_COMPLETE': {
      switch (prevState) {
        case 'CLOSING': {
          return 'CLOSED';
        }

        case 'OPENING': {
          return 'OPEN';
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
  width = 'small',
  closeLabel = 'Close',
  illustration,
  title,
}: DialogProps) => {
  const styles = useStyles(styleRefs);
  const [trapActive, setTrapActive] = useState(true);
  const [state, dispatch] = useReducer(reducer, 'INITIAL');

  const allowClose = useContext(AllowCloseContext);
  const shouldFocus =
    typeof document !== 'undefined' &&
    typeof document.hasFocus === 'function' &&
    document.hasFocus();

  const openRef = useRef<boolean>(open);
  const dialogRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLElement>(null);
  const closeHandlerRef = useRef<DialogProps['onClose']>(onClose);

  const descriptionId = `${id}_desc`;

  const initiateClose = () => {
    if (allowClose) {
      dispatch('CLOSE');
    }
  };

  const handleEscape = useCallback((event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === 'Escape') {
      event.stopPropagation();
      dispatch('CLOSE');
    }
  }, []);

  useEffect(() => {
    openRef.current = open;
    dispatch(open ? 'OPEN' : 'CLOSE');
  }, [open]);

  useEffect(() => {
    if (state === 'CLOSING') {
      const timer = setTimeout(() => {
        dispatch('ANIMATION_COMPLETE');
      }, CLOSE_ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }

    if (state === 'OPEN' && dialogRef.current) {
      return ariaHideOthers(dialogRef.current);
    }

    if (state === 'CLOSED' && openRef.current) {
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
      {state === 'OPENING' || state === 'OPEN' || state === 'CLOSING' ? (
        <FocusLock
          disabled={!trapActive}
          autoFocus={false}
          onActivation={() => {
            if (headingRef.current && shouldFocus) {
              headingRef.current.focus();
            }

            dispatch('ANIMATION_COMPLETE');
          }}
          returnFocus
        >
          <Box
            onClick={state === 'OPEN' ? initiateClose : undefined}
            position="fixed"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex="modalBackdrop"
            transition="fast"
            opacity={state !== 'OPEN' ? 0 : undefined}
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
            opacity={state !== 'OPEN' ? 0 : undefined}
            padding={externalGutter}
            className={[
              styles.dialogContainer,
              state !== 'OPEN' && styles.closed,
            ]}
          >
            <Container width={width}>
              <RemoveScroll>
                <Box
                  ref={dialogRef}
                  role="dialog"
                  aria-label={title} // Using aria-labelledby would announce the heading after the dialog content.
                  aria-describedby={description ? descriptionId : undefined}
                  aria-modal="true"
                  onKeyDown={handleEscape}
                  background="card"
                  borderRadius="standard"
                  overflow="auto"
                  position="relative"
                  boxShadow="large"
                  width={width !== 'content' ? 'full' : undefined}
                  padding={dialogPadding}
                  className={styles.dialogContent}
                >
                  <Stack space="large">
                    {illustration ? (
                      <Stack space="medium" align="center">
                        <Box paddingX="gutter">{illustration}</Box>
                        <DialogHeader
                          title={title}
                          description={description}
                          descriptionId={descriptionId}
                          center={Boolean(illustration)}
                          ref={headingRef}
                        />
                      </Stack>
                    ) : (
                      <Columns space={dialogPadding}>
                        <Column>
                          <DialogHeader
                            title={title}
                            description={description}
                            descriptionId={descriptionId}
                            center={Boolean(illustration)}
                            ref={headingRef}
                          />
                        </Column>
                        <Column width="content">
                          <Box className={styles.closePlaceholder} />
                        </Column>
                      </Columns>
                    )}
                    <Fragment>{children}</Fragment>
                  </Stack>

                  <Box
                    position="absolute"
                    top={0}
                    right={0}
                    paddingTop={dialogPadding}
                    paddingRight={dialogPadding}
                  >
                    <Box className={styles.closeOffset}>
                      <ClearButton
                        tone="neutral"
                        label={closeLabel}
                        onClick={initiateClose}
                      />
                    </Box>
                  </Box>
                </Box>
              </RemoveScroll>
            </Container>
          </Box>
        </FocusLock>
      ) : null}
    </DialogPortal>
  );
};
