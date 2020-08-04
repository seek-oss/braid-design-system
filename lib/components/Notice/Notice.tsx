import React, { ReactNode } from 'react';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { useTextAlignedToIcon } from '../../hooks/useTextAlignedToIcon/useTextAlignedToIcon';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';

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
          <Box className={useTextAlignedToIcon('standard')}>
            <DefaultTextPropsProvider tone={tone}>
              {children}
            </DefaultTextPropsProvider>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};
