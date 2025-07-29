import {
  type ReactNode,
  type KeyboardEvent,
  type Ref,
  useRef,
  forwardRef,
  Fragment,
  useId,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { useFallbackId } from '../../../hooks/useFallbackId';
import { Bleed } from '../../Bleed/Bleed';
import { type BoxProps, Box } from '../../Box/Box';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import { Heading } from '../../Heading/Heading';
import { pageBlockGutters } from '../../PageBlock/pageBlockGutters';
import { Stack } from '../../Stack/Stack';
import { IconClear } from '../../icons';
import type { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { normalizeKey } from '../normalizeKey';

import * as styles from './Modal.css';

export interface ModalContentProps {
  id?: string;
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
          tabIndex={-1}
          component="span"
          position="relative"
          outline="focus"
          borderRadius="small" // Ensures focus ring is rounded
          className={styles.headingRoot}
        >
          {title}
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
  const resolvedId = useFallbackId(id);
  const descriptionId = useId();

  const defaultModalRef = useRef<HTMLElement>(null);
  const modalRef = modalRefProp || defaultModalRef;
  const defaultHeadingRef = useRef<HTMLElement>(null);
  const headingRef = headingRefProp || defaultHeadingRef;

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
      id={resolvedId}
      onKeyDown={handleEscape}
      position="relative"
      width="full"
      height="full"
      display="flex"
      alignItems="center"
      textAlign="left"
      justifyContent={justifyContent}
    >
      <Box
        ref={modalRef}
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
        <RemoveScroll
          noRelative // Allows portalled elements to be positioned correctly relative to the viewport size
          forwardProps
          enabled={scrollLock}
        >
          <Box
            display="flex"
            gap="large"
            flexDirection="column"
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
              <Box display="flex">
                <Box width="full" minWidth={0}>
                  <ModalContentHeader
                    title={title}
                    headingLevel={headingLevel}
                    description={description}
                    descriptionId={descriptionId}
                    center={Boolean(illustration)}
                    ref={headingRef}
                  />
                </Box>
                <Box width="touchable" flexShrink={0} flexGrow={0} />
              </Box>
            )}
            <Fragment>{children}</Fragment>
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
                label={closeLabel}
                icon={<IconClear tone="secondary" />}
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
