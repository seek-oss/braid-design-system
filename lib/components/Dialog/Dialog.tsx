import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';
import { Box } from '../Box/Box';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { normalizeKey } from '../private/normalizeKey';
import { headerOverlay } from '../private/zIndex';
import { createPortal } from 'react-dom';

type AriaLabel = {
  'aria-label': string;
};
type AriaLabelledBy = {
  'aria-labelledby': string;
};
type Label = AriaLabelledBy | AriaLabel;

type DialogProps = Label & {
  children: ReactNode;
  open: boolean;
  onDismiss: (open: boolean) => void;
  closeLabel?: string;
  'aria-describedby'?: string;
};

interface DialogPortalProps {
  children: ReactNode;
}
const DialogPortal = ({ children }: DialogPortalProps) => {
  const [dialogElement, setElement] = useState<HTMLElement | null>(null);

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

  return createPortal(children, dialogElement);
};

export const Dialog = ({
  'aria-describedby': ariaDescribedBy,
  open,
  children,
  onDismiss,
  closeLabel = 'Close',
  ...props
}: DialogProps) => {
  const [active, setActive] = useState(open);
  const [closing, setClosing] = useState(false);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setClosing(true);

    transitionRef.current = setTimeout(() => setClosing(false), 300);

    onDismiss(!active);
  }, [active, onDismiss]);

  useEffect(() => {
    if (active !== open) {
      if (!open) {
        setClosing(true);
      }

      setActive(open);
    }

    if (open && transitionRef.current !== null) {
      setClosing(false);
      clearTimeout(transitionRef.current);
      transitionRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <DialogPortal>
      <FocusLock disabled={!active} returnFocus>
        <Box
          position="fixed"
          top={0}
          bottom={0}
          left={0}
          right={0}
          pointerEvents={!active ? 'none' : undefined}
          opacity={!active ? 0 : undefined}
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
          aria-hidden={!active}
          onKeyUp={(event) => {
            const targetKey = normalizeKey(event);

            if (targetKey === 'Escape') {
              close();
            }
          }}
        >
          <Box
            position="absolute"
            onClick={close}
            opacity={0}
            transition="fast"
            style={{
              height: '100vh',
              width: '100vw',
              background: 'black',
              opacity: active ? 0.7 : undefined,
            }}
          />
          <Box
            role="dialog"
            aria-label={'aria-label' in props ? props['aria-label'] : undefined}
            aria-labelledby={
              'aria-labelledby' in props ? props['aria-labelledby'] : undefined
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
            {(active || closing) && (
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
            )}

            {(active || closing) && (
              <Box
                paddingX={['gutter', 'large', 'xlarge']}
                paddingY={['large', 'xlarge', 'xlarge']}
              >
                <AutoFocusInside>{children}</AutoFocusInside>
              </Box>
            )}
          </Box>
        </Box>
      </FocusLock>
    </DialogPortal>
  );
};
