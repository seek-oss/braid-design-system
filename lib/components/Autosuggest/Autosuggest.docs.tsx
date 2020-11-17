import React, { useState, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Autosuggest,
  filterSuggestions,
  IconSearch,
  TextLink,
  Text,
  Strong,
} from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const makeSuggestions = (
  suggestions: Array<string | { text: string; description?: string }>,
  initialValue = 0,
) =>
  suggestions.map((suggestion, i) => ({
    ...(typeof suggestion === 'string' ? { text: suggestion } : suggestion),
    value: i + initialValue,
  }));

interface Value {
  text: string;
  value?: number;
}

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  description: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-1.2/#combobox">
        WAI-ARIA Combobox Pattern.
      </TextLink>
    </Text>
  ),
  examples: [
    {
      label: 'Standard suggestions',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });
        const [showRecent, setShowRecent] = useState(true);

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions([
              ...(showRecent && value.text === ''
                ? [
                    {
                      text: 'Apples',
                      onClear: () => setShowRecent(false),
                    },
                  ]
                : []),
              ...makeSuggestions([
                ...(value.text !== '' ? ['Apples'] : []),
                'Bananas',
                'Broccoli',
                'Carrots',
              ]),
            ])}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with automatic selection',
      gallery: false,
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            automaticSelection
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        );
      },
    },
    {
      label: 'Grouped suggestions',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions([
              {
                label: 'Fruit',
                suggestions: makeSuggestions(['Apples', 'Bananas']),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(['Broccoli', 'Carrots'], 2),
              },
            ])}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with descriptions',
      storybook: false,
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });
        const [showRecent, setShowRecent] = useState(true);

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions([
              ...(showRecent && value.text === ''
                ? [
                    {
                      text: 'Apples',
                      description: 'Juicy and delicious',
                      onClear: () => setShowRecent(false),
                    },
                  ]
                : []),
              ...makeSuggestions([
                ...(value.text !== ''
                  ? [{ text: 'Apples', description: 'Juicy and delicious' }]
                  : []),
                { text: 'Bananas', description: 'High in potassium' },
                { text: 'Broccoli', description: 'Looks like a tree' },
                { text: 'Carrots', description: 'Orange and crunchy' },
              ]),
            ])}
          />
        );
      },
    },
    {
      label: 'Grouped suggestions with descriptions',
      storybook: false,
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions([
              {
                label: 'Fruit',
                suggestions: makeSuggestions([
                  { text: 'Apples', description: 'Juicy and delicious' },
                  { text: 'Bananas', description: 'High in potassium' },
                ]),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(
                  [
                    { text: 'Broccoli', description: 'Looks like a tree' },
                    { text: 'Carrots', description: 'Orange and crunchy' },
                  ],
                  2,
                ),
              },
            ])}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with an icon',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            icon={<IconSearch />}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with brand background and mobile backdrop',
      storybook: false,
      gallery: false,
      Container,
      background: 'brand',
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            showMobileBackdrop
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        );
      },
    },
    {
      label: 'Autosuggest with error',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
            id={id}
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            tone="critical"
            message="You must make a selection"
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        );
      },
    },
    {
      label: 'Client-side filtering of suggestions',
      description: (
        <Text>
          The logic for filtering suggestions typically lives on the server
          rather than the client because it’s impractical to send all possible
          suggestions over the network. However, when prototyping in Playroom or
          working with smaller datasets, you may want to perform this filtering
          on the client instead. For this case, we provide a{' '}
          <Strong>filterSuggestions</Strong> function to make this as painless
          as possible.
        </Text>
      ),
      code: `
        <Autosuggest
          label="I like to eat"
          suggestions={filterSuggestions([
            { text: 'Apples', value: 1 },
            { text: 'Bananas', value: 2 }
          ])} />
      `,
    },
  ],
};

export default docs;
