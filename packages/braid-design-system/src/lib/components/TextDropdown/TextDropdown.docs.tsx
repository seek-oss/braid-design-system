import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { Stack, Strong, Text, TextLink, TextDropdown, Notice } from '..';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ setState, getState, setDefaultState }) =>
    source(
      <>
        {setDefaultState('textdropdown', 'Option 1')}

        <Text>
          <TextDropdown
            label="Options"
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
          <Notice tone="info">
            <Text>This component is not designed for usage within forms.</Text>
          </Notice>
          <Text>
            Text styles are inherited from the parent typographic component,
            meaning that it <Strong>must</Strong> be within either a{' '}
            <TextLink href="/components/Text">Text</TextLink> or{' '}
            <TextLink href="/components/Heading">Heading</TextLink>. This also
            allows you to change the weight, size and tone of the dropdown.
          </Text>
        </>
      ),
      Example: ({ setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('sortby', 'Relevance')}

            <Text>
              Sort by{' '}
              <Strong>
                <TextDropdown
                  label="Sort by"
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
          The <Strong>options</Strong> prop also supports complex values where
          the display text differs from the field value. In this case, each
          option is an object containing both <Strong>text</Strong> and{' '}
          <Strong>value</Strong> properties.
        </Text>
      ),
      Example: ({ setState, getState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textdropdown', 200)}

            <Stack space="large">
              <Text>
                <TextDropdown
                  label="Options"
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
    dataAttributeDocs({
      code: `
        <TextDropdown
          data={{ testid: 'text-dropdown-1' }}
        >
          ...
        </TextDropdown>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
