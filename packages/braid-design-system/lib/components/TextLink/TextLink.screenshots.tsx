import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import {
  Heading,
  IconNewWindow,
  Text,
  TextLink,
  Columns,
  Column,
  Stack,
  Strong,
} from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { backgrounds } from '../../utils/docsHelpers';
import { IconHome } from '../icons';
import { heading, tone, text } from '../../hooks/typography/typography.css';

const textSizes = [
  undefined, // test default case
  ...(Object.keys(text) as Array<keyof typeof text>),
];
const textTones = [
  undefined, // test default case
  ...(Object.keys(tone) as Array<keyof typeof tone>),
];
const headingLevels = Object.keys(heading) as Array<keyof typeof heading>;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'weight: regular',
      Example: () => (
        <Text>
          <TextLink href="#">TextLink</TextLink>
        </Text>
      ),
    },
    {
      label: 'weight: weak',
      Example: () => (
        <Text>
          <TextLink href="#" weight="weak">
            TextLink
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'hitArea: large',
      Example: () => (
        <Text>
          <TextLink href="#" hitArea="large">
            TextLink
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'showVisited',
      Example: () => (
        <Text>
          This is a{' '}
          <TextLink href="" showVisited>
            visited TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'Regular weight inside available text sizes',
      Example: () => (
        <Stack space="small">
          {textSizes.map((size) => (
            <Text size={size} key={size}>
              A <TextLink href="#">“regular” TextLink</TextLink> inside{' '}
              <Strong>“{size || 'default'}”</Strong> Text
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Weak weight inside available text sizes',
      Example: () => (
        <Stack space="small">
          {textSizes.map((size) => (
            <Text size={size} key={size}>
              A{' '}
              <TextLink href="#" weight="weak">
                “weak” TextLink
              </TextLink>{' '}
              inside <Strong>“{size || 'default'}”</Strong> Text
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Regular weight inside available text tones',
      Example: () => (
        <Stack space="small">
          {textTones.map((t) => (
            <Text tone={t} key={t}>
              This is a <TextLink href="#">“regular” TextLink</TextLink> inside{' '}
              <Strong>“{t || 'default'}”</Strong> tone Text
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Weak weight inside available text tones',
      Example: () => (
        <Stack space="small">
          {textTones.map((t) => (
            <Text tone={t} key={t}>
              This is a{' '}
              <TextLink href="#" weight="weak">
                “weak” TextLink
              </TextLink>{' '}
              inside <Strong>“{t || 'default'}”</Strong> tone Text
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Regular weight inside available heading levels',
      Example: () => (
        <Stack space="medium">
          {headingLevels.map((level) => (
            <Heading level={level} key={level}>
              A <TextLink href="#">“regular” TextLink</TextLink> inside level “
              {level}”
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Weak weight inside available heading levels',
      Example: () => (
        <Stack space="medium">
          {headingLevels.map((level) => (
            <Heading level={level} key={level}>
              A{' '}
              <TextLink href="#" weight="weak">
                “weak” TextLink
              </TextLink>{' '}
              inside level “{level}”
            </Heading>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Icons inherit regular link colour',
      Example: () => (
        <Stack space="small">
          <Text>
            This icon matches the link colour:{' '}
            <TextLink href="#">
              TextLink <IconHome />
            </TextLink>
          </Text>
          <Text tone="secondary">
            This icon matches the link colour:{' '}
            <TextLink href="#">
              TextLink <IconHome />
            </TextLink>
          </Text>
          <Text tone="critical">
            This icon matches the link colour:{' '}
            <TextLink href="#">
              TextLink <IconHome />
            </TextLink>
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Icons inherit weak link colour',
      Example: () => (
        <Stack space="small">
          <Text>
            This icon matches the link colour:{' '}
            <TextLink href="#" weight="weak">
              TextLink <IconHome />
            </TextLink>
          </Text>
          <Text tone="secondary">
            This icon matches the link colour:{' '}
            <TextLink href="#" weight="weak">
              TextLink <IconHome />
            </TextLink>
          </Text>
          <Text tone="critical">
            This icon matches the link colour:{' '}
            <TextLink href="#" weight="weak">
              TextLink <IconHome />
            </TextLink>
          </Text>
        </Stack>
      ),
    },
    {
      label: 'Text Contrast',
      Example: () => (
        <Fragment>
          {backgrounds.map((background, i) => (
            <Box key={i} background={background} padding="small">
              <Columns space="xlarge">
                <Column>
                  <Text>{background}</Text>
                </Column>
                <Column width="content">
                  <Text>
                    <TextLink href="#">
                      Default <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
                <Column width="content">
                  <Text>
                    <TextLink href="#" weight="regular">
                      Regular <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <TextLink href="#" weight="weak">
                      Weak <IconNewWindow />
                    </TextLink>
                  </Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Fragment>
      ),
    },
    {
      label: 'Heading Contrast',
      Example: () => (
        <Fragment>
          {backgrounds.map((background, i) => (
            <Box key={i} background={background} padding="small">
              <Columns space="xlarge">
                <Column>
                  <Heading level="4">{background}</Heading>
                </Column>
                <Column width="content">
                  <Heading level="4">
                    <TextLink href="#">
                      Default <IconNewWindow />
                    </TextLink>
                  </Heading>
                </Column>
                <Column width="content">
                  <Heading level="4">
                    <TextLink href="#" weight="regular">
                      Regular <IconNewWindow />
                    </TextLink>
                  </Heading>
                </Column>
                <Column>
                  <Heading level="4">
                    <TextLink href="#" weight="weak">
                      Weak <IconNewWindow />
                    </TextLink>
                  </Heading>
                </Column>
              </Columns>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
