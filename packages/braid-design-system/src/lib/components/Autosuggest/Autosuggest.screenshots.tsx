import { type ReactNode, useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Autosuggest, filterSuggestions, IconSearch, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

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
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });
        const [showRecent, setShowRecent] = useState(true);

        return (
          <Autosuggest
            label="I like to eat"
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
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            automaticSelection
            label="I like to eat"
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
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
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
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
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
      label: 'Critical tone',
      Container,
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
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
      label: 'Caution tone',
      Container,
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            label="I like to eat"
            value={value}
            onChange={setValue}
            onClear={() => setValue({ text: '' })}
            tone="caution"
            message="Caution message"
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
      Example: ({ handler }) => (
        <Stack space="gutter">
          <Autosuggest
            label="With no value or placeholder"
            value={{ text: '' }}
            disabled={true}
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With value and no placeholder"
            value={{ text: 'Text value' }}
            disabled={true}
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With no value and a placeholder"
            value={{ text: '' }}
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With value and a placeholder"
            value={{ text: 'Text value' }}
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With critical tone"
            value={{ text: '' }}
            disabled={true}
            tone="critical"
            onChange={handler}
            suggestions={[]}
          />
          <Autosuggest
            label="With critical tone and message"
            value={{ text: '' }}
            disabled={true}
            tone="critical"
            message="Message"
            onChange={handler}
            suggestions={[]}
          />
        </Stack>
      ),
    },
    {
      label: 'Autosuggest with no visual label',
      Container,
      Example: () => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Autosuggest
            aria-label="I like to eat"
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
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <Autosuggest
            label="I like to eat"
            value={{ text: '' }}
            onChange={handler}
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        </BackgroundContrastTest>
      ),
    },
  ],
};
