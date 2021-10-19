import type { ReactNode } from 'react';
import React, { useState } from 'react';
import type { ComponentScreenshot } from '../../../site/src/types';
import { Autosuggest, filterSuggestions, IconSearch } from '../';

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
