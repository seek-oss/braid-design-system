import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Card, Inline, Tag, Strong, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDetail = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card>
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
      Example: ({ getState, setState }) =>
        source(
          <Inline space="small" alignY="center">
            <Tag>One</Tag>
            {!getState('clearTwo') ? (
              <Tag
                onClear={() => setState('clearTwo', true)}
                clearLabel={'Clear "Two"'}
              >
                Two
              </Tag>
            ) : null}
            {!getState('clearThree') ? (
              <Tag
                onClear={() => setState('clearThree', true)}
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
