import React from 'react';
import { ComponentDetails } from '../../../site/src/types';
import { List, PasswordField, Strong, Stack, Text, TextLink } from '../';
import source from '../../utils/source.macro';

const docs: ComponentDetails = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, setState }) =>
    source(
      <PasswordField
        label="Label"
        id={id}
        onChange={setState('password')}
        value={getState('password')}
      />,
    ),
  alternatives: [{ name: 'TextField', description: 'For free text.' }],
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
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('password')}
            value={getState('password')}
            secondaryLabel="optional"
            tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
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
            The supported tones are: <Strong>{'"critical"'}</Strong>,
            <Strong>{'"positive"'}</Strong>, and <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <PasswordField
              label="Label"
              id={`${id}_1`}
              onChange={setState('passwordfield')}
              value={getState('passwordfield')}
              tone="critical"
              message="Critical message"
            />
            <PasswordField
              label="Label"
              id={`${id}_2`}
              onChange={setState('passwordfield2')}
              value={getState('passwordfield2')}
              tone="positive"
              message="Positive message"
            />
            <PasswordField
              label="Label"
              id={`${id}_3`}
              onChange={setState('passwordfield3')}
              value={getState('passwordfield3')}
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
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
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
      background: 'card',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('password')}
            value={getState('password')}
            disabled={true}
          />,
        ),
    },
    {
      label: 'Placeholder prompt',
      description: (
        <Text>
          Providing a <Strong>placeholder</Strong> will display as a prompt to
          the user no value is selected.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('textfield')}
            value={getState('textfield')}
            placeholder="Enter password"
          />,
        ),
    },
  ],
};

export default docs;
