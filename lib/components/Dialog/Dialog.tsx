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
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { useStyles } from 'sku/react-treat';
import { hideOthers } from 'aria-hidden';
import assert from 'assert';
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
    <DialogContext.Provider value={true}>
      <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
    </DialogContext.Provider>,
    dialogElement,
  );
};

const dialogPadding = ['gutter', 'large'] as const;

const CloseButton = ({
  label = 'Close',
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) => {
  const styles = useStyles(styleRefs);
  return (
    <Box
      aria-hidden
      position="absolute"
      top={0}
      right={0}
      paddingRight={dialogPadding}
      paddingTop={dialogPadding}
      paddingLeft="small"
      paddingBottom="small"
      overflow="hidden"
    >
      <Box className={styles.closeOffset}>
        <ClearButton tone="neutral" label={label} onClick={onClick} />
      </Box>
    </Box>
  );
};

interface HeaderProps extends Pick<DialogProps, 'description'> {
  title: string;
  titleId: string;
  descriptionId: string;
  center?: boolean;
}
const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ title, titleId, description, descriptionId, center }, ref) => {
    const styles = useStyles(styleRefs);

    return (
      <Stack space="medium">
        <Heading level="3" id={titleId} align={center ? 'center' : undefined}>
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

export const Dialog = ({
  id,
  open,
  children,
  description,
  onClose,
  width = 'small',
  closeLabel,
  illustration,
  title,
}: DialogProps) => {
  const styles = useStyles(styleRefs);
  const [trapActive, setTrapActive] = useState(open);
  const [internalOpen, setInternalOpen] = useState(open);
  const dialogContainerRef = useRef<HTMLElement>(null);
  const hideOthersRef = useRef<ReturnType<typeof hideOthers> | null>(null);
  const headingRef = useRef<HTMLElement>(null);
  const labelId = `${id}_label`;
  const descriptionId = `${id}_desc`;

  const scrollLockStyles = useBoxStyles({
    component: null,
    overflow: 'hidden',
  });

  const close = useCallback(() => {
    if (typeof onClose === 'function') {
      onClose(false);
    }
  }, [onClose]);

  const handleEscape = useCallback(
    (event) => {
      const targetKey = normalizeKey(event);
      if (targetKey === 'Escape') {
        event.stopPropagation();
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (open) {
      setInternalOpen(open);
      setTrapActive(open);

      document.body.classList.add(scrollLockStyles);

      if (dialogContainerRef.current) {
        hideOthersRef.current = hideOthers(dialogContainerRef.current);
      }
    }

    return () => {
      setTrapActive(false);
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

  const handleWindowFocus = useCallback(() => {
    setTrapActive(true);
  }, [setTrapActive]);

  const handleWindowBlur = useCallback(() => {
    setTrapActive(false);
  }, [setTrapActive]);

  useEffect(() => {
    if (trapActive) {
      window.addEventListener('blur', handleWindowBlur);
    } else {
      window.addEventListener('focus', handleWindowFocus);
    }

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [handleWindowBlur, handleWindowFocus, trapActive]);

  return (
    <DialogPortal>
      <FocusLock
        disabled={!trapActive}
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
              aria-labelledby={labelId}
              aria-describedby={description ? descriptionId : undefined}
              aria-modal="true"
              overflow="auto"
              width={width !== 'content' ? 'full' : undefined}
              className={styles.dialog}
            >
              <Container width={width}>
                <Box
                  background="card"
                  borderRadius="standard"
                  position="relative"
                  boxShadow="large"
                  width={width !== 'content' ? 'full' : undefined}
                  padding={dialogPadding}
                >
                  <Stack space="large">
                    {illustration ? (
                      <Stack space="medium" align="center">
                        <Box paddingX="gutter">{illustration}</Box>
                        <Header
                          title={title}
                          titleId={labelId}
                          description={description}
                          descriptionId={descriptionId}
                          center={Boolean(illustration)}
                          ref={headingRef}
                        />
                      </Stack>
                    ) : (
                      <Columns space={dialogPadding}>
                        <Column>
                          <Header
                            title={title}
                            titleId={labelId}
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
                  <CloseButton label={closeLabel} onClick={close} />
                </Box>
              </Container>
            </Box>
          )}
        </Box>
      </FocusLock>
    </DialogPortal>
  );
};
