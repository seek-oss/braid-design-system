import React, {
  ReactNode,
  useRef,
  forwardRef,
  Fragment,
  KeyboardEvent,
  Ref,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { normalizeKey } from '../private/normalizeKey';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Overlay } from '../private/Overlay/Overlay';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import * as styleRefs from './Dialog.treat';

export interface DialogCardProps {
  id: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
  closeLabel?: string;
  width?: BoxProps['maxWidth'] | 'content';
  description?: ReactNodeNoStrings;
  illustration?: ReactNodeNoStrings;
}

interface InternalDialogProps extends DialogCardProps {
  headingRef?: Ref<HTMLElement>;
  dialogRef?: Ref<HTMLElement>;
  scrollLock?: boolean;
}

const dialogPadding = ['gutter', 'large'] as const;

interface DialogHeaderProps extends Pick<DialogCardProps, 'description'> {
  title: string;
  descriptionId: string;
  center?: boolean;
}
const DialogHeader = forwardRef<HTMLElement, DialogHeaderProps>(
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

export const DialogCard = ({
  id,
  children,
  description,
  onClose,
  width = 'small',
  closeLabel = 'Close',
  illustration,
  title,
  headingRef: headingRefProp,
  dialogRef: dialogRefProp,
  scrollLock = true,
}: InternalDialogProps) => {
  const styles = useStyles(styleRefs);

  const defaultDialogRef = useRef<HTMLElement>(null);
  const dialogRef = dialogRefProp || defaultDialogRef;
  const defaultHeadingRef = useRef<HTMLElement>(null);
  const headingRef = headingRefProp || defaultHeadingRef;

  const descriptionId = `${id}_desc`;

  const handleEscape = (event: KeyboardEvent) => {
    const targetKey = normalizeKey(event);
    if (targetKey === 'Escape') {
      event.stopPropagation();
      onClose();
    }
  };

  return (
    <Box maxWidth={width === 'content' ? undefined : width}>
      {/* DialogRef gets forwarded down to UL by RemoveScroll by `forwardProps`. */}
      <RemoveScroll ref={dialogRef} forwardProps enabled={scrollLock}>
        <Box
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
                onClick={onClose}
              />
            </Box>
          </Box>
        </Box>
      </RemoveScroll>
    </Box>
  );
};
