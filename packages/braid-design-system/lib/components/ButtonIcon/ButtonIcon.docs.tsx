import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../../../site/src/types';
import {
  Text,
  TextLink,
  Box,
  Strong,
  Inline,
  IconBookmark,
  ButtonIcon,
  IconEdit,
  IconClear,
  IconShare,
  IconSend,
  Stack,
  Heading,
  IconHelp,
  Notice,
  IconOverflow,
  IconAdd,
  Card,
} from '..';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Card rounded>
        <Inline space="small">
          <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="example-1" />
          <ButtonIcon icon={<IconAdd />} label="Add" id="example-2" />
          <ButtonIcon icon={<IconShare />} label="Share" id="example-3" />
          <ButtonIcon icon={<IconOverflow />} label="More" id="example-4" />
        </Inline>
      </Card>,
    ),
  accessibility: (
    <>
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#button">
          WAI-ARIA Button Pattern
        </TextLink>
        .
      </Text>
      <Text>
        Given the button contains only an icon (i.e. no text content), it is
        required that a label be provided. This will be both announced to a
        screen reader and presented visually using a{' '}
        <TextLink href="/components/TooltipRenderer">TooltipRenderer</TextLink>.
      </Text>
    </>
  ),
  alternatives: [
    {
      name: 'Button',
      description: 'For a semantic button.',
    },
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
  ],
  additional: [
    {
      label: 'Variants',
      background: 'surface',
      description: (
        <Text>
          The button appearance can be customised via the{' '}
          <Strong>variant</Strong> prop, which accepts either{' '}
          <Strong>soft</Strong> or <Strong>transparent</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                variant="soft"
                icon={<IconSend />}
                label="Soft variant"
                id="variant-1"
              />
              <Text tone="secondary" size="xsmall">
                SOFT
              </Text>
            </Inline>
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                variant="transparent"
                icon={<IconSend />}
                label="Transparent variant"
                bleed={false}
                id="variant-2"
              />
              <Text tone="secondary" size="xsmall">
                TRANSPARENT
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Sizes',
      background: 'surface',
      description: (
        <>
          <Text>
            The button size can be customised via the <Strong>size</Strong>{' '}
            prop, which accepts either <Strong>standard</Strong> or{' '}
            <Strong>large</Strong>.
          </Text>
          <Text>
            Both follow the standard text definition from the theme, where{' '}
            <Strong>standard</Strong> follows the text size and{' '}
            <Strong>large</Strong> follows the line height.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                size="standard"
                icon={<IconEdit />}
                label="Standard size"
                id="size-1"
              />
              <Text tone="secondary" size="xsmall">
                STANDARD
              </Text>
            </Inline>
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                size="large"
                icon={<IconEdit />}
                label="Large size"
                id="size-2"
              />
              <Text tone="secondary" size="xsmall">
                LARGE
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Tone',
      background: 'surface',
      description: (
        <Text>
          By default, the foreground color of the icon follows neutral text,
          however, this can be de-emphasised via the <Strong>tone</Strong> prop
          by selecting <Strong>secondary</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                tone="neutral"
                variant="transparent"
                icon={<IconClear />}
                label="Neutral tone"
                id="tone-1"
              />
              <Text tone="secondary" size="xsmall">
                NEUTRAL
              </Text>
            </Inline>
            <Inline space="gutter" alignY="center">
              <ButtonIcon
                tone="secondary"
                variant="transparent"
                icon={<IconClear />}
                label="Secondary tone"
                id="tone-2"
              />
              <Text tone="secondary" size="xsmall">
                SECONDARY
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Bleed',
      background: 'surface',
      description: (
        <>
          <Text>
            The <Strong>bleed</Strong> prop allows the background colour to
            bleed out into the surrounding layout — leaving the button to only
            take up the space required for the icon itself.
          </Text>
          <Notice>
            <Text>
              By default, we apply the bleed to the ”transparent”{' '}
              <TextLink href="/components/ButtonIcon#variants">
                variant
              </TextLink>
              , ensuring it does not introduce surrounding white space.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" size="xsmall">
                BLEED
              </Text>
              <Box
                background="neutralLight"
                borderRadius="standard"
                padding="gutter"
              >
                <Box background="surface">
                  <Inline space="small" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <ButtonIcon
                      bleed={true}
                      size="large"
                      icon={<IconHelp />}
                      label="Bleed"
                      id="bleed-1"
                    />
                  </Inline>
                </Box>
              </Box>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="xsmall">
                NO BLEED
              </Text>
              <Box
                background="neutralLight"
                borderRadius="standard"
                padding="gutter"
              >
                <Box background="surface">
                  <Inline space="small" alignY="center">
                    <Heading level="2">Heading</Heading>
                    <ButtonIcon
                      bleed={false}
                      size="large"
                      icon={<IconHelp />}
                      label="No Bleed"
                      id="bleed-2"
                    />
                  </Inline>
                </Box>
              </Box>
            </Stack>
          </Stack>,
        ),
    },
  ],
};

export default docs;
