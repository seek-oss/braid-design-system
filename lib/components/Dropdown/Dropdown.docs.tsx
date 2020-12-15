import React from 'react';
import { ComponentDetails } from '../../../site/src/types';
import {
  Dropdown,
  List,
  IconHelp,
  Strong,
  Text,
  TextLink,
  IconLocation,
  Stack,
} from '../';
import source from '../../utils/source.macro';

const docs: ComponentDetails = {
  category: 'Content',
  migrationGuide: true,
  Example: ({ id, getState, setState }) =>
    source(
      <Dropdown
        label="Label"
        id={id}
        onChange={setState('dropdown')}
        value={getState('dropdown')}
        placeholder="Please select"
      >
        <option>Option 1</option>
        <option>Option 2</option>
      </Dropdown>,
    ),
  alternatives: [
    { name: 'Autosuggest', description: 'For larger lists.' },
    {
      name: 'TextDropdown',
      description: 'For minimal selection lists, outside of forms.',
    },
    { name: 'TextField', description: 'For free text.' },
  ],
  additional: [
    {
      label: 'Option groups',
      description: (
        <Text>
          Grouping is supported via native <Strong>optgroup</Strong> elements.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Dropdown
            label="Label"
            id={id}
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
          >
            <optgroup label="Group 1">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </optgroup>
            <optgroup label="Group 2">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </optgroup>
          </Dropdown>,
        ),
    },
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
          <Dropdown
            label="Label"
            id={id}
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            secondaryLabel="optional"
            tertiaryLabel={
              <TextLink href="#">
                <IconHelp /> Help
              </TextLink>
            }
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
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
            <Dropdown
              label="Label"
              id={`${id}_1`}
              onChange={setState('dropdown')}
              value={getState('dropdown')}
              tone="critical"
              message="Critical message"
              placeholder="Please select"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
            <Dropdown
              label="Label"
              id={`${id}_2`}
              onChange={setState('dropdown2')}
              value={getState('dropdown2')}
              tone="positive"
              message="Positive message"
              placeholder="Please select"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
            <Dropdown
              label="Label"
              id={`${id}_3`}
              onChange={setState('dropdown3')}
              value={getState('dropdown3')}
              tone="neutral"
              message="Neutral message"
              placeholder="Please select"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </Dropdown>
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
          <Dropdown
            label="Label"
            id={id}
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
            description="Extra information about the field"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
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
          <Dropdown
            label="Label"
            id={id}
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            disabled={true}
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
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
          <Dropdown
            label="Label"
            id={id}
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            placeholder="Please select"
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Dropdown>,
        ),
    },
    {
      label: 'Inserting an icon',
      description: (
        <Text>
          For decoration and help disguinishing fields an <Strong>icon</Strong>{' '}
          can be provided. This will be placed in the left of the field and is
          not interactive.
        </Text>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Dropdown
            id={id}
            label="Location"
            onChange={setState('dropdown')}
            value={getState('dropdown')}
            icon={<IconLocation />}
            placeholder="Please select"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Dropdown>,
        ),
    },
  ],
};

export default docs;
