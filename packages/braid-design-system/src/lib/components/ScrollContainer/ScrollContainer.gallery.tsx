import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Box, Inline, ScrollContainer, Stack } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Horizontal',
      Example: () =>
        source(
          <Box maxWidth="xsmall">
            <ScrollContainer>
              <Inline space="small" noWrap>
                <Placeholder width={120} height={80} label="1" />
                <Placeholder width={120} height={80} label="2" />
                <Placeholder width={120} height={80} label="3" />
                <Placeholder width={120} height={80} label="4" />
                <Placeholder width={120} height={80} label="5" />
                <Placeholder width={120} height={80} label="6" />
              </Inline>
            </ScrollContainer>
          </Box>,
        ),
    },
    {
      label: 'Vertical',
      Example: () =>
        source(
          <Box style={{ height: 200 }}>
            <ScrollContainer direction="vertical">
              <Stack space="small">
                <Placeholder height={48} label="1" />
                <Placeholder height={48} label="2" />
                <Placeholder height={48} label="3" />
                <Placeholder height={48} label="4" />
                <Placeholder height={48} label="5" />
                <Placeholder height={48} label="6" />
              </Stack>
            </ScrollContainer>
          </Box>,
        ),
    },
    {
      label: 'Both directions',
      Example: () =>
        source(
          <Box maxWidth="xsmall" style={{ height: 200 }}>
            <ScrollContainer direction="all">
              <Box style={{ width: 640 }}>
                <Stack space="small">
                  <Placeholder height={48} label="1" />
                  <Placeholder height={48} label="2" />
                  <Placeholder height={48} label="3" />
                  <Placeholder height={48} label="4" />
                  <Placeholder height={48} label="5" />
                  <Placeholder height={48} label="6" />
                </Stack>
              </Box>
            </ScrollContainer>
          </Box>,
        ),
    },
    {
      label: 'Hidden scrollbar',
      Example: () =>
        source(
          <Box maxWidth="xsmall">
            <ScrollContainer hideScrollbar>
              <Inline space="small" noWrap>
                <Placeholder width={120} height={80} label="1" />
                <Placeholder width={120} height={80} label="2" />
                <Placeholder width={120} height={80} label="3" />
                <Placeholder width={120} height={80} label="4" />
                <Placeholder width={120} height={80} label="5" />
                <Placeholder width={120} height={80} label="6" />
              </Inline>
            </ScrollContainer>
          </Box>,
        ),
    },
  ],
};
