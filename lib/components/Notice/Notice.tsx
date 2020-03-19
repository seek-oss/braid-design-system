import * as React from 'react';
import { ReactNode } from 'react';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { Text } from '../Text/Text';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';

type Tone = 'promote' | 'info' | 'positive' | 'critical';

export type NoticeProps = {
  tone?: Tone;
  children: ReactNode;
};

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical,
};

export const Notice = ({ tone = 'info', children }: NoticeProps) => {
  const Icon = icons[tone];

  return (
    <Box role="alert" aria-live="polite">
      <Columns space="xsmall">
        <Column width="content">
          <Icon tone={tone} />
        </Column>
        <Column>
          <Text tone={tone} baseline={false}>
            {children}
          </Text>
        </Column>
      </Columns>
    </Box>
  );
};
