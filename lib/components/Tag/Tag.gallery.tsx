import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Tag, Inline, Text, TextLinkButton } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    background: 'card',
    Example: () => source(<Tag>Tag</Tag>),
  },
  {
    label: 'Clearable',
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
];
