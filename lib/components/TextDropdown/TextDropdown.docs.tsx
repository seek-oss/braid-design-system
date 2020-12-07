import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Stack, Strong, Text, TextLink, TextDropdown } from '..';
import source from '../../utils/source.macro';

const docs: ComponentDetail = {
  category: 'Content',
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
  alternatives: [
    {
      name: 'Dropdown',
      description: 'For selection lists within forms.',
    },
    { name: 'Autosuggest', description: 'For larger lists.' },
  ],
  additional: [
    {
      label: 'Design considerations',
      description: (
        <>
          <Text>
            An inline dropdown that can be used as part of a sentence or as an
            alternative to{' '}
            <TextLink href="/components/Dropdown">Dropdown</TextLink>, outside
            of a more structured form.
          </Text>
          <Text>
            The styling is inherited from the parent typographic component,
            meaning that a `TextDropdown` <Strong>must</Strong> be within either
            a <TextLink href="/components/Text">Text</TextLink> or{' '}
            <TextLink href="/components/Heading">Heading</TextLink>.
          </Text>
          <Text>
            This provides consumers with the flexibility to change the weight or
            size to suit the surrounding experience.
          </Text>
        </>
      ),
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
      label: 'Development considerations',
      description: (
        <Text>
          The <Strong>options</Strong> prop also supports complex values—where
          the display text differs from the field value. In this case each
          option is an object containing keys for both <Strong>text</Strong> and{' '}
          <Strong>value</Strong>.
        </Text>
      ),
      Example: ({ id, setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textdropdown', 200)}

            <Stack space="large">
              <Text>
                <TextDropdown
                  label="Options"
                  id={id}
                  value={getState('textdropdown')}
                  onChange={setState('textdropdown')}
                  options={[
                    { text: 'Option 1', value: 100 },
                    { text: 'Option 2', value: 200 },
                    { text: 'Option 3', value: 300 },
                  ]}
                />
              </Text>

              <Text
                size="small"
                tone="secondary"
              >{`// Selected value: ${getState('textdropdown')}`}</Text>
            </Stack>
          </>,
        ),
    },
  ],
};

export default docs;
