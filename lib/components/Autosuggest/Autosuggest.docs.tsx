import React, { useState, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Autosuggest } from './Autosuggest';
import matchHighlights from 'autosuggest-highlight/match';
import { Box } from '../Box/Box';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const makeSuggestions = (
  labels: string[],
  inputValue: string,
  initialValue: number = 0,
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
  migrationGuide: true,
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
      label: 'Standard suggestions with brand background and mobile backdrop',
      storybook: false,
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState<Value>({ text: '' });

        return (
          <Box background="brand" paddingX="small">
            <Autosuggest
              showMobileBackdrop
              label="I like to eat"
              id={id}
              value={value}
              onChange={setValue}
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
};

export default docs;
