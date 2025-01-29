import { useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Box, RadioGroup, RadioItem, Stack } from '../';
import { Placeholder } from '../../playroom/components';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
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
      Example: ({ handler }) => (
        <RadioGroup
          id="radiolist5"
          value="2"
          onChange={handler}
          label="Experience"
          disabled
        >
          <RadioItem label="Less than one year" value="0" />
          <RadioItem label="1 year" value="1" />
          <RadioItem label="2 years" value="2" />
          <RadioItem label="3+ years " value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'When disabled and critical',
      Example: () => {
        const [state, setState] = useState('2');
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
              <Placeholder height={50} label="Nested content" />
            </RadioItem>
            <RadioItem label="2 years" value="2" />
            <RadioItem label="3+ years " value="3" />
          </RadioGroup>
        );
      },
    },
    {
      label: 'Small',
      Example: () => {
        const [state, setState] = useState('');
        return (
          <RadioGroup
            id="radiolistsmall"
            value={state}
            onChange={(e) => setState(e.currentTarget.value)}
            label="Experience"
            size="small"
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
      label: 'When disabled item',
      Example: ({ handler }) => (
        <RadioGroup
          id="disableditem"
          value="2"
          onChange={handler}
          label="Experience"
        >
          <RadioItem label="Less than one year" value="0" />
          <RadioItem label="1 year" value="1" />
          <RadioItem label="2 years" value="2" disabled />
          <RadioItem label="3+ years " value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'When labelling via aria-label',
      Example: ({ handler }) => (
        <RadioGroup
          id="arialabel"
          value="2"
          onChange={handler}
          aria-label="Label"
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'When labelling via aria-labelledby',
      Example: ({ handler }) => (
        <RadioGroup
          id="arialabelledby"
          value="2"
          onChange={handler}
          aria-labelledby="elementId"
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'When labelling via aria-labelledby with a description',
      Example: ({ handler }) => (
        <RadioGroup
          id="arialabelledbywithdesc"
          value="2"
          onChange={handler}
          aria-labelledby="elementId"
          description="How many years have you been in this role?"
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'Virtual touch target (standard)',
      Example: ({ handler }) => (
        <RadioGroup
          id="radiolist1"
          value="2"
          onChange={handler}
          label="Experience"
          data={{ [debugTouchableAttrForDataProp]: '' }}
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'Virtual touch target (small)',
      Example: ({ handler }) => (
        <RadioGroup
          id="radiolist1"
          value="2"
          onChange={handler}
          label="Experience"
          size="small"
          data={{ [debugTouchableAttrForDataProp]: '' }}
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>
      ),
    },
    {
      label: 'Contrast',
      Example: ({ handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            {(background) => (
              <RadioGroup
                id={background}
                value="1"
                onChange={handler}
                label="Experience"
              >
                <RadioItem label="Less than one year" value="0" />
                <RadioItem label="1 year" value="1" />
              </RadioGroup>
            )}
          </BackgroundContrastTest>
        </Box>
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      Example: ({ handler }) => (
        <Stack space="large" align="center">
          <RadioGroup
            id="arialabelledbywithdesc"
            value="2"
            onChange={handler}
            label="Dolor cillum elit aliquip velit reprehenderit."
            tone="critical"
            message="Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit."
            description="Nulla amet dolor sunt elit consequat proident eiusmod id. Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit."
          >
            <RadioItem label="Veniam voluptate minim consectetur." value="1" />
            <RadioItem
              label="Ex magna amet quis esse Lorem commodo. Consequat aliquip commodo ipsum reprehenderit."
              value="2"
            />
            <RadioItem
              label="Consequat tempor cupidatat pariatur ea eiusmod proident sit cupidatat magna duis."
              value="3"
            />
          </RadioGroup>
        </Stack>
      ),
    },
  ],
};
