import React, { ReactNode, useState } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Heading, Strong, Text, TextDropdown } from '..';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
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
      label: 'Within strong text',
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
      background: 'brand',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Designer');

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
  ],
};
