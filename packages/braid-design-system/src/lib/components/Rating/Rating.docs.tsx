import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { Rating, Stack, Inline, Text, Strong, TextLink, Notice } from '../';
import { IconLanguage } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () => source(<Rating size="large" rating={3} />),
  accessibility: (
    <>
      <Text>
        To support users with screen readers, an <Strong>aria-label</Strong> is
        used to provider a description of the rating.
      </Text>

      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        <Strong>aria-label</Strong> can be customised by providing the{' '}
        <Strong>aria-label</Strong> prop.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Variants',
      description: (
        <Text>
          The appearance can be customised via the <Strong>variant</Strong>{' '}
          prop, choosing from <Strong>full</Strong> (default),{' '}
          <Strong>starsOnly</Strong> or <Strong>minimal</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Default
              </Text>
              <Rating size="large" rating={4.2} />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Stars only
              </Text>
              <Rating size="large" rating={4.2} variant="starsOnly" />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Minimal
              </Text>
              <Rating size="large" rating={4.2} variant="minimal" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Sizing',
      description: (
        <Text>
          Follows the same sizing rules as the{' '}
          <TextLink href="/components/Text">Text</TextLink> component.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="small">
              <Rating size="large" rating={3} />
              <Text tone="secondary" size="large">
                large
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="standard" rating={3} />
              <Text tone="secondary" size="standard">
                standard
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="small" rating={3} />
              <Text tone="secondary" size="small">
                small
              </Text>
            </Inline>
            <Inline space="small">
              <Rating size="xsmall" rating={3} />
              <Text tone="secondary" size="xsmall">
                xsmall
              </Text>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Weight',
      description: (
        <>
          <Text>
            Supports the same weight scale available on the{' '}
            <TextLink href="/components/Text">Text</TextLink> component.
          </Text>
          <Notice>
            <Text>
              Note: Setting the <Strong>weight</Strong> prop is only valid when
              using a <Strong>variant</Strong> that displays the text rating.
            </Text>
          </Notice>
        </>
      ),
      Example: () =>
        source(
          <Stack space="gutter">
            <Inline space="small">
              <Rating weight="regular" rating={3} />
              <Text tone="secondary" weight="regular">
                regular
              </Text>
            </Inline>
            <Inline space="small">
              <Rating weight="medium" rating={3} />
              <Text tone="secondary" weight="medium">
                medium
              </Text>
            </Inline>
            <Inline space="small">
              <Rating weight="strong" rating={3} />
              <Text tone="secondary" weight="strong">
                strong
              </Text>
            </Inline>
          </Stack>,
        ),
    },
  ],
};

export default docs;
