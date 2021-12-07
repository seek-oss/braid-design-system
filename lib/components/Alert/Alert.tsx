import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import {
  IconInfo,
  IconCritical,
  IconPositive,
  IconPromote,
  IconCaution,
  IconClear,
} from '../icons';
import { AllOrNone } from '../private/AllOrNone';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Overlay } from '../private/Overlay/Overlay';
import { useBackground } from '../Box/BackgroundContext';
import { textAlignedToIcon } from '../../css/textAlignedToIcon.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { BoxShadow } from '../../css/atoms/atomicProperties';
import { Keyline } from '../private/Keyline/Keyline';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { iconContainerSize } from '../../hooks/useIcon';
import * as styles from './Alert.css';

type Tone = 'promote' | 'info' | 'positive' | 'caution' | 'critical';

type CloseProps = AllOrNone<{ onClose: () => void; closeLabel: string }>;

const borderRadius = 'large';

export type AlertProps = {
  tone?: Tone;
  children: ReactNode;
  data?: DataAttributeMap;
  id?: string;
} & CloseProps;

const backgroundForTone: Record<Tone, BoxProps['background']> = {
  promote: 'promoteLight',
  info: 'infoLight',
  positive: 'positiveLight',
  caution: 'cautionLight',
  critical: 'criticalLight',
};

const borderForTone: Record<Tone, BoxShadow> = {
  promote: 'borderPromoteLight',
  info: 'borderInfoLight',
  positive: 'borderPositiveLight',
  caution: 'borderCautionLight',
  critical: 'borderCriticalLight',
};

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  caution: IconCaution,
  critical: IconCritical,
};

export const Alert = ({
  tone = 'info',
  children,
  id,
  closeLabel = 'Close',
  data,
  onClose,
}: AlertProps) => {
  const parentBackground = useBackground();
  const Icon = icons[tone];

  return (
    <Box
      id={id}
      background={backgroundForTone[tone]}
      padding="medium"
      borderRadius={borderRadius}
      position="relative"
      overflow="hidden"
      role="alert"
      aria-live="polite"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Columns space="small">
        <Column width="content">
          <Icon tone={tone} />
        </Column>
        <Column>
          <Box className={textAlignedToIcon.standard}>{children}</Box>
        </Column>
        {onClose ? (
          <Column width="content">
            <Box
              component="button"
              aria-label={closeLabel}
              borderRadius="full"
              cursor="pointer"
              position="relative"
              onClick={onClose}
              outline="none"
              transition="touchable"
              transform={{ active: 'touchable' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={[
                styles.closeButton,
                iconContainerSize(),
                virtualTouchable(),
              ]}
            >
              <Overlay
                component="span"
                boxShadow="outlineFocus"
                transition="fast"
                onlyVisibleForKeyboardNavigation
                borderRadius="full"
                className={styles.closeButtonFocus}
              />
              <Overlay
                component="span"
                background="surface"
                transition="fast"
                borderRadius="full"
                className={styles.closeButtonHover}
              />
              <Box
                component="span"
                display="block"
                zIndex={1}
                position="relative"
              >
                <IconClear size="fill" tone={tone} />
              </Box>
            </Box>
          </Column>
        ) : null}
      </Columns>
      {parentBackground.lightMode !== 'surface' && (
        <Overlay
          borderRadius={borderRadius}
          boxShadow={{ lightMode: borderForTone[tone] }}
          visible
        />
      )}
      <Keyline tone={tone} borderRadius={borderRadius} />
    </Box>
  );
};
