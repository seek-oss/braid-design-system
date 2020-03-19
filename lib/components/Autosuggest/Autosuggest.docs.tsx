import * as React from 'react';
import { useState, ReactNode } from 'react';
import matchHighlights from 'autosuggest-highlight/match';
import { ComponentDocs } from '../../../site/src/types';
import { Autosuggest, Box, IconSearch, IconLocation } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const makeSuggestions = (
  labels: string[],
  inputValue: string,
  initialValue = 0,
) =>
  labels
    .filter(text => !inputValue || matchHighlights(text, inputValue).length)
    .map((text, i) => ({
      text,
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
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
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
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Box background="brand" padding="small">
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
          </Box>
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
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
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
        <Autosuggest
          label="I like to eat"
          id="grouped"
          value={{ text: '' }}
          onChange={() => {}}
          onClear={() => {}}
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
        <Autosuggest
          showMobileBackdrop
          id="mobile"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
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
        <Autosuggest
          label="I like to eat"
          id="error"
          value={{ text: '' }}
          onChange={() => {}}
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
        <Autosuggest
          label="Fruit"
          id="error"
          value={{ text: '' }}
          onChange={() => {}}
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
        <Autosuggest
          id="location"
          icon={<IconLocation />}
          placeholder="Enter a location"
          value={{ text: '' }}
          onChange={() => {}}
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
