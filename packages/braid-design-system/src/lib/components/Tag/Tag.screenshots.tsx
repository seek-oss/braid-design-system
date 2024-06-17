import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Tag, Inline, IconTag, Stack } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
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
        </Inline>
      ),
    },
    {
      label: 'Truncated Tag',
      background: 'surface',
      Example: ({ handler }) => (
        <Tag onClear={handler} clearLabel="Clear tag">
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </Tag>
      ),
    },
    {
      label: 'Virtual touch target',
      background: 'surface',
      Example: ({ handler }) => (
        <Stack space="large">
          <Inline space="xsmall" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Tag size="small">Tag</Tag>
            <Tag size="small" onClear={handler} clearLabel="Clear">
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
          </Inline>

          <Inline space="small" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Tag>Tag</Tag>
            <Tag onClear={handler} clearLabel="Clear">
              Tag
            </Tag>
            <Tag icon={<IconTag />} onClear={handler} clearLabel="Clear">
              Tag
            </Tag>
          </Inline>
        </Stack>
      ),
    },
  ],
};
