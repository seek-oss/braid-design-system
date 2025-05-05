import type { ComponentScreenshot } from 'site/types';

import { Box, ButtonIcon, Inline, Heading, IconBookmark, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { LayoutTest } from '../../utils/LayoutTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      background: 'surface',
      Example: () => <ButtonIcon icon={<IconBookmark />} label="Bookmark" />,
    },
    {
      label: 'Soft',
      background: 'surface',
      Example: () => (
        <Inline space="large" alignY="center">
          <ButtonIcon
            variant="soft"
            size="small"
            icon={<IconBookmark />}
            label="Small"
          />
          <ButtonIcon
            variant="soft"
            size="standard"
            icon={<IconBookmark />}
            label="Standard"
          />
          <ButtonIcon
            variant="soft"
            size="large"
            icon={<IconBookmark />}
            label="Large"
          />
        </Inline>
      ),
    },
    {
      label: 'Soft - bleed on',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="small" alignY="center">
              <Heading level="2">Heading</Heading>
              <ButtonIcon bleed icon={<IconBookmark />} label="Bookmark" />
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Soft - bleed off',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="small" alignY="center">
              <Heading level="2">Heading</Heading>
              <ButtonIcon
                bleed={false}
                icon={<IconBookmark />}
                label="Bookmark"
              />
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Transparent',
      background: 'surface',
      Example: () => (
        <Inline space="large" alignY="center">
          <ButtonIcon
            variant="transparent"
            size="small"
            icon={<IconBookmark />}
            label="Small"
          />
          <ButtonIcon
            variant="transparent"
            size="standard"
            icon={<IconBookmark />}
            label="Standard"
          />
          <ButtonIcon
            variant="transparent"
            size="large"
            icon={<IconBookmark />}
            label="Large"
          />
        </Inline>
      ),
    },
    {
      label: 'Tone - formAccent',
      background: 'surface',
      Example: () => (
        <Inline space="large" alignY="center">
          <ButtonIcon
            variant="transparent"
            tone="formAccent"
            icon={<IconBookmark />}
            label="Bookmark"
          />
          <ButtonIcon
            variant="soft"
            tone="formAccent"
            icon={<IconBookmark />}
            label="Bookmark"
          />
        </Inline>
      ),
    },
    {
      label: 'Virtual touch target',
      Example: () => (
        <Stack space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
          <Inline space="large">
            <ButtonIcon
              variant="soft"
              icon={<IconBookmark />}
              label="Bookmark"
              size="small"
            />
            <ButtonIcon
              variant="soft"
              icon={<IconBookmark />}
              label="Bookmark"
              size="standard"
            />
            <ButtonIcon
              variant="soft"
              icon={<IconBookmark />}
              label="Bookmark"
              size="large"
            />
          </Inline>
          <Inline space="large">
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="small"
            />
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="standard"
            />
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="large"
            />
          </Inline>
        </Stack>
      ),
    },
    {
      label: 'Transparent - bleed on (default)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="small" alignY="center">
              <Heading level="2">Heading</Heading>
              <ButtonIcon
                variant="transparent"
                icon={<IconBookmark />}
                label="Bookmark"
              />
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Transparent - bleed off',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="small" alignY="center">
              <Heading level="2">Heading</Heading>
              <ButtonIcon
                bleed={false}
                variant="transparent"
                icon={<IconBookmark />}
                label="Bookmark"
              />
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Icon tone overrides button tone',
      background: 'surface',
      Example: () => (
        <Inline space="small" alignY="center">
          <ButtonIcon
            bleed={false}
            variant="transparent"
            icon={<IconBookmark active tone="brandAccent" />}
            label="Bookmark"
          />
          <ButtonIcon
            bleed={false}
            variant="transparent"
            tone="formAccent"
            icon={<IconBookmark active tone="brandAccent" />}
            label="Bookmark"
          />
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="medium">
            <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
            <ButtonIcon
              variant="transparent"
              bleed={false}
              icon={<IconBookmark />}
              label="Bookmark"
            />
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Layout',
      Example: () => (
        <LayoutTest>
          <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
        </LayoutTest>
      ),
    },
  ],
};
