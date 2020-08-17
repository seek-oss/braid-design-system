import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
  Fragment,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';
import { hideOthers } from 'aria-hidden';
import assert from 'assert';
import { Box } from '../Box/Box';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { normalizeKey } from '../private/normalizeKey';
import { headerOverlay } from '../private/zIndex';
import { useBoxStyles } from '../Box/useBoxStyles';
import { PageOverlay } from './PageOverlay';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';

type LabelByTitle = {
  title: string;
};
type LabelByElementId = {
  'aria-labelledby': string;
};
type Label = LabelByTitle | LabelByElementId;

type DialogProps = Label & {
  children: ReactNode;
  open: boolean;
  onDismiss: (open: boolean) => void;
  closeLabel?: string;
  'aria-describedby'?: string;
};

const DialogContext = createContext(false);

interface DialogPortalProps {
  children: ReactNode;
}
const DialogPortal = ({ children }: DialogPortalProps) => {
  const [dialogElement, setElement] = useState<HTMLElement | null>(null);
  const dialogContext = useContext(DialogContext);

  // assert(!dialogContext, 'Nested Dialogs are not supported.');

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

export const Dialog = ({
  'aria-describedby': ariaDescribedBy,
  open,
  children,
  onDismiss,
  closeLabel = 'Close',
  ...props
}: DialogProps) => {
  const [internalOpen, setInternalOpen] = useState(open);
  const dialogContainerRef = useRef<HTMLElement>(null);
  const hideOthersRef = useRef<ReturnType<typeof hideOthers> | null>(null);
  const scrollLockStyles = useBoxStyles({
    component: null,
    overflow: 'hidden',
  });

  const close = useCallback(() => {
    onDismiss(false);
  }, [onDismiss]);

  const handleEscape = useCallback(
    (event) => {
      const targetKey = normalizeKey(event);
      if (targetKey === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (open) {
      setInternalOpen(open);

      document.body.classList.add(scrollLockStyles);
      document.addEventListener('keydown', handleEscape);

      if (dialogContainerRef.current) {
        hideOthersRef.current = hideOthers(dialogContainerRef.current);
      }
    }

    return () => {
      setInternalOpen(false);

      document.body.classList.remove(scrollLockStyles);
      document.removeEventListener('keydown', handleEscape);

      if (hideOthersRef.current) {
        hideOthersRef.current();
        hideOthersRef.current = null;
      }
    };
  }, [open, scrollLockStyles, handleEscape]);

  return (
    <DialogPortal>
      <FocusLock
        disabled={!internalOpen}
        returnFocus
        noFocusGuards={!internalOpen}
        ref={dialogContainerRef}
      >
        <Box
          position="fixed"
          top={0}
          bottom={0}
          left={0}
          right={0}
          pointerEvents={!internalOpen ? 'none' : undefined}
          opacity={!internalOpen ? 0 : undefined}
          transition="fast"
          style={{
            zIndex: headerOverlay,
            maxHeight: '100vh',
            maxWidth: '100vw',
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={['small', 'gutter', 'xlarge']}
          aria-hidden={!internalOpen}
        >
          <PageOverlay onClick={close} active={internalOpen} modal={true} />

          {internalOpen && (
            <Box
              role="dialog"
              aria-label={'title' in props ? props.title : undefined}
              aria-labelledby={
                'aria-labelledby' in props
                  ? props['aria-labelledby']
                  : undefined
              }
              aria-describedby={ariaDescribedBy}
              aria-modal="true"
              position="relative"
              background="card"
              borderRadius="standard"
              boxShadow="large"
              style={{ maxHeight: '100%' }}
              overflow="auto"
            >
              <Box
                paddingX={['gutter', 'large', 'xlarge']}
                paddingY={['large', 'xlarge', 'xlarge']}
              >
                {'title' in props ? (
                  <Stack space="large">
                    <Box paddingRight="xlarge">
                      <Heading level="3">
                        <Box tabIndex={-1}>{props.title}</Box>
                      </Heading>
                      <Box
                        aria-hidden
                        position="absolute"
                        top={0}
                        right={0}
                        background="card"
                        borderRadius="standard"
                        padding="gutter"
                      >
                        <ClearButton
                          tone="neutral"
                          label={closeLabel}
                          onClick={close}
                        />
                      </Box>
                    </Box>
                    <AutoFocusInside>{children}</AutoFocusInside>
                  </Stack>
                ) : (
                  <Fragment>
                    <Box
                      aria-hidden
                      position="absolute"
                      top={0}
                      right={0}
                      background="card"
                      borderRadius="standard"
                      padding="gutter"
                    >
                      <ClearButton
                        tone="neutral"
                        label={closeLabel}
                        onClick={close}
                      />
                    </Box>
                    <AutoFocusInside>{children}</AutoFocusInside>
                  </Fragment>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </FocusLock>
    </DialogPortal>
  );
};
