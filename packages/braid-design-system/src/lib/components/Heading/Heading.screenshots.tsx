import React, { Fragment, type ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { heading } from '../../css/typography.css';
import { Box, Heading, IconPositive, IconImage, Stack, Text } from '../';
import { textAlignments } from '../../utils/docsHelpers';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const headingLevels = Object.keys(heading).sort() as Array<
  keyof typeof heading
>;

const thaiLevels: Record<(typeof headingLevels)[number], string> = {
  '1': 'ระดับหนึ่ง',
  '2': 'ระดับสอง',
  '3': 'ระดับสาม',
  '4': 'ระดับสี่',
};

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Levels',
      Example: () => (
        <Stack space="large">
          {headingLevels.map((level) => (
            <Heading level={level} key={level}>
              Level {level} - {thaiLevels[level]}
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Line heights',
      background: 'surface',
      Example: () => (
        <Stack space="medium">
          {headingLevels.map((level) => (
            <Box key={level} background="neutralLight">
              <Heading level={level}>
                Level {level} - {thaiLevels[level]} (Line 1)
                <br />
                Level {level} - {thaiLevels[level]} (Line 2)
              </Heading>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Weight: weak',
      Example: () => (
        <Stack space="large">
          {headingLevels.map((level) => (
            <Heading level={level} weight="weak" key={level}>
              Level {level} - {thaiLevels[level]} Weak
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Heading Alignment',
      Container,
      Example: () => (
        <Stack space="medium">
          {textAlignments.map((alignment) => (
            <Heading level="4" align={alignment} key={alignment}>
              {alignment}
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Heading Alignment (responsive)',
      Container,
      Example: () => (
        <Heading level="4" align={['right', 'center', 'left']}>
          Right aligned mobile, center on tablet, left on desktop
        </Heading>
      ),
    },
    {
      label: 'Truncation (legacy)',
      Example: () => (
        <Box style={{ width: 220 }}>
          <Box style={{ border: '1px solid red' }} />
          <Heading level="2" truncate>
            Limiting to 1 line that won’t fit in the layout
          </Heading>
          <Box style={{ border: '1px solid red' }} />
        </Box>
      ),
    },
    {
      label: 'Max lines = 1 (should be same as truncation)',
      Example: () => (
        <Box style={{ width: 220 }}>
          <Box style={{ border: '1px solid red' }} />
          <Heading level="2" maxLines={1}>
            Limiting to 1 line that won’t fit in the layout
          </Heading>
          <Box style={{ border: '1px solid red' }} />
        </Box>
      ),
    },
    {
      label: 'Max lines = 3',
      Example: () => (
        <Box style={{ width: 220 }}>
          <Box style={{ border: '1px solid red' }} />
          <Heading level="2" maxLines={3}>
            Another example of long text, but limiting to 3 lines, and won’t fit
            in the layout.
          </Heading>
          <Box style={{ border: '1px solid red' }} />
        </Box>
      ),
    },
    {
      label: 'With an icon',
      background: 'surface',
      Example: () => (
        <Stack space="large">
          {headingLevels.map((level) => (
            <Box key={level} background="neutralLight">
              <Heading level={level} icon={<IconImage />}>
                Level {level} with icon
              </Heading>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Alignment with an icon',
      Container,
      Example: () => (
        <Stack space="large">
          {textAlignments.map((alignment) => (
            <Heading
              level="3"
              align={alignment}
              icon={<IconImage />}
              key={alignment}
            >
              {alignment}
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Responsive alignment with an icon',
      Example: () => (
        <Stack space="medium">
          <Heading
            level="3"
            align={['right', 'center', 'left']}
            icon={<IconImage />}
          >
            Right aligned mobile, center on tablet, left on desktop
          </Heading>
        </Stack>
      ),
    },
    {
      label: 'Icon should not impact line height (Red line should not step)',
      Example: () => (
        <Stack space="large">
          <Text tone="secondary">
            Format: Icon only, Text only, Text with icon
          </Text>
          {headingLevels.map((level) => (
            <Fragment key={level}>
              <Box display="flex">
                <Heading level={level}>
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
                <Heading level={level}>
                  , Abc
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
                <Heading level={level}>
                  , Abc
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
              </Box>
              <Box display="flex">
                <Heading level={level}>
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
                <Heading level={level}>
                  , เอบีซี
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
                <Heading level={level}>
                  , เอบีซี
                  <IconImage />
                  <Box style={{ border: '1px solid red' }} />
                </Heading>
              </Box>
            </Fragment>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <BackgroundContrastTest>
          {(background) => (
            <Heading level="4">
              {background} <IconPositive />
            </Heading>
          )}
        </BackgroundContrastTest>
      ),
    },
  ],
};
