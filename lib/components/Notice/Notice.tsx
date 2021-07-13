import React, { ReactNode } from 'react';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Box } from '../Box/Box';
import { textAlignedToIcon } from '../../css/textAlignedToIcon.css';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type Tone = 'promote' | 'info' | 'positive' | 'critical';

export type NoticeProps = {
  tone?: Tone;
  data?: DataAttributeMap;
  children: ReactNode;
};

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical,
};

export const Notice = ({ tone = 'info', data, children }: NoticeProps) => {
  const Icon = icons[tone];

  return (
    <Box
      role="alert"
      aria-live="polite"
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <Columns space="xsmall">
        <Column width="content">
          <Icon tone={tone} />
        </Column>
        <Column>
          <Box className={textAlignedToIcon.standard}>
            <DefaultTextPropsProvider tone={tone}>
              {children}
            </DefaultTextPropsProvider>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};
