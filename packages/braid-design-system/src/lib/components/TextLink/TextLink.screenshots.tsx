import React from 'react';
import type { ComponentScreenshot } from 'site/types';

import {
  Box,
  Heading,
  IconNewWindow,
  IconHome,
  Text,
  TextLink,
  Columns,
  Column,
  Stack,
  Strong,
  IconLink,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import { heading, tone, textSizeTrimmed } from '../../css/typography.css';

const textSizes = [
  undefined, // test default case
  ...(Object.keys(textSizeTrimmed) as Array<keyof typeof textSizeTrimmed>),
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
      label: 'hitArea: large (virtual touch target)',
      Example: () => (
        <Text data={{ [debugTouchableAttrForDataProp]: '' }}>
          This is the{' '}
          <TextLink href="" hitArea="large">
            virtual touch target
          </TextLink>
          .
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
      label: 'With icon slot',
      Example: () => (
        <Text>
          A sentence with a{' '}
          <TextLink href="" icon={<IconLink />}>
            TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'With a trailing icon',
      Example: () => (
        <Text>
          A sentence with an icon trailing the{' '}
          <TextLink href="" icon={<IconLink />} iconPosition="trailing">
            TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'With icon slot and weight weak',
      Example: () => (
        <Text>
          A sentence with a{' '}
          <TextLink href="" weight="weak" icon={<IconLink />}>
            TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'With a trailing icon and weight weak',
      Example: () => (
        <Text>
          A sentence with an icon trailing the{' '}
          <TextLink
            href=""
            weight="weak"
            icon={<IconLink />}
            iconPosition="trailing"
          >
            TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'Text Contrast',
      Example: () => (
        <BackgroundContrastTest>
          {(background) => (
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
          )}
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Heading Contrast',
      Example: () => (
        <BackgroundContrastTest>
          {(background) => (
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
          )}
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Underline position wrap test',
      Example: () => (
        <Box style={{ maxWidth: 200 }}>
          <Stack space="large">
            <Text size="xsmall">
              xsmall{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap wrap wrap wrap Wrap
              </TextLink>
            </Text>
            <Text size="small">
              small{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap wrap wrap wrap Wrap
              </TextLink>
            </Text>
            <Text size="standard">
              standard{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap wrap wr Wrap
              </TextLink>
            </Text>
            <Text size="large">
              large{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap wrap wr Wrap
              </TextLink>
            </Text>

            <Heading level="4">
              Heading4{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap Wrap Wrap
              </TextLink>
            </Heading>
            <Heading level="3">
              Heading3{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap Wrap
              </TextLink>
            </Heading>
            <Heading level="2">
              H2{' '}
              <TextLink href="#" weight="weak">
                Abcing wrap wrap Wrap
              </TextLink>
            </Heading>
            <Heading level="1">
              H1{' '}
              <TextLink href="#" weight="weak">
                Abing wrap Wrap Wrap
              </TextLink>
            </Heading>
          </Stack>
        </Box>
      ),
    },
  ],
};
