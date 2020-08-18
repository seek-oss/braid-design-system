import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  forwardRef,
  // useContext,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';
import { useStyles } from 'sku/react-treat';
import { hideOthers } from 'aria-hidden';
// import assert from 'assert';
import { Box } from '../Box/Box';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { normalizeKey } from '../private/normalizeKey';
import { useBoxStyles } from '../Box/useBoxStyles';
import { PageOverlay } from './PageOverlay';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Overlay } from '../private/Overlay/Overlay';
import { HideFocusRingsRoot } from '../private/hideFocusRings/hideFocusRings';
import { ContentBlock, ContentBlockProps } from '../ContentBlock/ContentBlock';
import * as styleRefs from './Dialog.treat';

interface DialogProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: (open: boolean) => void;
  closeLabel?: string;
  width?: ContentBlockProps['width'];
  description?: ReactNodeNoStrings;
  illustration?: ReactNodeNoStrings;
}

const DialogContext = createContext(false);

interface DialogPortalProps {
  children: ReactNode;
}
const DialogPortal = ({ children }: DialogPortalProps) => {
  const [dialogElement, setElement] = useState<HTMLElement | null>(null);
  // const dialogContext = useContext(DialogContext);

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
    <DialogContext.Provider value={true}>
      <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
    </DialogContext.Provider>,
    dialogElement,
  );
};

const CloseButton = ({
  label = 'Close',
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) => (
  <Box
    aria-hidden
    position="absolute"
    top={0}
    right={0}
    background="card"
    borderRadius="standard"
    paddingRight={['gutter', 'large']}
    paddingTop={['gutter', 'large']}
    paddingLeft="small"
    paddingBottom="small"
    overflow="hidden"
  >
    <Box style={{ marginTop: '-7px', marginRight: '-6px' }}>
      <ClearButton tone="neutral" label={label} onClick={onClick} />
    </Box>
  </Box>
);

const getId = (description: string) => {
  const words = description.substring(0, 30).match(/([a-z])+/gi);
  if (words) {
    return words.join('-').toLowerCase();
  }
};

interface HeaderProps extends Pick<DialogProps, 'title' | 'description'> {
  center?: boolean;
}
const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ title, description, center }, ref) => {
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
        {description ? <Box id={getId(title)}>{description}</Box> : null}
      </Stack>
    );
  },
);

export const Dialog = ({
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
  const [internalOpen, setInternalOpen] = useState(open);
  const dialogContainerRef = useRef<HTMLElement>(null);
  const hideOthersRef = useRef<ReturnType<typeof hideOthers> | null>(null);
  const headingRef = useRef<HTMLElement>(null);
  const scrollLockStyles = useBoxStyles({
    component: null,
    overflow: 'hidden',
  });

  const close = useCallback(() => onClose(false), [onClose]);

  const handleEscape = useCallback(
    (event) => {
      event.stopPropagation();
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

      if (dialogContainerRef.current) {
        hideOthersRef.current = hideOthers(dialogContainerRef.current);
      }
    }

    return () => {
      setInternalOpen(false);

      document.body.classList.remove(scrollLockStyles);

      if (hideOthersRef.current) {
        hideOthersRef.current();
        hideOthersRef.current = null;
      }
    };
  }, [open, scrollLockStyles, handleEscape]);

  useEffect(() => {
    if (internalOpen && headingRef.current) {
      headingRef.current.focus();
    }
  }, [internalOpen]);

  return (
    <DialogPortal>
      <FocusLock
        disabled={!internalOpen}
        // disabled={true}
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
          zIndex="modal"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={['xxsmall', 'gutter', 'xlarge']}
          className={styles.dialogContainer}
          onKeyDown={handleEscape}
        >
          <PageOverlay onClick={close} active={internalOpen} modal={true} />

          {internalOpen && (
            <Box
              role="dialog"
              aria-label={title}
              aria-describedby={description ? getId(title) : undefined}
              aria-modal="true"
              width="full"
              overflow="auto"
              className={styles.dialog}
            >
              <ContentBlock width={width}>
                <Box
                  background="card"
                  borderRadius="standard"
                  position="relative"
                  boxShadow="large"
                  padding={['gutter', 'large']}
                >
                  <CloseButton label={closeLabel} onClick={close} />
                  <Stack space="large">
                    {illustration ? (
                      <Stack space="medium" align="center">
                        <Box paddingX="gutter">{illustration}</Box>
                        <Header
                          title={title}
                          description={description}
                          center={Boolean(illustration)}
                          ref={headingRef}
                        />
                      </Stack>
                    ) : (
                      <Columns space={['gutter', 'large']}>
                        <Column>
                          <Header
                            title={title}
                            description={description}
                            center={Boolean(illustration)}
                            ref={headingRef}
                          />
                        </Column>
                        <Column width="content">
                          <Box style={{ width: '10px' }} />
                        </Column>
                      </Columns>
                    )}
                    <AutoFocusInside>{children}</AutoFocusInside>
                  </Stack>
                </Box>
              </ContentBlock>
            </Box>
          )}
        </Box>
      </FocusLock>
    </DialogPortal>
  );
};
