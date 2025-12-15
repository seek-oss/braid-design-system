import type { ReactNode, FC } from 'react';

import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Text } from '../Text/Text';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { iconSlotSpace } from '../private/iconSlotSpace';

type Tone = 'promote' | 'info' | 'positive' | 'critical';

export interface NoticeProps {
  tone?: Tone;
  data?: DataAttributeMap;
  children: ReactNode;
}

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical,
};

export const Notice: FC<NoticeProps> = ({
  tone = 'info',
  data,
  children,
  ...restProps
}) => {
  const Icon = icons[tone];

  return (
    <Box
      role="alert"
      aria-live="polite"
      textAlign="left"
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <DefaultTextPropsProvider tone={tone}>
        <Columns space={iconSlotSpace}>
          <Column width="content">
            <Text>
              <Icon />
            </Text>
          </Column>
          <Column>{children}</Column>
        </Columns>
      </DefaultTextPropsProvider>
    </Box>
  );
};
