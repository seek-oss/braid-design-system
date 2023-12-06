import React from 'react';
import type { ComponentDocs } from 'site/types';
import {
  IconSearch,
  TextField,
  TextLink,
  Text,
  Strong,
  List,
  IconHelp,
  Stack,
  Heading,
  IconLanguage,
  TextDropdown,
} from '../';
import source from '@braid-design-system/source.macro';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, setState }) =>
    source(
      <TextField
        label="Label"
        id={id}
        onChange={setState('textfield')}
        value={getState('textfield')}
        onClear={() => setState('textfield', '')}
      />,
    ),
  alternatives: [
    { name: 'Autosuggest', description: 'For autocompletion.' },
    {
      name: 'PasswordField',
      description: 'For password input.',
    },
    { name: 'Textarea', description: 'For long-form text.' },
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
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#" icon={<IconHelp />}>
                Help
              </TextLink>
            }
          />,
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
            <Strong>{'"positive"'}</Strong>, <Strong>{'"caution"'}</Strong>, and{' '}
            <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <TextField
              label="Label"
              id={`${id}_1`}
              onChange={setState('textfield')}
              value={getState('textfield')}
              tone="critical"
              message="Critical message"
            />
            <TextField
              label="Label"
              id={`${id}_2`}
              onChange={setState('textfield2')}
              value={getState('textfield2')}
              tone="positive"
              message="Positive message"
            />
            <TextField
              label="Label"
              id={`${id}_3`}
              onChange={setState('textfield3')}
              value={getState('textfield3')}
              tone="caution"
              message="Caution message"
            />
            <TextField
              label="Label"
              id={`${id}_4`}
              onChange={setState('textfield4')}
              value={getState('textfield4')}
              tone="neutral"
              message="Neutral message"
            />
          </Stack>,
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
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            description="Extra information about the field"
          />,
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
      Example: ({ id, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value="Text in disabled field"
            disabled={true}
          />,
        ),
    },
    {
      label: 'Placeholder prompt',
      description: (
        <Text>
          Providing a <Strong>placeholder</Strong> will display as a prompt to
          the user when no value is entered.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            placeholder="Enter text"
          />,
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

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the clear button can be customised
            by providing a <Strong>clearLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('textfield', 'User entered text')}

            <TextField
              label="Label"
              id={id}
              value={getState('textfield')}
              onChange={setState('textfield')}
              onClear={() => setState('textfield', '')}
              clearLabel="Clear field"
            />
          </>,
        ),
    },
    {
      label: 'Inserting an icon',
      description: (
        <Text>
          For decoration and help distinguishing between fields, an{' '}
          <Strong>icon</Strong> can be provided. This will be placed to the left
          of the field and is not interactive.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            id={id}
            label="Label"
            onChange={setState('textfield')}
            value={getState('textfield')}
            icon={<IconSearch />}
            placeholder="Enter text"
          />,
        ),
    },
    {
      label: 'Adding a prefix',
      description: (
        <Text>
          The <Strong>prefix</Strong> prop allows you to prepend read-only
          content on the left-hand side of the field. This is typically used for
          currency symbols, country codes, etc.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <TextField
            id={id}
            label="Phone number"
            onChange={setState('textfield')}
            value={getState('textfield')}
            prefix="+61"
          />,
        ),
    },
    {
      label: 'Limiting the number of characters',
      description: (
        <>
          <Text>
            Providing a <Strong>characterLimit</Strong> will communicate when
            the input text approaches or exceeds the specified limit.
          </Text>
          <Text>
            To prevent loss of information, exceeding the limit is permitted,
            however the count will be presented in a critical tone.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState(
              'text',
              'A long piece of text exceeding the specified character limit of 50',
            )}

            <TextField
              label="Label"
              id={id}
              onChange={setState('text')}
              value={getState('text')}
              description="Character limit of 50"
              characterLimit={50}
            />
          </>,
        ),
    },
    {
      label: 'Tailoring the keyboard layout',
      description: (
        <>
          <Text>
            To improve the user experience when entering text on mobile devices,
            the keyboard layout can be tailored to suit its content using the{' '}
            <Strong>inputMode</Strong> prop.
          </Text>
          <Text>
            Choose from the built-in{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode">
              inputmodes
            </TextLink>
            , for example: <Strong>numeric</Strong>, <Strong>email</Strong>,{' '}
            <Strong>url</Strong>, etc. and the device will show the appropriate
            keyboard layout.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('inputmode', 'numeric')}
            <Stack space="large">
              <Text tone="secondary">
                Selected input mode:{' '}
                <Strong>
                  <TextDropdown
                    id={`${id}_mode`}
                    label="Input mode"
                    value={getState('inputmode')}
                    onChange={setState('inputmode')}
                    options={[
                      'text',
                      'email',
                      'search',
                      'numeric',
                      'decimal',
                      'tel',
                      'url',
                    ]}
                  />
                </Strong>
              </Text>
              <TextField
                id={id}
                label="Label"
                onChange={setState('textfield')}
                value={getState('textfield')}
                inputMode={getState('inputmode')}
              />
              <Text tone="secondary">
                Note: Keyboard change only visible on a mobile device
              </Text>
            </Stack>
          </>,
        ),
    },
    {
      label: 'Indirect or hidden field labels',
      description: (
        <Text>
          In some cases it may be necessary for a field to be labelled by
          another element or even not to have a visual label. Instead of
          providing a <Strong>label</Strong> either <Strong>aria-label</Strong>{' '}
          or <Strong>aria-labelledby</Strong> can be provided.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <Heading level="2" id="field1Label">
              Custom field label
            </Heading>
            <TextField
              aria-labelledby="field1Label"
              id={`${id}_1`}
              onChange={setState('text')}
              value={getState('text')}
              message="The label for this field is the Heading element before it."
            />

            <TextField
              aria-label="Hidden label for field"
              id={`${id}_2`}
              onChange={setState('text2')}
              value={getState('text2')}
              message="The label for this field is hidden."
            />
          </Stack>,
        ),
    },
  ],
};

export default docs;
