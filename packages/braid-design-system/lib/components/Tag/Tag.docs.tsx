import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import { Card, Inline, Tag, Strong, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';
import { IconLanguage, IconPromote } from '../icons';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
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
            <Tag icon={<IconPromote />}>One</Tag>
            <Tag icon={<IconPromote />}>Two</Tag>
            <Tag icon={<IconPromote />}>Three</Tag>
          </Inline>,
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
