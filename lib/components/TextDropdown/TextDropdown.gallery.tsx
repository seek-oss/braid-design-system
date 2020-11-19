import React, { ReactNode, useState } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Heading, Strong, Text, TextDropdown } from '..';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const galleryItems: ComponentExample[] = [
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
];
