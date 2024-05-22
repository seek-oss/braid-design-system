import React from 'react';
import type { ComponentDocs } from 'site/types';
import {
  Card,
  Inline,
  Tag,
  Strong,
  Text,
  TextLinkButton,
  Stack,
  IconLanguage,
  IconTag,
} from '../';
import source from '@braid-design-system/source.macro';

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
      label: 'Sizes',
      background: 'surface',
      description: (
        <>
          <Text>
            You can customise the size of the tag via the <Strong>size</Strong>{' '}
            prop, which accepts either <Strong>standard</Strong> or{' '}
            <Strong>small</Strong>.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                STANDARD
              </Text>
              <Inline space="small" alignY="center">
                <Tag>One</Tag>
                <Tag>Two</Tag>
                <Tag>Three</Tag>
              </Inline>
            </Stack>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                SMALL
              </Text>
              <Inline space="xsmall" alignY="center">
                <Tag size="small">One</Tag>
                <Tag size="small">Two</Tag>
                <Tag size="small">Three</Tag>
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
  ],
};

export default docs;
