import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type ReactNode,
  type KeyboardEvent,
  type Ref,
  type RefObject,
  useRef,
  forwardRef,
  useId,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { useFallbackId } from '../../../hooks/useFallbackId';
import { iconSize } from '../../../hooks/useIcon';
import { Bleed } from '../../Bleed/Bleed';
import { type BoxProps, Box } from '../../Box/Box';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import { Heading } from '../../Heading/Heading';
import { HiddenVisually } from '../../HiddenVisually/HiddenVisually';
import { pageBlockGutters } from '../../PageBlock/pageBlockGutters';
import { Stack } from '../../Stack/Stack';
import { IconClear } from '../../icons';
import { useResponsiveValue } from '../../useResponsiveValue/useResponsiveValue';
import type { ReactNodeNoStrings } from '../ReactNodeNoStrings';
import { ScrollContainer } from '../ScrollContainer/ScrollContainer';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { normalizeKey } from '../normalizeKey';

import * as styles from './Modal.css';

type ModalContentCommonProps = {
  id?: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
  closeLabel?: string;
  width: BoxProps['maxWidth'] | 'content';
  description?: ReactNodeNoStrings;
  position: 'center' | 'right' | 'left';
  headingLevel: '2' | '3';
  scrollLock?: boolean;
  headingRef?: Ref<HTMLElement>;
  modalRef?: Ref<HTMLElement>;
  data?: DataAttributeMap;
  footer?: ReactNode;
};

export type ModalAccessibleNameProps = {
  title?: string;
  'aria-label'?: string;
  'aria-description'?: string;
};

export type ModalContentProps = ModalContentCommonProps &
  (
    | {
        coverImage?: never;
        illustration?: ReactNodeNoStrings;
      }
    | { coverImage?: string; illustration?: never }
  );

type ModalContentInternalProps = Omit<ModalContentCommonProps, 'title'> &
  ModalAccessibleNameProps & {
    coverImage?: string;
    dialogRef?: Ref<HTMLElement>;
    illustration?: ReactNodeNoStrings;
  };

const modalPadding = { mobile: 'gutter', tablet: 'large' } as const;
const modalContentGap = 'large' as const;

interface ModalContentHeaderProps extends Pick<
  ModalContentProps,
  'headingLevel' | 'description' | 'illustration'
> {
  title: ModalAccessibleNameProps['title'];
  descriptionId: string;
  reserveCloseArea?: boolean;
}
const ModalContentHeader = forwardRef<HTMLElement, ModalContentHeaderProps>(
  (
    {
      title,
      headingLevel,
      description,
      descriptionId,
      illustration,
      reserveCloseArea,
    },
    ref,
  ) => {
    const header = (
      <Stack
        space={
          headingLevel === '2' ? { mobile: 'small', tablet: 'medium' } : 'small'
        }
      >
        <Heading
          level={headingLevel}
          align={illustration ? 'center' : undefined}
        >
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
    );

    const resolvedLayout = illustration ? (
      <Stack space="medium" align="center">
        <Box paddingX="gutter">{illustration}</Box>
        {header}
      </Stack>
    ) : (
      header
    );

    return reserveCloseArea && !illustration ? (
      <Box display="flex">
        <Box width="full" minWidth={0}>
          {resolvedLayout}
        </Box>
        <Box width="touchable" flexShrink={0} flexGrow={0} />
      </Box>
    ) : (
      resolvedLayout
    );
  },
);

type ModalFooterProps = {
  applyPageBlockGutters: boolean;
  children: ReactNode;
};

const ModalFooter = ({ applyPageBlockGutters, children }: ModalFooterProps) => (
  <Box
    background="surface"
    width="full"
    flexShrink={0}
    paddingY="medium"
    paddingX={applyPageBlockGutters ? pageBlockGutters : modalPadding}
  >
    {children}
  </Box>
);

const ModalContentScrollLayout = ({
  children,
  contentStartRef,
  coverImageEnabled,
  applyPageBlockGutters,
  applyFullHeight,
  hasFooter,
  scrollable,
}: {
  children: ReactNode;
  applyPageBlockGutters: boolean;
  contentStartRef?: Ref<HTMLDivElement>;
  coverImageEnabled?: boolean;
  applyFullHeight?: boolean;
  hasFooter: boolean;
  scrollable?: boolean;
}) => {
  const content = (
    <>
      {
        /* Sentinel element for delaying scroll mask until after the coverImage */
        coverImageEnabled && <span ref={contentStartRef} />
      }
      <Box
        display="flex"
        gap={modalContentGap}
        flexDirection="column"
        height={applyFullHeight ? 'full' : undefined}
        paddingTop={modalPadding}
        paddingBottom={hasFooter ? 'xsmall' : modalPadding}
        paddingX={applyPageBlockGutters ? pageBlockGutters : modalPadding}
      >
        {children}
      </Box>
    </>
  );

  return scrollable === false ? (
    content
  ) : (
    <ScrollContainer direction="vertical">{content}</ScrollContainer>
  );
};

const ModalScrollPort = ({
  children,
  startRef,
}: {
  children: ReactNode;
  startRef?: RefObject<HTMLElement | null>;
}) => (
  <Box className={styles.verticalScrollMinHeight}>
    <ScrollContainer direction="vertical" startRef={startRef}>
      {children}
    </ScrollContainer>
  </Box>
);

const ModalCoverImageLayout = ({
  image,
  children,
  footer,
  sideBySide,
}: {
  image: string;
  children: ReactNodeNoStrings;
  footer?: ReactNodeNoStrings;
  sideBySide: boolean;
}) => {
  /* Wrapper element ensures cover image clips rather than scrolls when below 16:9 aspect ratio  */
  const coverImage = (
    <Box position="relative" height={sideBySide ? 'full' : undefined}>
      <Box
        position={sideBySide ? 'absolute' : undefined}
        inset={0}
        className={[
          styles.coverImage,
          !sideBySide ? styles.coverImageAspectRatio : undefined,
        ]}
        width="full"
        height="full"
        style={assignInlineVars({
          [styles.coverImageVar]: `url(${image})`,
        })}
      />
    </Box>
  );

  if (sideBySide) {
    return (
      <Box className={styles.coverImageSideBySide}>
        <Box className={styles.coverImageGridCell}>
          <ModalScrollPort>{children}</ModalScrollPort>
          {footer}
        </Box>
        <Box className={styles.coverImageGridCell}>{coverImage}</Box>
      </Box>
    );
  }

  return (
    <Stack space="none">
      {coverImage}
      {children}
    </Stack>
  );
};

export const ModalContent = ({
  id,
  children,
  description,
  onClose,
  width,
  closeLabel = 'Close',
  illustration,
  coverImage,
  title,
  'aria-label': ariaLabel,
  'aria-description': ariaDescription,
  headingRef: headingRefProp,
  dialogRef,
  modalRef: modalRefProp,
  scrollLock = true,
  position,
  headingLevel,
  data,
  footer,
  ...restProps
}: ModalContentInternalProps) => {
  const resolvedId = useFallbackId(id);
  const descriptionId = useId();

  const defaultModalRef = useRef<HTMLElement>(null);
  const modalRef = modalRefProp || defaultModalRef;
  const defaultHeadingRef = useRef<HTMLElement>(null);
  const headingRef = headingRefProp || defaultHeadingRef;
  const contentStartRef = useRef<HTMLDivElement>(null);

  const handleEscape = (event: KeyboardEvent) => {
    const targetKey = normalizeKey(event);
    if (targetKey === 'Escape') {
      event.stopPropagation();
      onClose();
    }
  };

  const isMobile = useResponsiveValue()({
    mobile: true,
    tablet: false,
  });

  const isDrawer = position === 'left' || position === 'right';
  const coverImageEnabled = Boolean(coverImage) && !isDrawer;
  const allowColumnLayout = coverImageEnabled && width !== 'xsmall';
  const sideBySideCoverImage = allowColumnLayout && isMobile === false;

  const justifyContent = (
    { left: 'flexStart', center: 'center', right: 'flexEnd' } as const
  )[position];
  const modalRadius = !isDrawer ? 'xlarge' : undefined;

  /**
   * Only Drawer supports omitting the title, in which case there is no header
   * to hold the content clear of the close button.
   */
  const untitledDrawer = isDrawer && !title;

  const modalLayout = (
    <ModalContentScrollLayout
      applyPageBlockGutters={isDrawer}
      applyFullHeight={isDrawer}
      contentStartRef={contentStartRef}
      coverImageEnabled={coverImageEnabled}
      hasFooter={Boolean(footer)}
      scrollable={!coverImageEnabled}
    >
      {!untitledDrawer ? (
        <ModalContentHeader
          title={title}
          headingLevel={headingLevel}
          description={description}
          descriptionId={descriptionId}
          illustration={
            illustration && !coverImageEnabled ? illustration : undefined
          }
          ref={headingRef}
          reserveCloseArea
        />
      ) : null}

      {untitledDrawer ? (
        /**
         * Matches close button size so content starts below it. `bottom`
         * cancels the gap that follows the spacer.
         */
        <Bleed top="xxsmall" bottom={modalContentGap}>
          <Box padding="xsmall">
            <Box className={iconSize({ size: 'standard', crop: true })} />
          </Box>
        </Bleed>
      ) : null}

      {children}
    </ModalContentScrollLayout>
  );

  const modalFooter = footer ? (
    <ModalFooter applyPageBlockGutters={isDrawer}>{footer}</ModalFooter>
  ) : null;

  const coverLayout =
    coverImageEnabled && coverImage ? (
      <ModalCoverImageLayout
        image={coverImage}
        footer={sideBySideCoverImage ? modalFooter : null}
        sideBySide={sideBySideCoverImage}
      >
        {modalLayout}
      </ModalCoverImageLayout>
    ) : null;

  const stackedCoverLayout = coverLayout ? (
    <ModalScrollPort startRef={contentStartRef}>{coverLayout}</ModalScrollPort>
  ) : null;

  const modalBody =
    coverLayout && sideBySideCoverImage
      ? coverLayout
      : (stackedCoverLayout ?? modalLayout);

  return (
    <Box
      ref={dialogRef}
      role="dialog"
      aria-label={ariaLabel || title} // Using aria-labelledby would announce the heading after the dialog content.
      aria-describedby={
        (!untitledDrawer && description) || ariaDescription
          ? descriptionId
          : undefined
      }
      aria-modal="true"
      tabIndex={untitledDrawer ? -1 : undefined}
      id={resolvedId}
      onKeyDown={handleEscape}
      position="relative"
      width="full"
      height={isDrawer ? 'full' : undefined}
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
        height={isDrawer ? 'full' : undefined}
        overflow="hidden"
        boxShadow="large"
        borderRadius={modalRadius}
        width={width !== 'content' ? 'full' : undefined}
        maxWidth={width !== 'content' ? width : undefined}
      >
        {ariaDescription ? (
          <HiddenVisually id={descriptionId}>{ariaDescription}</HiddenVisually>
        ) : null}
        <RemoveScroll
          noRelative // Allows portalled elements to be positioned correctly relative to the viewport size
          forwardProps
          enabled={scrollLock}
        >
          <Box
            display="flex"
            flexDirection="column"
            background="surface"
            borderRadius={modalRadius}
            overflow="hidden"
            position="relative"
            width={width !== 'content' ? 'full' : undefined}
            height={isDrawer ? 'full' : undefined}
            className={{
              [styles.pointerEventsAll]: true,
              [styles.maxSize[position]]: !isDrawer,
              [styles.dialogColumn]: Boolean(
                coverLayout && !sideBySideCoverImage,
              ),
            }}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
          >
            {modalBody}
            {!sideBySideCoverImage && modalFooter}
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
          paddingRight={isDrawer ? pageBlockGutters : modalPadding}
          className={!isDrawer && styles.maxSize[position]}
        >
          <Bleed space="xxsmall">
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
                onClick={onClose}
              />
            </Box>
          </Bleed>
        </Box>
      </Box>
    </Box>
  );
};
