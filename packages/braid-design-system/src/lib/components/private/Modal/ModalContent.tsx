import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type ReactNode,
  type KeyboardEvent,
  type Ref,
  useRef,
  forwardRef,
  useId,
} from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { useFallbackId } from '../../../hooks/useFallbackId';
import { Bleed } from '../../Bleed/Bleed';
import { type BoxProps, Box } from '../../Box/Box';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import { Column } from '../../Column/Column';
import { Columns } from '../../Columns/Columns';
import { Heading } from '../../Heading/Heading';
import { pageBlockGutters } from '../../PageBlock/pageBlockGutters';
import { Stack } from '../../Stack/Stack';
import { IconClear } from '../../icons';
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
};

export type ModalContentProps = ModalContentCommonProps &
  (
    | {
        coverImage?: never;
        illustration?: ReactNodeNoStrings;
      }
    | { coverImage?: string; illustration?: never }
  );

type ModalContentInternalProps = ModalContentCommonProps & {
  coverImage?: string;
  illustration?: ReactNodeNoStrings;
};

const modalPadding = { mobile: 'gutter', tablet: 'large' } as const;

interface ModalContentHeaderProps extends Pick<
  ModalContentProps,
  'headingLevel' | 'description' | 'illustration' | 'title'
> {
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

const ModalContentScrollLayout = ({
  children,
  scrollColumnNotDialog,
}: {
  children: ReactNode;
  scrollColumnNotDialog?: boolean;
}) => (
  <ScrollContainer direction="vertical">
    {/**
     * Separationg of maxHeight and padding to avoid ScrollContainer clipping
     * padding at the end of the content.
     */}
    <Box
      className={
        scrollColumnNotDialog ? styles.coverImageHeightLimit : undefined
      }
    >
      <Box
        display="flex"
        gap="large"
        flexDirection="column"
        padding={modalPadding}
      >
        {children}
      </Box>
    </Box>
  </ScrollContainer>
);

const ModalCoverImageLayout = ({
  width,
  image,
  children,
}: {
  width: ModalContentProps['width'];
  image: string;
  children: ReactNode;
}) => {
  const coverImage = (
    <Box
      className={styles.coverImage}
      width="full"
      height="full"
      style={assignInlineVars({
        [styles.coverImageVar]: `url(${image})`,
      })}
    />
  );

  return width === 'xsmall' ? (
    <Stack space="none">
      {coverImage}
      <>{children}</>
    </Stack>
  ) : (
    <Columns space="none" collapseBelow="tablet" reverse>
      <Column>{coverImage}</Column>
      <Column>{children}</Column>
    </Columns>
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
  headingRef: headingRefProp,
  modalRef: modalRefProp,
  scrollLock = true,
  position,
  headingLevel,
  data,
  ...restProps
}: ModalContentInternalProps) => {
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

  const isDrawer = position === 'left' || position === 'right';
  const coverImageEnabled = coverImage && !isDrawer;
  const allowColumnLayout = Boolean(coverImageEnabled) && width !== 'xsmall';

  const justifyContent = (
    { left: 'flexStart', center: 'center', right: 'flexEnd' } as const
  )[position];
  const modalRadius = !isDrawer ? 'xlarge' : undefined;

  const modalLayout = (
    <ModalContentScrollLayout scrollColumnNotDialog={allowColumnLayout}>
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
      {children}
    </ModalContentScrollLayout>
  );

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
            height={isDrawer ? 'full' : undefined}
            className={{
              [styles.pointerEventsAll]: true,
              [styles.maxSize[position]]: !isDrawer,
              [styles.hideOverflowAboveMobile]: allowColumnLayout,
            }}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
          >
            <ScrollContainer direction="vertical">
              {coverImageEnabled ? (
                <ModalCoverImageLayout width={width} image={coverImage}>
                  {modalLayout}
                </ModalCoverImageLayout>
              ) : (
                modalLayout
              )}
            </ScrollContainer>
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
          <Bleed space="xsmall" horizontal="xxsmall">
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
