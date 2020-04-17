import React, { ReactNode, useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Heading, Stack, Strong, Text, TextLink, TextDropdown } from '..';
import { TextDropdown as PlayroomTextDropdown } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  description: (
    <Stack space="large">
      <Text>
        An inline dropdown that can be used as part of a sentence or as an
        alternative to <TextLink href="/components/Dropdown">Dropdown</TextLink>
        , outside of a more structured form.
      </Text>

      <Text>
        Inherits its styling from the parent typographic component, and as such
        must be used nested within either a{' '}
        <TextLink href="/components/Text">Text</TextLink> or{' '}
        <TextLink href="/components/Heading">Heading</TextLink>.
      </Text>

      <Text>
        Provides consumers the flexibility to change the weight or size to suit
        the surrounding experience.
      </Text>
    </Stack>
  ),
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Developer');

        return (
          <Text>
            <TextDropdown
              label="Job Title"
              id={id}
              onChange={setValue}
              value={value}
              options={['Developer', 'Designer', 'Product Manager']}
            />
          </Text>
        );
      },
    },
    {
      label: 'With identifying values',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(2000);

        return (
          <Text>
            <TextDropdown
              label="Location"
              id={id}
              onChange={setValue}
              value={value}
              options={[
                { text: 'Melbourne', value: 3000 },
                { text: 'Sydney', value: 2000 },
                { text: 'Brisbane', value: 4000 },
              ]}
            />
          </Text>
        );
      },
    },
    {
      label: 'With a strong weight along side text',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Relevance');

        return (
          <Text>
            Sort by{' '}
            <Strong>
              <TextDropdown
                label="Sort order"
                id={id}
                onChange={setValue}
                value={value}
                options={['Relevance', 'Keyword']}
              />
            </Strong>
          </Text>
        );
      },
    },
    {
      label: 'Within a heading',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Sydney');

        return (
          <Heading level="2">
            Jobs in{' '}
            <TextDropdown
              label="Location"
              id={id}
              onChange={setValue}
              value={value}
              options={['Melbourne', 'Sydney', 'Brisbane']}
            />
          </Heading>
        );
      },
    },
    {
      label: 'TextDropdown on Brand Background',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Designer');

        return (
          <Box background="brand" padding="small">
            <Text>
              <TextDropdown
                label="Job Title"
                id={id}
                onChange={setValue}
                value={value}
                options={['Developer', 'Designer', 'Product Manager']}
              />
            </Text>
          </Box>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <Text>
          <PlayroomTextDropdown
            label="Label"
            value="Option 1"
            options={['Option 1', 'Option 2', 'Option 3']}
          />
        </Text>
      ),
    },
    {
      name: 'Strong',
      code: (
        <Text>
          Sort by{' '}
          <Strong>
            <PlayroomTextDropdown
              label="Sort order"
              options={['Relevance', 'Keyword']}
            />
          </Strong>
        </Text>
      ),
    },
  ],
};

export default docs;
