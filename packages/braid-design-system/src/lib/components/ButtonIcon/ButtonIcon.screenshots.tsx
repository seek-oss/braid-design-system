import React from 'react';
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
      Example: () => (
        <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="1" />
      ),
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
            id="1"
          />
          <ButtonIcon
            variant="soft"
            size="standard"
            icon={<IconBookmark />}
            label="Standard"
            id="2"
          />
          <ButtonIcon
            variant="soft"
            size="large"
            icon={<IconBookmark />}
            label="Large"
            id="3"
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
              <ButtonIcon
                bleed
                icon={<IconBookmark />}
                label="Bookmark"
                id="1"
              />
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
                id="1"
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
            id="1"
          />
          <ButtonIcon
            variant="transparent"
            size="standard"
            icon={<IconBookmark />}
            label="Standard"
            id="2"
          />
          <ButtonIcon
            variant="transparent"
            size="large"
            icon={<IconBookmark />}
            label="Large"
            id="3"
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
            id="1"
          />
          <ButtonIcon
            variant="soft"
            tone="formAccent"
            icon={<IconBookmark />}
            label="Bookmark"
            id="1"
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
              id="1"
            />
            <ButtonIcon
              variant="soft"
              icon={<IconBookmark />}
              label="Bookmark"
              size="standard"
              id="2"
            />
            <ButtonIcon
              variant="soft"
              icon={<IconBookmark />}
              label="Bookmark"
              size="large"
              id="3"
            />
          </Inline>
          <Inline space="large">
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="small"
              id="4"
            />
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="standard"
              id="5"
            />
            <ButtonIcon
              variant="transparent"
              icon={<IconBookmark />}
              label="Bookmark"
              size="large"
              id="6"
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
                id="1"
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
                id="1"
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
            id="1"
          />
          <ButtonIcon
            bleed={false}
            variant="transparent"
            tone="formAccent"
            icon={<IconBookmark active tone="brandAccent" />}
            label="Bookmark"
            id="1"
          />
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="medium">
            <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="1" />
            <ButtonIcon
              variant="transparent"
              bleed={false}
              icon={<IconBookmark />}
              label="Bookmark"
              id="1"
            />
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Layout',
      Example: () => (
        <LayoutTest>
          <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="1" />
        </LayoutTest>
      ),
    },
  ],
};
