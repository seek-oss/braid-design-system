import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Tag, Inline, Text, TextLinkButton, IconPromote } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    background: 'surface',
    Example: () => source(<Tag>Tag</Tag>),
  },
  {
    label: 'With an icon',
    background: 'surface',
    Example: () => source(<Tag icon={<IconPromote />}>Tag</Tag>),
  },
  {
    label: 'Clearable',
    background: 'surface',
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
