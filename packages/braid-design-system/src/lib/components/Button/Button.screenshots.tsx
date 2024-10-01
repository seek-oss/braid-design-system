import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import {
  Box,
  Button,
  IconSend,
  Stack,
  Inline,
  Heading,
  Text,
  IconArrow,
  IconWorkExperience,
} from '../';

import type { ButtonProps } from './Button';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default variant for tone',
      Example: () => (
        <Inline space="small">
          <Button>No tone</Button>
          <Button tone="brandAccent">brandAccent</Button>
          <Button tone="critical">critical</Button>
          <Button tone="formAccent">formAccent</Button>
          <Button tone="neutral">neutral</Button>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Example: () => (
        <Inline space="small">
          <Button tone="critical" variant="solid">
            Solid
          </Button>
          <Button tone="critical" variant="ghost">
            Ghost
          </Button>
          <Button tone="critical" variant="soft">
            Soft
          </Button>
          <Button tone="critical" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'BrandAccent',
      Example: () => (
        <Inline space="small">
          <Button tone="brandAccent" variant="solid">
            Solid
          </Button>
          <Button tone="brandAccent" variant="ghost">
            Ghost
          </Button>
          <Button tone="brandAccent" variant="soft">
            Soft
          </Button>
          <Button tone="brandAccent" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'FormAccent',
      Example: () => (
        <Inline space="small">
          <Button tone="formAccent" variant="solid">
            Solid
          </Button>
          <Button tone="formAccent" variant="ghost">
            Ghost
          </Button>
          <Button tone="formAccent" variant="soft">
            Soft
          </Button>
          <Button tone="formAccent" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'Neutral',
      Example: () => (
        <Inline space="small">
          <Button tone="neutral" variant="solid">
            Solid
          </Button>
          <Button tone="neutral" variant="ghost">
            Ghost
          </Button>
          <Button tone="neutral" variant="soft">
            Soft
          </Button>
          <Button tone="neutral" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'Small size',
      Example: () => (
        <Inline space="small">
          <Button size="small" variant="solid">
            Solid
          </Button>
          <Button size="small" variant="ghost">
            Ghost
          </Button>
          <Button size="small" variant="soft">
            Soft
          </Button>
          <Button size="small" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'Small size (virtual touch target)',
      Example: () => (
        <Inline space="small" data={{ [debugTouchableAttrForDataProp]: '' }}>
          <Button size="small" variant="solid">
            Solid
          </Button>
          <Button size="small" variant="ghost">
            Ghost
          </Button>
          <Button size="small" variant="soft">
            Soft
          </Button>
          <Button size="small" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'With vertical bleed (standard)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="none" alignY="center">
              <Heading level="2">Heading</Heading>
              <Button bleed>Button</Button>
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'With vertical bleed (small)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Inline space="none" alignY="center">
              <Heading level="2">Heading</Heading>
              <Button bleed size="small">
                Button
              </Button>
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'With full bleed (transparent)',
      background: 'surface',
      Example: () => (
        <Box background="neutralLight" borderRadius="standard" padding="gutter">
          <Box background="surface">
            <Heading level="2">Heading</Heading>
            <Inline space="none">
              <Button bleed variant="transparent">
                Button
              </Button>
            </Inline>
          </Box>
        </Box>
      ),
    },
    {
      label: 'With icon',
      Example: () => (
        <Stack space="small">
          <Inline space="small">
            <Button icon={<IconSend />} variant="solid">
              Solid
            </Button>
            <Button icon={<IconSend />} variant="ghost">
              Ghost
            </Button>
            <Button icon={<IconSend />} variant="soft">
              Soft
            </Button>
            <Button icon={<IconSend />} variant="transparent">
              Transparent
            </Button>
          </Inline>
          <Inline space="small">
            <Button size="small" icon={<IconSend />} variant="solid">
              Solid
            </Button>
            <Button size="small" icon={<IconSend />} variant="ghost">
              Ghost
            </Button>
            <Button size="small" icon={<IconSend />} variant="soft">
              Soft
            </Button>
            <Button size="small" icon={<IconSend />} variant="transparent">
              Transparent
            </Button>
          </Inline>
        </Stack>
      ),
    },
    {
      label: 'With iconPosition trailing',
      Example: () => (
        <Stack space="small">
          <Inline space="small">
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="solid"
            >
              Solid
            </Button>
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="ghost"
            >
              Ghost
            </Button>
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="soft"
            >
              Soft
            </Button>
            <Button
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="transparent"
            >
              Transparent
            </Button>
          </Inline>
          <Inline space="small">
            <Button
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="solid"
            >
              Solid
            </Button>
            <Button
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="ghost"
            >
              Ghost
            </Button>
            <Button
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="soft"
            >
              Soft
            </Button>
            <Button
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="transparent"
            >
              Transparent
            </Button>
          </Inline>
        </Stack>
      ),
    },
    {
      label:
        'With icon, transparent variant and bleed, it should align with Text',
      Example: () => (
        <Stack space="small">
          <Text icon={<IconSend />}>Text</Text>
          <Inline space="none">
            <Button icon={<IconSend />} variant="transparent" bleed>
              Button
            </Button>
          </Inline>
        </Stack>
      ),
    },
    {
      label:
        'With icon, transparent variant, bleed and size small, it should align with Text',
      Example: () => (
        <Stack space="small">
          <Text icon={<IconSend />} size="small">
            Text
          </Text>
          <Inline space="none">
            <Button
              icon={<IconSend />}
              size="small"
              variant="transparent"
              bleed
            >
              Button
            </Button>
          </Inline>
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="small">
            <Button tone="formAccent" variant="solid">
              Solid
            </Button>
            <Button tone="formAccent" variant="ghost">
              Ghost
            </Button>
            <Button tone="formAccent" variant="soft">
              Soft
            </Button>
            <Button tone="formAccent" variant="transparent">
              Transparent
            </Button>
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Contrast - critical',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="small">
            <Button tone="critical" variant="solid">
              Solid
            </Button>
            <Button tone="critical" variant="ghost">
              Ghost
            </Button>
            <Button tone="critical" variant="soft">
              Soft
            </Button>
            <Button tone="critical" variant="transparent">
              Transparent
            </Button>
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Contrast - brandAccent',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="small">
            <Button tone="brandAccent" variant="solid">
              Solid
            </Button>
            <Button tone="brandAccent" variant="ghost">
              Ghost
            </Button>
            <Button tone="brandAccent" variant="soft">
              Soft
            </Button>
            <Button tone="brandAccent" variant="transparent">
              Transparent
            </Button>
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Contrast - neutral',
      Example: () => (
        <BackgroundContrastTest>
          <Inline space="small">
            <Button tone="neutral" variant="solid">
              Solid
            </Button>
            <Button tone="neutral" variant="ghost">
              Ghost
            </Button>
            <Button tone="neutral" variant="soft">
              Soft
            </Button>
            <Button tone="neutral" variant="transparent">
              Transparent
            </Button>
          </Inline>
        </BackgroundContrastTest>
      ),
    },
    {
      label: 'Long label',
      Example: () => (
        <Stack space="xsmall">
          <Text>Long label</Text>
          <Inline space="small">
            {['standard', 'small'].map((s) => (
              <Box style={{ maxWidth: 120 }} key={s}>
                <Button size={s as ButtonProps['size']}>
                  Long label test ({s})
                </Button>
              </Box>
            ))}
          </Inline>

          <Text>Long label with icon</Text>
          <Inline space="small">
            {['standard', 'small'].map((s) => (
              <Box style={{ maxWidth: 120 }} key={s}>
                <Button
                  icon={<IconWorkExperience />}
                  size={s as ButtonProps['size']}
                >
                  long label test ({s})
                </Button>
              </Box>
            ))}
          </Inline>
        </Stack>
      ),
    },
    {
      label: 'Unbroken label',
      Example: () => (
        <Stack space="xsmall">
          <Text>Unbroken label</Text>
          <Inline space="small">
            {['standard', 'small'].map((s) => (
              <Box style={{ maxWidth: 120 }} key={s}>
                <Button size={s as ButtonProps['size']}>
                  unbrokenlabeltest{s}
                </Button>
              </Box>
            ))}
          </Inline>

          <Text>Unbroken label with icon</Text>
          <Inline space="small">
            {['standard', 'small'].map((s) => (
              <Box style={{ maxWidth: 120 }} key={s}>
                <Button
                  icon={<IconWorkExperience />}
                  size={s as ButtonProps['size']}
                >
                  unbrokenlabeltest{s}
                </Button>
              </Box>
            ))}
          </Inline>
        </Stack>
      ),
    },
  ],
};
