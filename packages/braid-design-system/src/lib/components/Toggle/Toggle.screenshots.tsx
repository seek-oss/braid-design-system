import type { ComponentScreenshot } from 'site/types';

import { Toggle, Box, Tiles, Inline, Text, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Toggle off',
      Example: ({ handler }) => (
        <Toggle on={false} label="Toggled off" onChange={handler} />
      ),
    },
    {
      label: 'Toggle on',
      Example: ({ handler }) => (
        <Toggle on={true} label="Toggled on" onChange={handler} />
      ),
    },
    {
      label: 'Small size',
      Example: ({ handler }) => (
        <Toggle on={true} size="small" label="Small" onChange={handler} />
      ),
    },
    {
      label: 'Right aligned with default toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="right"
          label="Aligned right"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Justified with default toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="justify"
          label="Justified"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Space between the label and toggle preserved',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Box display="flex">
          <Toggle
            on={true}
            align="justify"
            label="Justified"
            onChange={handler}
          />
        </Box>
      ),
    },
    {
      label: 'Left aligned with leading toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="left"
          togglePosition="leading"
          label="Aligned left, leading toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Left aligned with trailing toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="left"
          togglePosition="trailing"
          label="Aligned left, trailing toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Justified with leading toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="justify"
          togglePosition="leading"
          label="Justified, leading toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Justified with trailing toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="justify"
          togglePosition="trailing"
          label="Justified, trailing toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Right aligned with leading toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="right"
          togglePosition="leading"
          label="Right aligned, leading toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'Right aligned with trailing toggle position',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          align="right"
          togglePosition="trailing"
          label="Right aligned, trailing toggle"
          onChange={handler}
        />
      ),
    },
    {
      label: 'With a long label',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Toggle
          on={true}
          label="The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
          onChange={handler}
        />
      ),
    },
    {
      label: 'With Inline text (standard size)',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Inline space="xsmall">
          <Toggle on={true} label="Toggle" onChange={handler} />
          <Text>Inline text</Text>
        </Inline>
      ),
    },
    {
      label: 'With Inline text (small size)',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ handler }) => (
        <Inline space="xsmall">
          <Toggle on={true} label="Toggle" onChange={handler} size="small" />
          <Text size="small">Inline text</Text>
        </Inline>
      ),
    },
    {
      label: 'Virtual touch target',
      Example: ({ handler }) => (
        <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
          <Toggle on={true} size="small" label="Small" onChange={handler} />
          <Toggle
            on={true}
            size="standard"
            label="Standard"
            onChange={handler}
          />
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Example: ({ handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            <Tiles space="small" columns={2}>
              <Toggle on={true} label="Label" onChange={handler} />
              <Toggle on={false} label="Label" onChange={handler} />
            </Tiles>
          </BackgroundContrastTest>
        </Box>
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      Example: ({ handler }) => (
        <Stack space="large" align="center">
          <Toggle
            on={true}
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
            onChange={handler}
          />
        </Stack>
      ),
    },
  ],
};
