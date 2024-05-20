import React from 'react';
import type { ComponentDocs } from 'site/types';
import { Card, Inline, Tag, Strong, Text, TextLinkButton, Stack } from '../';
import source from '@braid-design-system/source.macro';
import { IconLanguage, IconTag } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Card rounded>
        <Inline space="small">
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </Inline>
      </Card>,
    ),
  alternatives: [{ name: 'Badge', description: 'For static labels.' }],
  additional: [
    {
      label: 'Inserting an icon',
      background: 'surface',
      description: (
        <>
          <Text>
            For decoration or help distinguishing between tags, an{' '}
            <Strong>icon</Strong> can be provided. This will be placed to the
            left of the text.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <Tag icon={<IconTag />}>One</Tag>
            <Tag icon={<IconTag />}>Two</Tag>
            <Tag icon={<IconTag />}>Three</Tag>
          </Inline>,
        ),
    },
    {
      label: 'Size',
      background: 'surface',
      description: (
        <>
          <Text>TBD</Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Inline space="small">
                <Tag>One</Tag>
                <Tag>Two</Tag>
                <Tag>Three</Tag>
              </Inline>
              <Inline space="small">
                <Tag icon={<IconTag />}>One</Tag>
                <Tag icon={<IconTag />}>Two</Tag>
                <Tag icon={<IconTag />}>Three</Tag>
              </Inline>
              <Inline space="small">
                <Tag icon={<IconTag />}>One</Tag>
                <Tag
                  clearLabel={'Clear "One"'}
                  onClear={() => {}}
                  icon={<IconTag />}
                >
                  Two
                </Tag>
                <Tag
                  clearLabel={'Clear "One"'}
                  onClear={() => {}}
                  icon={<IconTag />}
                >
                  Three
                </Tag>
              </Inline>
            </Stack>

            <Stack space="xsmall">
              <Inline space="xsmall">
                <Tag size="small">One</Tag>
                <Tag size="small">Two</Tag>
                <Tag size="small">Three</Tag>
              </Inline>
              <Inline space="xsmall">
                <Tag size="small" icon={<IconTag />}>
                  One
                </Tag>
                <Tag size="small" icon={<IconTag />}>
                  Two
                </Tag>
                <Tag size="small" icon={<IconTag />}>
                  Three
                </Tag>
              </Inline>
              <Inline space="xsmall">
                <Tag size="small" icon={<IconTag />}>
                  One
                </Tag>
                <Tag
                  size="small"
                  clearLabel={'Clear "One"'}
                  onClear={() => {}}
                  icon={<IconTag />}
                >
                  Two
                </Tag>
                <Tag
                  size="small"
                  clearLabel={'Clear "One"'}
                  onClear={() => {}}
                  icon={<IconTag />}
                >
                  Three
                </Tag>
              </Inline>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Clearable',
      description: (
        <>
          <Text>
            Tags can be made clearable, by providing an <Strong>onClear</Strong>{' '}
            handler and a <Strong>clearLabel</Strong> to describe what clicking
            it will do.
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the clear button can be customised
            by providing the <Strong>clearLabel</Strong> prop.
          </Text>
        </>
      ),
      background: 'surface',
      Example: ({ getState, setState, toggleState }) =>
        source(
          <Inline space="small" alignY="center">
            {!getState('clearOne') ? (
              <Tag
                onClear={() => toggleState('clearOne')}
                clearLabel={'Clear "One"'}
                id="clear-1"
              >
                One
              </Tag>
            ) : null}
            {!getState('clearTwo') ? (
              <Tag
                onClear={() => toggleState('clearTwo')}
                clearLabel={'Clear "Two"'}
                id="clear-2"
              >
                Two
              </Tag>
            ) : null}
            {!getState('clearThree') ? (
              <Tag
                onClear={() => toggleState('clearThree')}
                clearLabel={'Clear "Three"'}
                id="clear-3"
              >
                Three
              </Tag>
            ) : null}
            <Text tone="secondary">
              <TextLinkButton
                weight="weak"
                hitArea="large"
                onClick={() => {
                  setState('clearOne', false);
                  setState('clearTwo', false);
                  setState('clearThree', false);
                }}
              >
                Reset
              </TextLinkButton>
            </Text>
          </Inline>,
        ),
    },
  ],
};

export default docs;
