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

export type ModalContentProps =
  | (ModalContentCommonProps & {
      illustration?: ReactNodeNoStrings;
      coverImage?: never;
    })
  | (ModalContentCommonProps & { coverImage?: string; illustration?: never });

const modalPadding = { mobile: 'gutter', tablet: 'large' } as const;

interface ModalContentHeaderProps extends Pick<
  ModalContentProps,
  'headingLevel' | 'description'
> {
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
  coverImage,
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

  const isDrawer = position === 'left' || position === 'right';

  const justifyContent = (
    { left: 'flexStart', center: 'center', right: 'flexEnd' } as const
  )[position];
  const modalRadius = !isDrawer ? 'xlarge' : undefined;

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
      className={isDrawer ? styles.drawerContainer : styles.dialogContainer}
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
        overflow={isDrawer ? 'hidden' : undefined}
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
            paddingY={modalPadding}
            paddingX={isDrawer ? pageBlockGutters : modalPadding}
            className={[
              styles.pointerEventsAll,
              !isDrawer && styles.maxSize[position],
              !isDrawer && coverImage && styles.twoColumnOverflow,
            ]}
            {...buildDataAttributes({ data, validateRestProps: restProps })}
          >
            {coverImage && isDrawer && (
              <Bleed horizontal={pageBlockGutters} top="large">
                <Box
                  className={styles.illustrationLayoutImage}
                  width="full"
                  style={{
                    backgroundImage: `url(${coverImage})`,
                  }}
                />
              </Bleed>
            )}
            {coverImage && !isDrawer ? (
              <Bleed
                horizontal={{ mobile: 'medium', tablet: 'large' }}
                vertical="large"
              >
                <Box className={styles.illustrationLayout} height="full">
                  <Columns space="none" reverse collapseBelow="tablet">
                    <Column>
                      <Box
                        className={[
                          styles.illustrationLayoutImage,
                          styles.illustrationLayoutImageDialog,
                        ]}
                        width="full"
                        height="full"
                        style={{
                          backgroundImage: `url(${coverImage})`,
                        }}
                      />
                    </Column>
                    <Column>
                      <ScrollContainer direction="vertical">
                        <Box
                          className={styles.illustrationLayoutContent}
                          padding={modalPadding}
                        >
                          <Stack space="large">
                            <Box display="flex">
                              <Box width="full" minWidth={0}>
                                <ModalContentHeader
                                  title={title}
                                  headingLevel={headingLevel}
                                  description={description}
                                  descriptionId={descriptionId}
                                  ref={headingRef}
                                />
                              </Box>
                              <Box
                                width="touchable"
                                flexShrink={0}
                                flexGrow={0}
                              />
                            </Box>

                            <Fragment>{children}</Fragment>
                          </Stack>
                        </Box>
                      </ScrollContainer>
                    </Column>
                  </Columns>
                </Box>
              </Bleed>
            ) : (
              <>
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
              </>
            )}
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
