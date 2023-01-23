import type { ReactNode } from 'react';
import React, { Fragment } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { heading } from '../../css/typography.css';
import { Heading, IconPositive, IconPromote, Stack, Text } from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { backgrounds, textAlignments } from '../../utils/docsHelpers';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const headingLevels = Object.keys(heading).sort() as Array<
  keyof typeof heading
>;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Levels',
      Example: () => (
        <Stack space="large">
          {headingLevels.map((level) => (
            <Heading level={level} key={level}>
              Level {level}
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
                Level {level} Heading (Line 1)
                <br />
                Level {level} Heading (Line 2)
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
              Level {level} Weak
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
      label: 'Truncation',
      Example: () => (
        <Box style={{ width: 160 }}>
          <Heading level="2" truncate>
            Really long heading
          </Heading>
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
              <Heading level={level} icon={<IconPromote />}>
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
              icon={<IconPromote />}
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
            icon={<IconPromote />}
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
            <Box display="flex" key={level}>
              <Heading level={level}>
                <IconPromote />
                <Box style={{ border: '1px solid red' }} />
              </Heading>
              <Heading level={level}>
                , Abc
                <Box style={{ border: '1px solid red' }} />
              </Heading>
              <Heading level={level}>
                , Abc
                <IconPromote />
                <Box style={{ border: '1px solid red' }} />
              </Heading>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} paddingY="xsmall">
              <Heading level="4">
                {background} <IconPositive />
              </Heading>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
