import React from 'react';
import { ComponentDocs } from '../../../../../site/src/types';
import {
  CheckboxStandalone,
  Badge,
  Checkbox,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
  Alert,
} from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  subComponents: ['CheckboxStandalone'],
  migrationGuide: true,
  Example: ({ id, setDefaultState, getState, toggleState }) =>
    source(
      <>
        {setDefaultState('checked', true)}

        <Checkbox
          id={id}
          checked={getState('checked')}
          onChange={() => toggleState('checked')}
          label="Label"
        />
      </>,
    ),
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#checkbox">
        WAI-ARIA Checkbox Pattern
      </TextLink>
      , supporting both dual-state and tri-state specifications.
    </Text>
  ),
  alternatives: [
    {
      name: 'Toggle',
      description: 'For settings that do not require a form submission.',
    },
    {
      name: 'RadioGroup',
      description: 'For single select.',
    },
  ],
  additional: [
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
            The supported tones are: <Strong>{'"critical"'}</Strong> and{' '}
            <Strong>{'"neutral"'}</Strong>.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState }) =>
        source(
          <Stack space="large">
            <Checkbox
              id={`${id}_1`}
              onChange={setState('checkbox')}
              checked={getState('checkbox')}
              label="Label"
              tone="critical"
              message="Critical message"
            />
            <Checkbox
              id={`${id}_2`}
              onChange={setState('checkbox2')}
              checked={getState('checkbox2')}
              label="Label"
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
      Example: ({ id, getState, toggleState }) =>
        source(
          <Checkbox
            id={id}
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
            description="Extra information about the field"
          />,
        ),
    },
    {
      label: 'Sizes',
      description: (
        <Text>
          You can customise the size of the checkbox via the{' '}
          <Strong>size</Strong> prop, which accepts either{' '}
          <Strong>standard</Strong> or <Strong>small.</Strong>
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="medium">
            <Checkbox
              id={`${id}_standard`}
              label="Standard"
              checked={getState('standard')}
              onChange={() => toggleState('standard')}
              size="standard"
            />
            <Checkbox
              id={`${id}_small`}
              label="Small"
              checked={getState('small')}
              onChange={() => toggleState('small')}
              size="small"
            />
          </Stack>,
        ),
    },
    {
      label: 'Disabled field',
      description: (
        <Text>
          A Checkbox can be marked as disabled by passing <Strong>true</Strong>{' '}
          to the <Strong>disabled</Strong> prop.
        </Text>
      ),
      Example: ({ id, toggleState }) =>
        source(
          <Stack space="medium">
            <Checkbox
              id={`${id}_unchecked`}
              disabled={true}
              checked={false}
              onChange={() => toggleState('unchecked')}
              label="Unchecked"
            />
            <Checkbox
              id={`${id}_checked`}
              disabled={true}
              checked={true}
              onChange={() => toggleState('checked')}
              label="Checked"
            />
          </Stack>,
        ),
    },
    {
      label: 'Badge support',
      description: (
        <Text>
          Add a <TextLink href="/components/Badge">Badge</TextLink> alongside
          the field label using the <Strong>badge</Strong> prop.
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <Checkbox
            id={id}
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
            badge={
              <Badge tone="positive" weight="strong">
                Positive
              </Badge>
            }
          />,
        ),
    },
    {
      label: 'Toggling nested content',
      description: (
        <Text>
          Nesting content inside of a Checkbox will both align the content with
          the field label, and toggle it&rsquo;s visibility based on the checked
          state.
        </Text>
      ),
      Example: ({ id, setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('checked', true)}

            <Checkbox
              id={id}
              checked={getState('checked')}
              onChange={() => toggleState('checked')}
              label="Label"
            >
              <Placeholder height={100} />
            </Checkbox>
          </>,
        ),
    },
    {
      label: 'Tri-state support',
      description: (
        <>
          <Text>
            A Checkbox can be used to represent the value of a group of
            checkboxes, presenting as:
          </Text>
          <List>
            <Text>
              <Strong>checked</Strong>, when the entire group is checked,
            </Text>
            <Text>
              <Strong>unchecked</Strong>, when the entire group is unchecked, or
            </Text>
            <Text>
              <Strong>mixed</Strong>, when the group has some of each.
            </Text>
          </List>
          <Text>
            For mixed state checkboxes, you can set the <Strong>checked</Strong>{' '}
            prop to <Strong>{'"mixed"'}</Strong>, or provide an array of checked
            values (e.g. <Strong>[true, false, false]</Strong>) to calculate the
            tri-state value.
          </Text>
        </>
      ),
      Example: ({ id, getState, setState, toggleState }) =>
        source(
          <Stack space="large" dividers>
            <Checkbox
              id={id}
              label="Select all"
              checked={[getState('one'), getState('two'), getState('three')]}
              onChange={({ currentTarget: { checked } }) => {
                setState('one', checked);
                setState('two', checked);
                setState('three', checked);
              }}
            />
            <Stack space="medium">
              <Checkbox
                id={`${id}_1`}
                label="One"
                checked={getState('one')}
                onChange={() => toggleState('one')}
              />
              <Checkbox
                id={`${id}_2`}
                label="Two"
                checked={getState('two')}
                onChange={() => toggleState('two')}
              />
              <Checkbox
                id={`${id}_3`}
                label="Three"
                checked={getState('three')}
                onChange={() => toggleState('three')}
              />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Standalone',
      description: (
        <>
          <Text>
            For cases where a Checkbox needs to be used without a form field
            style label, you can use the <Strong>CheckboxStandalone</Strong>{' '}
            component.
          </Text>
          <Text>
            To maintain accessibility, it is required to provide either a{' '}
            <Strong>aria-label</Strong> or <Strong>aria-labelledby</Strong>{' '}
            property, to describe the field&rsquo;s intent.
          </Text>
          <Alert tone="info">
            <Stack space="medium">
              <Text>
                Given there is no visual label, the following features cannot be
                supported:
              </Text>

              <List space="small">
                <Text>description</Text>
                <Text>message</Text>
                <Text>badge</Text>
                <Text>children (nested content)</Text>
              </List>
            </Stack>
          </Alert>
        </>
      ),
      Example: ({ id, setDefaultState, getState, toggleState }) =>
        source(
          <>
            {setDefaultState('checked', true)}

            <CheckboxStandalone
              id={id}
              checked={getState('checked')}
              onChange={() => toggleState('checked')}
              aria-label="Standalone checkbox example"
            />
          </>,
        ),
    },
  ],
};

export default docs;
