import React, {
  type ReactNode,
  type KeyboardEvent,
  type Ref,
  useRef,
  forwardRef,
  Fragment,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { type BoxProps, Box } from '../../Box/Box';
import { normalizeKey } from '../normalizeKey';
import { Heading } from '../../Heading/Heading';
import { Stack } from '../../Stack/Stack';
import { Columns } from '../../Columns/Columns';
import { Column } from '../../Column/Column';
import { Overlay } from '../Overlay/Overlay';
import { Bleed } from '../../Bleed/Bleed';
import { gutters as pageBlockGutters } from '../../PageBlock/PageBlock';
import type { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import { IconClear } from '../../icons';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
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

const modalPadding = { mobile: 'gutter', tablet: 'large' } as const;

interface ModalContentHeaderProps
  extends Pick<ModalContentProps, 'headingLevel' | 'description'> {
  title: string;
  descriptionId: string;
  center?: boolean;
}
const ModalContentHeader = forwardRef<HTMLElement, ModalContentHeaderProps>(
  ({ title, headingLevel, description, descriptionId, center }, ref) => (
    <Stack
      space={
        headingLevel === '2' ? { mobile: 'small', tablet: 'medium' } : 'small'
      }
    >
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
  ...restProps
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
  const modalRadius = position === 'center' ? 'xlarge' : undefined;

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
        overflow={position !== 'center' ? 'hidden' : undefined}
        boxShadow="large"
        borderRadius={modalRadius}
        width={width !== 'content' ? 'full' : undefined}
        maxWidth={width !== 'content' ? width : undefined}
      >
        {/* modalRef gets forwarded down to UL by RemoveScroll by `forwardProps` */}
        <RemoveScroll ref={modalRef} forwardProps enabled={scrollLock}>
          <Box
            background="surface"
            borderRadius={modalRadius}
            overflow="auto"
            position="relative"
            width={width !== 'content' ? 'full' : undefined}
            height={
              position === 'right' || position === 'left' ? 'full' : undefined
            }
            paddingY={modalPadding}
            paddingX={position !== 'center' ? pageBlockGutters : modalPadding}
            className={[
              styles.pointerEventsAll,
              position === 'center' && styles.maxSize[position],
            ]}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
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
          pointerEvents="none"
          width="full"
          display="flex"
          justifyContent="flexEnd"
          paddingTop={modalPadding}
          paddingRight={position !== 'center' ? pageBlockGutters : modalPadding}
          className={position === 'center' && styles.maxSize[position]}
        >
          <Bleed space="xsmall">
            <Box
              position="relative"
              background="surface"
              borderRadius="full"
              padding="xsmall"
              className={[styles.closeIconOffset, styles.pointerEventsAll]}
            >
              <ButtonIcon
                id={`${id}-close`}
                label={closeLabel}
                icon={<IconClear />}
                tone="secondary"
                variant="transparent"
                size="large"
                onClick={onClose}
              />
            </Box>
          </Bleed>
        </Box>
      </Box>
    </Box>
  );
};
