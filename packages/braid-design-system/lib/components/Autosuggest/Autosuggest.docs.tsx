import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import source from '../../utils/source.macro';
import {
  Autosuggest,
  filterSuggestions,
  TextLink,
  Text,
  Strong,
  Box,
  Alert,
  List,
  Stack,
} from '../';
import { IconHelp, IconLanguage } from '../icons';

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
          label="Label"
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
      label: 'Additional labels',
      description: (
        <>
          <Text>
            Supports all three levels of{' '}
            <TextLink href="/components/FieldLabel">FieldLabel</TextLink>:
          </Text>
          <List>
            <Text>
              <Strong>label</Strong> — primary title of the field,
            </Text>
            <Text>
              <Strong>secondaryLabel</Strong> — additional context, typically
              used to indicate optionality of a field,
            </Text>
            <Text>
              <Strong>tertiaryLabel</Strong> — further context, typically used
              for providing assistance with a field.
            </Text>
          </List>
        </>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              label="Label"
              secondaryLabel="optional"
              tertiaryLabel={
                <TextLink href="#">
                  <IconHelp /> Help
                </TextLink>
              }
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
      label: 'Message and tone',
      description: (
        <>
          <Text>
            A <Strong>message</Strong> is typically used to communicate the
            status of a field, such as an error message. This will be announced
            on focus of the field and can be combined with a{' '}
            <TextLink href="/foundations/tones">tone</TextLink> to illustrate
            its purpose.
          </Text>
          <Text>
            The supported tones are: <Strong>{'"critical"'}</Strong>,{' '}
            <Strong>{'"positive"'}</Strong>, and <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value1', { text: '' })}
            {setDefaultState('value2', { text: '' })}
            {setDefaultState('value3', { text: '' })}

            <Stack space="large">
              <Autosuggest
                label="Label"
                id={`${id}_1`}
                value={getState('value1')}
                onChange={setState('value1')}
                onClear={() => resetState('value1')}
                suggestions={filterSuggestions([
                  { text: 'Apples', value: 1 },
                  { text: 'Bananas', value: 2 },
                  { text: 'Broccoli', value: 3 },
                  { text: 'Carrots', value: 4 },
                ])}
                tone="critical"
                message="Critical message"
              />
              <Autosuggest
                label="Label"
                id={`${id}_2`}
                value={getState('value2')}
                onChange={setState('value2')}
                onClear={() => resetState('value2')}
                suggestions={filterSuggestions([
                  { text: 'Apples', value: 1 },
                  { text: 'Bananas', value: 2 },
                  { text: 'Broccoli', value: 3 },
                  { text: 'Carrots', value: 4 },
                ])}
                tone="positive"
                message="Positive message"
              />
              <Autosuggest
                label="Label"
                id={`${id}_3`}
                value={getState('value3')}
                onChange={setState('value3')}
                onClear={() => resetState('value3')}
                suggestions={filterSuggestions([
                  { text: 'Apples', value: 1 },
                  { text: 'Bananas', value: 2 },
                  { text: 'Broccoli', value: 3 },
                  { text: 'Carrots', value: 4 },
                ])}
                tone="neutral"
                message="Neutral message"
              />
            </Stack>
          </>,
        ),
    },
    {
      label: 'Field description',
      description: (
        <Text>
          Additional context can be provided with a <Strong>description</Strong>
          . This will display below the field label and also be announced by a
          screen reader when the field is focused.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              label="Label"
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
              description="Extra information about the field"
            />
          </>,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          Mark the field as disabled by passing <Strong>true</Strong> to the{' '}
          <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: 'Text in disabled field' })}

            <Autosuggest
              label="Label"
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
              disabled={true}
            />
          </>,
        ),
    },
    {
      label: 'Placeholder prompt',
      description: (
        <Text>
          Providing a <Strong>placeholder</Strong> will display as a prompt to
          the user when no value is selected.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, setState, resetState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              label="Label"
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
              placeholder="Enter text"
            />
          </>,
        ),
    },
    {
      label: 'Clearing the field',
      description: (
        <>
          <Text>
            A <TextLink href="/components/IconClear">clear icon</TextLink>{' '}
            button will appear in the field when the user has entered text. You
            must pass a function to the <Strong>onClear</Strong> prop, which
            will be called when the button is clicked.
          </Text>

          <Text tone="promote" id="translate-field">
            <IconLanguage title="Translation hint" titleId="translate-field" />{' '}
            The <Strong>aria-label</Strong> for the clear button can be
            customised by providing a <Strong>clearLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState, resetState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('value', { text: '' })}

            <Autosuggest
              label="Label"
              id={id}
              value={getState('value')}
              onChange={setState('value')}
              onClear={() => resetState('value')}
              clearLabel="Clear field"
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
              label="Label"
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
              label="Label"
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
              label="Label"
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
        <>
          <Text>
            Suggestion items can be made clearable using the{' '}
            <Strong>onClear</Strong> property on suggestion objects. This is
            particularly useful for giving users the ability to clear recent
            entries.
          </Text>

          <Text tone="promote" id="translate-suggestion">
            <IconLanguage
              title="Translation hint"
              titleId="translate-suggestion"
            />{' '}
            The <Strong>aria-label</Strong> for the clear suggestion button can
            be customised by providing a <Strong>clearLabel</Strong> in the
            suggestion object.
          </Text>
        </>
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
              label="Label"
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
                    clearLabel: 'Remove Apples',
                  },
                  {
                    text: 'Bananas',
                    value: 2,
                    onClear: () => toggleState('Bananas'),
                    clearLabel: 'Remove Bananas',
                  },
                  {
                    text: 'Broccoli',
                    value: 3,
                    onClear: () => toggleState('Broccoli'),
                    clearLabel: 'Remove Broccoli',
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
                label="Label"
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
              label="Label"
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
