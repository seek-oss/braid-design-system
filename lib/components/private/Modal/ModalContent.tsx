import React, {
  ReactNode,
  useRef,
  forwardRef,
  Fragment,
  KeyboardEvent,
  Ref,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { Box, BoxProps } from '../../Box/Box';
import { normalizeKey } from '../normalizeKey';
import { Heading } from '../../Heading/Heading';
import { Stack } from '../../Stack/Stack';
import { Columns } from '../../Columns/Columns';
import { Column } from '../../Column/Column';
import { Overlay } from '../Overlay/Overlay';
import { Bleed } from '../../Bleed/Bleed';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import { IconClear } from '../../icons';
import { virtualTouchable } from '../touchable/virtualTouchable';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import * as styles from './Modal.css';

export interface ModalContentProps {
  id: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
  closeLabel?: string;
  width: BoxProps['maxWidth'] | 'content';
  description?: ReactNodeNoStrings;
  illustration?: ReactNodeNoStrings;
  position: 'center' | 'right' | 'left';
  headingLevel: '2' | '3';
  scrollLock?: boolean;
  headingRef?: Ref<HTMLElement>;
  modalRef?: Ref<HTMLElement>;
  data?: DataAttributeMap;
}

const modalPadding = ['gutter', 'large'] as const;

interface ModalContentHeaderProps
  extends Pick<ModalContentProps, 'headingLevel' | 'description'> {
  title: string;
  descriptionId: string;
  center?: boolean;
}
const ModalContentHeader = forwardRef<HTMLElement, ModalContentHeaderProps>(
  ({ title, headingLevel, description, descriptionId, center }, ref) => (
    <Stack space="medium">
      <Heading level={headingLevel} align={center ? 'center' : undefined}>
        <Box
          ref={ref}
          component="span"
          tabIndex={-1}
          outline="none"
          position="relative"
          className={styles.headingRoot}
        >
          {title}
          <Overlay
            boxShadow="outlineFocus"
            borderRadius="standard"
            transition="fast"
            className={styles.headingFocus}
            onlyVisibleForKeyboardNavigation
          />
        </Box>
      </Heading>
      {description ? <Box id={descriptionId}>{description}</Box> : null}
    </Stack>
  ),
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
  data,
}: ModalContentProps) => {
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

  const justifyContent = (
    { left: 'flexStart', center: 'center', right: 'flexEnd' } as const
  )[position];

  return (
    <Box
      role="dialog"
      aria-label={title} // Using aria-labelledby would announce the heading after the dialog content.
      aria-describedby={description ? descriptionId : undefined}
      aria-modal="true"
      id={id}
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
        height={
          position === 'right' || position === 'left' ? 'full' : undefined
        }
        width={width !== 'content' ? 'full' : undefined}
        maxWidth={width !== 'content' ? width : undefined}
      >
        {/* modalRef gets forwarded down to UL by RemoveScroll by `forwardProps` */}
        <RemoveScroll ref={modalRef} forwardProps enabled={scrollLock}>
          <Box
            background="surface"
            borderRadius={position === 'center' ? 'xlarge' : undefined}
            overflow="auto"
            position="relative"
            boxShadow="large"
            width={width !== 'content' ? 'full' : undefined}
            height={
              position === 'right' || position === 'left' ? 'full' : undefined
            }
            padding={modalPadding}
            className={[
              styles.pointerEventsAll,
              position === 'center' && styles.maxSize[position],
            ]}
            {...(data ? buildDataAttributes(data) : undefined)}
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
                  <ModalContentHeader
                    title={title}
                    headingLevel={headingLevel}
                    description={description}
                    descriptionId={descriptionId}
                    center={Boolean(illustration)}
                    ref={headingRef}
                  />
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
          left={0}
          right={0}
          display="flex"
          justifyContent="center"
          pointerEvents="none"
        >
          <Box
            width="full"
            display="flex"
            justifyContent="flexEnd"
            paddingTop={modalPadding}
            paddingRight={modalPadding}
            className={position === 'center' && styles.maxSize[position]}
          >
            <Bleed top="xsmall" right="xsmall">
              <Box
                position="relative"
                className={styles.cropIconSpace[headingLevel]}
              >
                <Box
                  component="button"
                  aria-label={closeLabel}
                  borderRadius="full"
                  background="surface"
                  padding="xsmall"
                  cursor="pointer"
                  position="relative"
                  onClick={onClose}
                  outline="none"
                  transition="touchable"
                  className={[
                    styles.closeButtonRoot,
                    styles.pointerEventsAll,
                    virtualTouchable(),
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
                    <IconClear size="fill" />
                  </Box>
                </Box>
              </Box>
            </Bleed>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
