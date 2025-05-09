import { type ReactNode, useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Heading, Strong, Text, TextDropdown } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: () => {
        const [value, setValue] = useState('Developer');

        return (
          <Text>
            <TextDropdown
              label="Job Title"
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
      Example: () => {
        const [value, setValue] = useState(2000);

        return (
          <Text>
            <TextDropdown
              label="Location"
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
      Example: () => {
        const [value, setValue] = useState('Relevance');

        return (
          <Text>
            Sort by{' '}
            <Strong>
              <TextDropdown
                label="Sort order"
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
      label: 'Virtual touch target',
      Container,
      Example: () => {
        const [value, setValue] = useState('Relevance');

        return (
          <Text data={{ [debugTouchableAttrForDataProp]: '' }}>
            Sort by{' '}
            <TextDropdown
              label="Sort order"
              onChange={setValue}
              value={value}
              options={['Relevance', 'Keyword']}
            />
          </Text>
        );
      },
    },
    {
      label: 'Within a heading',
      Container,
      Example: () => {
        const [value, setValue] = useState('Sydney');

        return (
          <Heading level="2">
            Jobs in{' '}
            <TextDropdown
              label="Location"
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
      Example: () => {
        const [value, setValue] = useState('Designer');

        return (
          <Text>
            <TextDropdown
              label="Job Title"
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
