import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import {
  Autosuggest,
  filterSuggestions,
  TextLink,
  Text,
  Strong,
  Box,
  Alert,
} from '../';

export const makeSuggestions = (
  suggestions: Array<string | { text: string; description?: string }>,
  initialValue = 0,
) =>
  suggestions.map((suggestion, i) => ({
    ...(typeof suggestion === 'string' ? { text: suggestion } : suggestion),
    value: i + initialValue,
  }));

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, setDefaultState, getState, setState, resetState }) =>
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
            { text: 'Apples', value: 1 },
            { text: 'Bananas', value: 2 },
            { text: 'Broccoli', value: 3 },
            { text: 'Carrots', value: 4 },
          ])}
        />
      </>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-1.2/#combobox">
        WAI-ARIA Combobox Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    { name: 'Dropdown', description: 'For smaller lists.' },
    { name: 'TextField', description: 'For free text.' },
  ],
  additional: [
    {
      label: 'Client-side filtering',
      description: (
        <>
          <Text>
            The logic for filtering suggestions typically lives on the server
            rather than the client because it’s impractical to send all possible
            suggestions over the network. However, when prototyping in Playroom
            or working with smaller datasets, you may want to perform this
            filtering on the client instead. For this case, we provide a{' '}
            <Strong>filterSuggestions</Strong> function to make this as painless
            as possible.
          </Text>
          <Alert tone="info">
            <Text>
              All examples on this page use the{' '}
              <Strong>filterSuggestions</Strong> function to demonstrate
              real-world filtering behaviour, but this can be safely omitted if
              the filtering is being performed server-side.
            </Text>
          </Alert>
        </>
      ),
    },
    {
      label: 'Automatic selection',
      description: (
        <>
          <Text>
            You can automatically select the first suggestion when blurring the
            field using the <Strong>automaticSelection</Strong> prop. Note that
            this only occurs when text has been entered into the field to
            prevent irrelevant suggestions being selected.
          </Text>
          <Text>
            This is designed for scenarios where you’re effectively selecting an
            item from a list rather than entering free text, e.g. selecting a
            location.
          </Text>
        </>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              automaticSelection
              label="I like to eat"
              id={id}
              value={getState('value')}
              onChange={setState('value')}
              onClear={() => resetState('value')}
              suggestions={filterSuggestions([
                { text: 'Apples', value: 1 },
                { text: 'Bananas', value: 2 },
                { text: 'Broccoli', value: 3 },
                { text: 'Carrots', value: 4 },
              ])}
            />
          </>,
        ),
    },
    {
      label: 'Grouped suggestions',
      description: (
        <Text>Suggestion items can optionally be nested into groups.</Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
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
                  suggestions: [
                    {
                      text: 'Apples',
                      value: 1,
                    },
                    {
                      text: 'Bananas',
                      value: 2,
                    },
                  ],
                },
                {
                  label: 'Vegetables',
                  suggestions: [
                    {
                      text: 'Broccoli',
                      value: 3,
                    },
                    {
                      text: 'Carrots',
                      value: 4,
                    },
                  ],
                },
              ])}
            />
          </>,
        ),
    },
    {
      label: 'Suggestion descriptions',
      description: (
        <Text>Suggestion items can optionally contain a description.</Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
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
                  text: 'Apples',
                  description: 'Juicy and delicious',
                  value: 1,
                },
                {
                  text: 'Bananas',
                  description: 'High in potassium',
                  value: 2,
                },
                {
                  text: 'Broccoli',
                  description: 'Looks like a tree',
                  value: 3,
                },
                {
                  text: 'Carrots',
                  description: 'Orange and crunchy',
                  value: 4,
                },
              ])}
            />
          </>,
        ),
    },
    {
      label: 'Clearable suggestions',
      description: (
        <Text>
          Suggestion items can be made clearable using the{' '}
          <Strong>onClear</Strong> property on suggestion objects. This is
          particularly useful for giving users the ability to clear recent
          entries.
        </Text>
      ),
      Example: ({
        id,
        setDefaultState,
        getState,
        setState,
        resetState,
        toggleState,
      }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            {setDefaultState('Apples', true)}
            {setDefaultState('Bananas', true)}
            {setDefaultState('Broccoli', true)}

            <Autosuggest
              label="I like to eat"
              id={id}
              value={getState('value')}
              onChange={setState('value')}
              onClear={() => resetState('value')}
              suggestions={filterSuggestions(
                [
                  {
                    text: 'Apples',
                    value: 1,
                    onClear: () => toggleState('Apples'),
                  },
                  {
                    text: 'Bananas',
                    value: 2,
                    onClear: () => toggleState('Bananas'),
                  },
                  {
                    text: 'Broccoli',
                    value: 3,
                    onClear: () => toggleState('Broccoli'),
                  },
                ].filter((suggestion) => getState(suggestion.text)),
              )}
            />
          </>,
        ),
    },
    {
      label: 'Mobile support',
      description: (
        <>
          <Text>
            You can optionally display an overlay behind the field on mobile
            using the <Strong>showMobileBackdrop</Strong> prop. Note that, for
            this visual style to work, the field needs to be on a dark
            background.
          </Text>
          <Text>
            You can also scroll the field to the top of the viewport on focus
            using the <Strong>scrollToTopOnMobile</Strong> prop.
          </Text>
        </>
      ),
      background: 'brand',
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Box height="full" background="brand">
              <Autosuggest
                showMobileBackdrop
                scrollToTopOnMobile
                label="I like to eat"
                id={id}
                value={getState('value')}
                onChange={setState('value')}
                onClear={() => resetState('value')}
                suggestions={filterSuggestions([
                  {
                    text: 'Apples',
                    value: 1,
                  },
                  {
                    text: 'Bananas',
                    value: 2,
                  },
                  {
                    text: 'Broccoli',
                    value: 3,
                  },
                  {
                    text: 'Carrots',
                    value: 4,
                  },
                ])}
              />
            </Box>
          </>,
        ),
    },
    {
      label: 'Messaging when no suggestions are available',
      description: (
        <>
          <Text>
            If no suggestions are available and you’d like to provide messaging
            to the user, you can provide an object with a{' '}
            <Strong>message</Strong> property to the{' '}
            <Strong>suggestions</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              showMobileBackdrop
              scrollToTopOnMobile
              label="I like to eat"
              id={id}
              value={getState('value')}
              onChange={setState('value')}
              onClear={() => resetState('value')}
              suggestions={(value) => {
                const filteredSuggestions = filterSuggestions(
                  [
                    {
                      text: 'Apples',
                      value: 1,
                    },
                    {
                      text: 'Bananas',
                      value: 2,
                    },
                    {
                      text: 'Broccoli',
                      value: 3,
                    },
                    {
                      text: 'Carrots',
                      value: 4,
                    },
                  ],
                  value,
                );

                return filteredSuggestions.length > 0
                  ? filteredSuggestions
                  : { message: 'No results found.' };
              }}
            />
          </>,
        ),
    },
  ],
};

export default docs;
