import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { ButtonIcon, Inline, Heading, IconBookmark } from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { backgrounds } from '../../utils/docsHelpers';

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
      label: 'Soft - large',
      background: 'surface',
      Example: () => (
        <ButtonIcon
          variant="soft"
          size="large"
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
      ),
    },
    {
      label: 'Soft - secondary',
      background: 'surface',
      Example: () => (
        <ButtonIcon
          variant="soft"
          tone="secondary"
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
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
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
      ),
    },
    {
      label: 'Transparent - large',
      background: 'surface',
      Example: () => (
        <ButtonIcon
          variant="transparent"
          size="large"
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
      ),
    },
    {
      label: 'Transparent - secondary',
      background: 'surface',
      Example: () => (
        <ButtonIcon
          variant="transparent"
          tone="secondary"
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
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
            tone="secondary"
            icon={<IconBookmark active tone="formAccent" />}
            label="Bookmark"
            id="1"
          />
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="small">
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
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
