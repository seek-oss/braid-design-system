import React, { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { AllOrNone } from '../private/AllOrNone';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';

type Tone = 'info' | 'critical' | 'positive' | 'promote';
type AlertWeight = 'strong' | 'regular';

type CloseProps = AllOrNone<{ onClose: () => void; closeLabel: string }>;

export type AlertProps = {
  tone?: Tone;
  weight?: AlertWeight;
  children: ReactNode;
  id?: string;
} & CloseProps;

const backgroundForTone = (tone: Tone, weight: AlertWeight) => {
  if (weight === 'strong') {
    return tone;
  }

  if (tone === 'positive') {
    return 'positiveLight';
  }

  if (tone === 'critical') {
    return 'criticalLight';
  }

  if (tone === 'info') {
    return 'infoLight';
  }

  if (tone === 'promote') {
    return 'promoteLight';
  }
};

const icons = {
  info: IconInfo,
  critical: IconCritical,
  positive: IconPositive,
  promote: IconPromote,
};

export const Alert = ({
  tone = 'info',
  weight = 'regular',
  children,
  id,
  closeLabel = 'Close',
  onClose,
}: AlertProps) => {
  const background = backgroundForTone(tone, weight);
  const Icon = icons[tone];

  return (
    <Box id={id} background={background} paddingX="gutter" paddingY="medium">
      <Columns space="small">
        <Column width="content">
          <Icon />
        </Column>
        <Column>
          <Text baseline={false}>{children}</Text>
        </Column>
        {onClose ? (
          <Column width="content">
            <ClearButton label={closeLabel} />
          </Column>
        ) : null}
      </Columns>
    </Box>
  );
};
