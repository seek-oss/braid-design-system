import React from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Tag, Inline, IconTag, Stack } from '../';
import { LayoutTest } from '../../utils/LayoutTest';
import { Box } from '../Box/Box';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Standard Tag',
      background: 'surface',
      Example: ({ handler }) => (
        <Inline space="small">
          <Tag>Tag</Tag>
          <Tag icon={<IconTag />}>Tag</Tag>
          <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
            Tag
          </Tag>
          <Tag icon={<IconTag />} onAdd={handler} addLabel="Add">
            Tag
          </Tag>
        </Inline>
      ),
    },
    {
      label: 'Small Tag',
      background: 'surface',
      Example: ({ handler }) => (
        <Inline space="xsmall">
          <Tag size="small">Tag</Tag>
          <Tag size="small" icon={<IconTag />}>
            Tag
          </Tag>
          <Tag
            size="small"
            icon={<IconTag />}
            onClear={handler}
            clearLabel="Clear"
          >
            Tag
          </Tag>
          <Tag size="small" icon={<IconTag />} onAdd={handler} addLabel="Add">
            Tag
          </Tag>
        </Inline>
      ),
    },
    {
      label: 'Truncated Tag',
      background: 'surface',
      Example: ({ handler }) => (
        <Stack space="small">
          <Tag>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog.
          </Tag>
          <Tag icon={<IconTag />}>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog.
          </Tag>
          <Tag onClear={handler} clearLabel="Clear tag">
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog.
          </Tag>
          <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear tag">
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog. The quick brown
            fox jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog. The quick brown fox jumps over the lazy dog.
          </Tag>
        </Stack>
      ),
    },
    {
      label: 'Virtual touch target',
      background: 'surface',
      Example: ({ handler }) => (
        <Stack space="large">
          <Inline space="xsmall" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Tag size="small" onClear={handler} clearLabel="Clear">
              Tag
            </Tag>
            <Tag size="small" onAdd={handler} addLabel="Add">
              Tag
            </Tag>
          </Inline>

          <Inline space="small" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Tag onClear={handler} clearLabel="Clear">
              Tag
            </Tag>
            <Tag onAdd={handler} addLabel="Add">
              Tag
            </Tag>
          </Inline>
        </Stack>
      ),
    },
    {
      label: 'Layout',
      Example: ({ handler }) => (
        <Box maxWidth="xsmall">
          <LayoutTest>
            <Box>
              <Tag>Tag</Tag>
              <Tag icon={<IconTag />}>Tag</Tag>
              <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
                Tag
              </Tag>
              <Tag>
                Cillum sint sint cupidatat sint et proident nostrud quis.
                Voluptate cupidatat deserunt tempor consectetur enim qui
                occaecat enim voluptate deserunt reprehenderit.
              </Tag>
              <Tag icon={<IconTag />}>
                Cillum sint sint cupidatat sint et proident nostrud quis.
                Voluptate cupidatat deserunt tempor consectetur enim qui
                occaecat enim voluptate deserunt reprehenderit.
              </Tag>
              <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
                Cillum sint sint cupidatat sint et proident nostrud quis.
                Voluptate cupidatat deserunt tempor consectetur enim qui
                occaecat enim voluptate deserunt reprehenderit.
              </Tag>
            </Box>
          </LayoutTest>
        </Box>
      ),
    },
  ],
};
