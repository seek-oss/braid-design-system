import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Tag, Inline, Text, TextLinkButton, IconTag } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      background: 'surface',
      Example: () => source(<Tag>Tag</Tag>),
    },
    {
      label: 'Small',
      background: 'surface',
      Example: () => source(<Tag size="small">Tag</Tag>),
    },
    {
      label: 'With an icon',
      background: 'surface',
      Example: () => source(<Tag icon={<IconTag />}>Tag</Tag>),
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
  ],
};
