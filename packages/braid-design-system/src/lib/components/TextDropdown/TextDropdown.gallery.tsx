import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import { Heading, Strong, Text, TextDropdown } from '..';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ id, setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textdropdown', 'Option 1')}

            <Text>
              <TextDropdown
                label="Options"
                id={id}
                value={getState('textdropdown')}
                onChange={setState('textdropdown')}
                options={['Option 1', 'Option 2', 'Option 3']}
              />
            </Text>
          </>,
        ),
    },
    {
      label: 'Emphasised within a sentence',
      Example: ({ id, setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('sortby', 'Relevance')}

            <Text>
              Sort by{' '}
              <Strong>
                <TextDropdown
                  label="Sort by"
                  id={id}
                  value={getState('sortby')}
                  onChange={setState('sortby')}
                  options={['Relevance', 'Date', 'Keyword']}
                />
              </Strong>
            </Text>
          </>,
        ),
    },
    {
      label: 'Within a heading',
      Example: ({ id, setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textdropdown', 'Option 1')}

            <Heading level="2">
              Heading with{' '}
              <TextDropdown
                label="Options"
                id={id}
                value={getState('textdropdown')}
                onChange={setState('textdropdown')}
                options={['Option 1', 'Option 2', 'Option 3']}
              />
            </Heading>
          </>,
        ),
    },
  ],
};
