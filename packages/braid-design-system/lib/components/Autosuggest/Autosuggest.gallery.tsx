import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Autosuggest, filterSuggestions, IconSearch } from '../';
import { makeSuggestions } from './Autosuggest.docs';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard suggestions',
    Example: ({ id, setDefaultState, getState, setState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}
          {setDefaultState('showRecent', true)}

          <Autosuggest
            label="I like to eat"
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
            suggestions={filterSuggestions([
              ...(getState('showRecent') && getState('value').text === ''
                ? [
                    {
                      text: 'Apples',
                      onClear: () => setState('showRecent', false),
                    },
                  ]
                : []),
              ...makeSuggestions([
                ...(getState('value').text !== '' ? ['Apples'] : []),
                'Bananas',
                'Broccoli',
                'Carrots',
              ]),
            ])}
          />
        </>,
      ),
  },
  {
    label: 'Grouped suggestions',
    Example: ({ id, getState, setState, setDefaultState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}

          <Autosuggest
            label="I like to eat"
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
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
        </>,
      ),
  },
  {
    label: 'Standard suggestions with descriptions',
    Example: ({ id, setDefaultState, getState, setState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}
          {setDefaultState('showRecent', true)}

          <Autosuggest
            label="I like to eat"
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
            suggestions={filterSuggestions([
              ...(getState('showRecent') && getState('value').text === ''
                ? [
                    {
                      text: 'Apples',
                      description: 'Juicy and delicious',
                      onClear: () => setState('showRecent', false),
                    },
                  ]
                : []),
              ...makeSuggestions([
                ...(getState('value').text !== ''
                  ? [{ text: 'Apples', description: 'Juicy and delicious' }]
                  : []),
                { text: 'Bananas', description: 'High in potassium' },
                { text: 'Broccoli', description: 'Looks like a tree' },
                { text: 'Carrots', description: 'Orange and crunchy' },
              ]),
            ])}
          />
        </>,
      ),
  },
  {
    label: 'Grouped suggestions with descriptions',
    Example: ({ id, getState, setState, setDefaultState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}

          <Autosuggest
            label="I like to eat"
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
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
        </>,
      ),
  },
  {
    label: 'Standard suggestions with an icon',
    Example: ({ id, getState, setState, setDefaultState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}

          <Autosuggest
            label="I like to eat"
            icon={<IconSearch />}
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        </>,
      ),
  },
  {
    label: 'With a critical message',
    Example: ({ id, getState, setState, setDefaultState, resetState }) =>
      source(
        <>
          {setDefaultState('value', { text: '' })}

          <Autosuggest
            label="I like to eat"
            id={id}
            value={getState('value')}
            onChange={setState('value')}
            onClear={() => resetState('value')}
            tone="critical"
            message="You must make a selection"
            suggestions={filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            )}
          />
        </>,
      ),
  },
];
