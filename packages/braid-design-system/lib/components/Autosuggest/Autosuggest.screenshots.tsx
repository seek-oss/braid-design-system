import React, { useState, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Autosuggest, filterSuggestions, IconSearch, Stack } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const makeSuggestions = (
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

export const screenshots: ComponentScreenshot = {
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
      label: 'Autosuggest when disabled',
      Container,
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <Autosuggest
            label="With no value or placeholder"
            id={`${id}_1`}
            value={{ text: '' }}
            disabled={true}
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With value and no placeholder"
            id={`${id}_2`}
            value={{ text: 'Text value' }}
            disabled={true}
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With no value and a placeholder"
            id={`${id}_3`}
            value={{ text: '' }}
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With value and a placeholder"
            id={`${id}_4`}
            value={{ text: 'Text value' }}
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
            suggestions={[]}
          />
        </Stack>
      ),
    },
    {
      label: 'Autosuggest with no visual label',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            aria-label="I like to eat"
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
  ],
};
