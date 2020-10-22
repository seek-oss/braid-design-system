import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Stack,
  Text,
  Notice,
  TextLink,
  RadioGroup,
  RadioItem,
  Badge,
} from '..';
import {
  Placeholder,
  RadioGroup as PlayroomRadioGroup,
  Strong,
} from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton">
          WAI-ARIA Radio Group Pattern
        </TextLink>{' '}
        for radio groups not contained in a toolbar.
      </Text>
      <Text>
        The RadioGroup provides an accessible way to group and control a set of{' '}
        <Strong>RadioItem</Strong> components. The RadioGroup is responsible for
        handling the value, tone, message, and disabled state—determining the
        presentation and selection of the items in the list.
      </Text>
    </Stack>
  ),
  migrationGuide: true,
  screenshotWidths: [320],
  subComponents: ['RadioItem'],
  examples: [
    {
      label: 'Default',
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolist1"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1" />
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'With selected item',
      Example: ({ handler }) => (
        <RadioGroup
          id="radiolist2"
          value="2"
          onChange={handler}
          label="Experience"
        >
          <RadioItem label="Less than one year" value="0" />
          <RadioItem label="1 year" value="1" />
          <RadioItem label="2 years" value="2" />
          <RadioItem label="3+ years " value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'With description',
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolist3"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
            description="How many years have you been in this role?"
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1" />
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'With critical message',
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolist4"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
            tone="critical"
            message="Required field"
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1" />
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'When disabled',
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolist5"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
            disabled
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1" />
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'When disabled and critical',
      docsSite: false,
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolist6"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
            tone="critical"
            message="Required field"
            disabled
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1" />
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'With nested content visible only when checked',
      Example: () => {
        const [state, setState] = useState('1');

        return (
          <RadioGroup
            id="radiolist7"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
          >
            <RadioItem label="Less than one year" value="0" />
            <RadioItem label="1 year" value="1">
              <Notice>
                <Text>
                  This text is visible when the radioList button is checked.
                </Text>
              </Notice>
            </RadioItem>
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <PlayroomRadioGroup label="Options">
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </PlayroomRadioGroup>
      ),
    },
    {
      name: 'with Description',
      code: (
        <PlayroomRadioGroup
          label="Options"
          description="More details about options"
        >
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </PlayroomRadioGroup>
      ),
    },
    {
      name: 'with an error',
      code: (
        <PlayroomRadioGroup label="Options" tone="critical" message="Required">
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </PlayroomRadioGroup>
      ),
    },
    {
      group: 'RadioItem',
      name: 'with Badge',
      code: (
        <RadioItem
          label="With badge"
          value="badge"
          badge={
            <Badge tone="promote" weight="strong">
              Badge
            </Badge>
          }
        />
      ),
    },
    {
      group: 'RadioItem',
      name: 'with Description',
      code: (
        <RadioItem
          label="With description"
          value="description"
          description="Extra item detail"
        />
      ),
    },
    {
      group: 'RadioItem',
      name: 'with nested content visible when checked',
      code: (
        <RadioItem
          label="With nested content"
          value="children"
          description="Content visible below when checked"
        >
          <Placeholder height={50} width="100%" />
        </RadioItem>
      ),
    },
  ],
};

export default docs;
