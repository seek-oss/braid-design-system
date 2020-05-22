import React, { ReactNode } from 'react';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { useTextAlignedToIcon } from '../../hooks/useTextAlignedToIcon/useTextAlignedToIcon';
import { DefaultTextToneContext } from '../private/DefaultTextToneContext';

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
          <Box className={useTextAlignedToIcon()}>
            <DefaultTextToneContext.Provider value={tone}>
              {children}
            </DefaultTextToneContext.Provider>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};
