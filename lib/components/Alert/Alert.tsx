import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import {
  IconInfo,
  IconCritical,
  IconPositive,
  IconPromote,
  IconCaution,
} from '../icons';
import { AllOrNone } from '../private/AllOrNone';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Overlay } from '../private/Overlay/Overlay';
import { useBackground } from '../Box/BackgroundContext';
import { textAlignedToIcon } from '../../css/textAlignedToIcon.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Alert.css';

type Tone = 'promote' | 'info' | 'positive' | 'caution' | 'critical';

type CloseProps = AllOrNone<{ onClose: () => void; closeLabel: string }>;

export type AlertProps = {
  tone?: Tone;
  children: ReactNode;
  data?: DataAttributeMap;
  id?: string;
} & CloseProps;

const backgroundForTone = {
  promote: 'promoteLight',
  info: 'infoLight',
  positive: 'positiveLight',
  caution: 'cautionLight',
  critical: 'criticalLight',
} as Record<Tone, BoxProps['background']>;

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  caution: IconCaution,
  critical: IconCritical,
};

const highlightBarSize = 'xxsmall';

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
      borderRadius="standard"
      position="relative"
      overflow="hidden"
      role="alert"
      aria-live="polite"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Box paddingLeft={highlightBarSize}>
        <Columns space="small">
          <Column width="content">
            <Icon tone={tone} />
          </Column>
          <Column>
            <Box className={textAlignedToIcon.standard}>{children}</Box>
          </Column>
          {onClose ? (
            <Column width="content">
              <ClearButton
                tone="neutral"
                label={closeLabel}
                onClick={onClose}
              />
            </Column>
          ) : null}
        </Columns>
      </Box>
      {parentBackground !== 'card' && (
        <Overlay
          borderRadius="standard"
          className={styles.boxShadowForTone[tone]}
          visible
        />
      )}
      <Box
        background={tone}
        paddingLeft={highlightBarSize}
        position="absolute"
        top={0}
        bottom={0}
        left={0}
      />
    </Box>
  );
};
