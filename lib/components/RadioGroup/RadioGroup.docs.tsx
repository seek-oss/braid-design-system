import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Stack, Text, TextLink, RadioGroup, RadioItem, Strong } from '..';
import { Placeholder } from '../../playroom/components';

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
              <Placeholder height={50} label="Nested content" />
            </RadioItem>
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
  ],
};

export default docs;
