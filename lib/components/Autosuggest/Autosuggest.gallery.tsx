import React, { ReactNode, useState } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Autosuggest, filterSuggestions, IconSearch } from '../';
import { makeSuggestions } from './Autosuggest.docs';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

interface Value {
  text: string;
  value?: number;
}

export const galleryItems: ComponentExample[] = [
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
    label: 'With a critical message',
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
];
