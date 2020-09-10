import React, { useState, ReactNode } from 'react';
import matchHighlights from 'autosuggest-highlight/match';
import { ComponentDocs } from '../../../site/src/types';
import { Autosuggest, IconSearch, IconLocation, TextLink, Text } from '../';
import { Autosuggest as PlayroomAutosuggest } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const makeSuggestions = (
  suggestions: Array<string | { text: string; description?: string }>,
  inputValue: string,
  initialValue = 0,
) =>
  suggestions
    .map((suggestion) =>
      typeof suggestion === 'string' ? { text: suggestion } : suggestion,
    )
    .filter(
      ({ text }) => !inputValue || matchHighlights(text, inputValue).length,
    )
    .map(({ text, description }, i) => ({
      text,
      description,
      value: i + initialValue,
      // @ts-ignore
      highlights: matchHighlights(text, inputValue).map(([start, end]) => ({
        start,
        end,
      })),
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
            suggestions={[
              ...(showRecent && value.text === ''
                ? [
                    {
                      text: 'Apples',
                      onClear: () => setShowRecent(false),
                    },
                  ]
                : []),
              ...makeSuggestions(
                [
                  ...(value.text !== '' ? ['Apples'] : []),
                  'Bananas',
                  'Broccoli',
                  'Carrots',
                ],
                value.text,
              ),
            ]}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with automatic selection',
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
            suggestions={makeSuggestions(
              ['Apples', 'Bananas', 'Broccoli', 'Carrots'],
              value.text,
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
            suggestions={[
              {
                label: 'Fruit',
                suggestions: makeSuggestions(['Apples', 'Bananas'], value.text),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(
                  ['Broccoli', 'Carrots'],
                  value.text,
                  2,
                ),
              },
            ]}
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
            suggestions={[
              ...(showRecent && value.text === ''
                ? [
                    {
                      text: 'Apples',
                      description: 'Juicy and delicious',
                      onClear: () => setShowRecent(false),
                    },
                  ]
                : []),
              ...makeSuggestions(
                [
                  ...(value.text !== ''
                    ? [{ text: 'Apples', description: 'Juicy and delicious' }]
                    : []),
                  { text: 'Bananas', description: 'High in potassium' },
                  { text: 'Broccoli', description: 'Looks like a tree' },
                  { text: 'Carrots', description: 'Orange and crunchy' },
                ],
                value.text,
              ),
            ]}
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
            suggestions={[
              {
                label: 'Fruit',
                suggestions: makeSuggestions(
                  [
                    { text: 'Apples', description: 'Juicy and delicious' },
                    { text: 'Bananas', description: 'High in potassium' },
                  ],
                  value.text,
                ),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(
                  [
                    { text: 'Broccoli', description: 'Looks like a tree' },
                    { text: 'Carrots', description: 'Orange and crunchy' },
                  ],
                  value.text,
                  2,
                ),
              },
            ]}
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
            suggestions={makeSuggestions(
              ['Apples', 'Bananas', 'Broccoli', 'Carrots'],
              value.text,
            )}
          />
        );
      },
    },
    {
      label: 'Standard suggestions with brand background and mobile backdrop',
      storybook: false,
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
            suggestions={makeSuggestions(
              ['Apples', 'Bananas', 'Broccoli', 'Carrots'],
              value.text,
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
            suggestions={makeSuggestions(
              ['Apples', 'Bananas', 'Broccoli', 'Carrots'],
              value.text,
            )}
          />
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <PlayroomAutosuggest
          id="fruit"
          label="Fruit"
          suggestions={[
            { text: 'Apples' },
            { text: 'Bananas' },
            { text: 'Carrots' },
          ]}
        />
      ),
    },
    {
      name: 'Grouped suggestions',
      code: (
        <PlayroomAutosuggest
          label="I like to eat"
          id="grouped"
          suggestions={[
            {
              label: 'Fruit',
              suggestions: [
                { text: 'Apples' },
                { text: 'Bananas' },
                { text: 'Carrots' },
              ],
            },
            {
              label: 'Vegetables',
              suggestions: [
                { text: 'Broccoli' },
                { text: 'Carrots' },
                { text: 'Carrots' },
              ],
            },
          ]}
        />
      ),
    },
    {
      name: 'With mobile backdrop',
      code: (
        <PlayroomAutosuggest
          showMobileBackdrop
          id="mobile"
          label="Fruit"
          suggestions={[
            { text: 'Apples' },
            { text: 'Bananas' },
            { text: 'Carrots' },
          ]}
        />
      ),
    },
    {
      name: 'With error',
      code: (
        <PlayroomAutosuggest
          label="I like to eat"
          id="error"
          tone="critical"
          message="You must make a selection"
          suggestions={[
            { text: 'Apples' },
            { text: 'Bananas' },
            { text: 'Carrots' },
          ]}
        />
      ),
    },
    {
      name: 'With description',
      code: (
        <PlayroomAutosuggest
          label="Fruit"
          id="error"
          description="Select your favourite fruit to eat from the available suggestions."
          suggestions={[
            { text: 'Apples' },
            { text: 'Bananas' },
            { text: 'Carrots' },
          ]}
        />
      ),
    },
    {
      name: 'With icon',
      code: (
        <PlayroomAutosuggest
          id="location"
          icon={<IconLocation />}
          placeholder="Enter a location"
          suggestions={[
            { text: 'Adelaide' },
            { text: 'Brisbane' },
            { text: 'Darwin' },
            { text: 'Hobart' },
            { text: 'Melbourne' },
            { text: 'Perth' },
            { text: 'Sydney' },
          ]}
        />
      ),
    },
  ],
};

export default docs;
