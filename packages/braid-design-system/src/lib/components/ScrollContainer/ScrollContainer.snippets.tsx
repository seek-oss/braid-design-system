import source from '@braid-design-system/source.macro';

import {
  Box,
  Inline,
  Placeholder,
  ScrollContainer,
  Stack,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Horizontal',
    code: source(
      <Box maxWidth="xsmall">
        <ScrollContainer>
          <Inline space="small" noWrap>
            <Placeholder width={120} height={80} />
            <Placeholder width={120} height={80} />
            <Placeholder width={120} height={80} />
            <Placeholder width={120} height={80} />
          </Inline>
        </ScrollContainer>
      </Box>,
    ),
  },
  {
    description: 'Vertical',
    code: source(
      <Box style={{ height: 200 }}>
        <ScrollContainer direction="vertical">
          <Stack space="small">
            <Placeholder height={48} />
            <Placeholder height={48} />
            <Placeholder height={48} />
            <Placeholder height={48} />
          </Stack>
        </ScrollContainer>
      </Box>,
    ),
  },
  {
    description: 'Both directions',
    code: source(
      <Box maxWidth="xsmall" style={{ height: 200 }}>
        <ScrollContainer direction="all">
          <Box style={{ width: 640 }}>
            <Stack space="small">
              <Placeholder height={48} />
              <Placeholder height={48} />
              <Placeholder height={48} />
              <Placeholder height={48} />
            </Stack>
          </Box>
        </ScrollContainer>
      </Box>,
    ),
  },
];
