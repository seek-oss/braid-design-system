import React, { ReactNode } from 'react';
import { useStyles } from 'sku/treat';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
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
import * as styleRefs from './Alert.treat';

type Tone = 'promote' | 'info' | 'positive' | 'caution' | 'critical';

type CloseProps = AllOrNone<{ onClose: () => void; closeLabel: string }>;

export type AlertProps = {
  tone?: Tone;
  children: ReactNode;
  id?: string;
} & CloseProps;

const backgroundForTone = {
  promote: 'promoteLight',
  info: 'infoLight',
  positive: 'positiveLight',
  caution: 'cautionLight',
  critical: 'criticalLight',
} as Record<Tone, BoxProps['background']>;

const borderForTone = {
  promote: 'borderPromote',
  info: 'borderInfo',
  positive: 'borderPositive',
  caution: 'borderCaution',
  critical: 'borderCritical',
} as Record<Tone, BoxProps['boxShadow']>;

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
  onClose,
}: AlertProps) => {
  const styles = useStyles(styleRefs);
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
    >
      <Box paddingLeft={highlightBarSize}>
        <Columns space="small">
          <Column width="content">
            <Icon tone={tone} />
          </Column>
          <Column>
            <Text baseline={false}>{children}</Text>
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
          boxShadow={borderForTone[tone]}
          visible
          className={{
            [styles.toneBorder]: tone !== 'caution',
            [styles.cautionBorder]: tone === 'caution',
          }}
        />
      )}
      <Box
        background={tone}
        paddingLeft={highlightBarSize}
        position="absolute"
        left="0"
        top="0"
        bottom="0"
      />
    </Box>
  );
};
