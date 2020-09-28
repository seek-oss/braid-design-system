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
import { Box, BoxProps } from '../../Box/Box';
import { normalizeKey } from '../normalizeKey';
import { Heading } from '../../Heading/Heading';
import { Stack } from '../../Stack/Stack';
import { Columns } from '../../Columns/Columns';
import { Column } from '../../Column/Column';
import { Overlay } from '../Overlay/Overlay';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import { IconClear } from '../../icons';
import { useNegativeMarginTop } from '../../../hooks/useNegativeMargin/useNegativeMargin';
import { useVirtualTouchable } from '../touchable/useVirtualTouchable';
import * as styleRefs from './Modal.treat';

export interface ModalContentProps {
  id: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
  closeLabel?: string;
  width: BoxProps['maxWidth'] | 'content';
  description?: ReactNodeNoStrings;
  illustration?: ReactNodeNoStrings;
  position: 'center' | 'right';
  headingLevel: '2' | '3';
  scrollLock?: boolean;
  headingRef?: Ref<HTMLElement>;
  modalRef?: Ref<HTMLElement>;
}

const modalPadding = ['gutter', 'large'] as const;

interface ModalContentHeaderProps
  extends Pick<ModalContentProps, 'headingLevel' | 'description'> {
  title: string;
  descriptionId: string;
  center?: boolean;
}
const ModalContentHeader = forwardRef<HTMLElement, ModalContentHeaderProps>(
  ({ title, headingLevel, description, descriptionId, center }, ref) => {
    const styles = useStyles(styleRefs);

    return (
      <Stack space="medium">
        <Heading level={headingLevel} align={center ? 'center' : undefined}>
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

export const ModalContent = ({
  id,
  children,
  description,
  onClose,
  width,
  closeLabel = 'Close',
  illustration,
  title,
  headingRef: headingRefProp,
  modalRef: modalRefProp,
  scrollLock = true,
  position,
  headingLevel,
}: ModalContentProps) => {
  const styles = useStyles(styleRefs);

  const defaultModalRef = useRef<HTMLElement>(null);
  const modalRef = modalRefProp || defaultModalRef;
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

  const justifyContent = ({ center: 'center', right: 'flexEnd' } as const)[
    position
  ];

  return (
    <Box
      role="dialog"
      aria-label={title} // Using aria-labelledby would announce the heading after the dialog content.
      aria-describedby={description ? descriptionId : undefined}
      aria-modal="true"
      onKeyDown={handleEscape}
      position="relative"
      width="full"
      height="full"
      display="flex"
      alignItems="center"
      justifyContent={justifyContent}
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent={justifyContent}
        height={position === 'right' ? 'full' : undefined}
        width={width !== 'content' ? 'full' : undefined}
        maxWidth={width !== 'content' ? width : undefined}
      >
        {/* modalRef gets forwarded down to UL by RemoveScroll by `forwardProps` */}
        <RemoveScroll ref={modalRef} forwardProps enabled={scrollLock}>
          <Box
            background="card"
            borderRadius={position === 'center' ? 'standard' : undefined}
            overflow="auto"
            position="relative"
            boxShadow="large"
            width={width !== 'content' ? 'full' : undefined}
            height={position === 'right' ? 'full' : undefined}
            maxWidth={width === 'content' ? undefined : width}
            padding={modalPadding}
            className={[
              styles.pointerEventsAll,
              position === 'center' && styles.maxSize[position],
            ]}
          >
            <Stack space="large">
              {illustration ? (
                <Stack space="medium" align="center">
                  <Box paddingX="gutter">{illustration}</Box>
                  <ModalContentHeader
                    title={title}
                    headingLevel={headingLevel}
                    description={description}
                    descriptionId={descriptionId}
                    center={Boolean(illustration)}
                    ref={headingRef}
                  />
                </Stack>
              ) : (
                <Columns space="none">
                  <Column>
                    <ModalContentHeader
                      title={title}
                      headingLevel={headingLevel}
                      description={description}
                      descriptionId={descriptionId}
                      center={Boolean(illustration)}
                      ref={headingRef}
                    />
                  </Column>
                  <Column width="content">
                    <Box width="touchable" />
                  </Column>
                </Columns>
              )}
              <Fragment>{children}</Fragment>
            </Stack>
          </Box>
        </RemoveScroll>
        <Box
          position="absolute"
          zIndex="sticky"
          top={0}
          right={0}
          paddingTop={modalPadding}
          paddingRight={modalPadding}
        >
          <Box
            className={[
              useNegativeMarginTop('xsmall'),
              styles.negativeMarginRightXSmall,
            ]}
          >
            <Box
              position="relative"
              className={styles.cropIconSpace[headingLevel]}
            >
              <Box
                component="button"
                aria-label={closeLabel}
                borderRadius="full"
                background="card"
                padding="xsmall"
                cursor="pointer"
                position="relative"
                onClick={onClose}
                outline="none"
                transition="touchable"
                className={[
                  styles.closeButtonRoot,
                  styles.pointerEventsAll,
                  useVirtualTouchable(),
                ]}
              >
                <Overlay
                  boxShadow="outlineFocus"
                  transition="fast"
                  onlyVisibleForKeyboardNavigation
                  borderRadius="full"
                  className={styles.closeButtonFocus}
                />
                <Box
                  position="relative"
                  transition="fast"
                  className={[
                    styles.closeButtonOpacity,
                    styles.closeIcon[headingLevel],
                  ]}
                >
                  <IconClear size="fill" aria-hidden />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
