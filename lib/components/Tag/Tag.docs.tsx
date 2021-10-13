import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Card, Inline, Tag, Strong, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';

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
      label: 'Clearable',
      description: (
        <Text>
          Tags can be made clearable, by providing an <Strong>onClear</Strong>{' '}
          handler and a <Strong>clearLabel</Strong> to describe what clicking it
          will do.
        </Text>
      ),
      background: 'card',
      Example: ({ getState, setState, toggleState }) =>
        source(
          <Inline space="small" alignY="center">
            {!getState('clearOne') ? (
              <Tag
                onClear={() => toggleState('clearOne')}
                clearLabel={'Clear "One"'}
              >
                One
              </Tag>
            ) : null}
            {!getState('clearTwo') ? (
              <Tag
                onClear={() => toggleState('clearTwo')}
                clearLabel={'Clear "Two"'}
              >
                Two
              </Tag>
            ) : null}
            {!getState('clearThree') ? (
              <Tag
                onClear={() => toggleState('clearThree')}
                clearLabel={'Clear "Three"'}
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
