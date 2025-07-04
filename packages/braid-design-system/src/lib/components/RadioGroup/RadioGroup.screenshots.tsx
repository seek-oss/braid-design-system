import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Box, RadioGroup, RadioItem, Stack } from '../';
import { Placeholder } from '../../playroom/components';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  name: 'Default',
  args: {
    value: '',
    label: 'Experience',
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Withselecteditem: Story = {
  name: 'With selected item',
  args: {
    value: '2',
    label: 'Experience',
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Withdescription: Story = {
  name: 'With description',
  args: {
    value: '',
    label: 'Experience',
    description: 'How many years have you been in this role?',
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Withcriticalmessage: Story = {
  name: 'With critical message',
  args: {
    value: '',
    label: 'Experience',
    tone: 'critical',
    message: 'Required field',
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Whendisabled: Story = {
  name: 'When disabled',
  args: {
    value: '2',
    label: 'Experience',
    disabled: true,
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Whendisabledandcritical: Story = {
  name: 'When disabled and critical',
  args: {
    value: '2',
    label: 'Experience',
    tone: 'critical',
    message: 'Required field',
    disabled: true,
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Withnestedcontentvisibleonlywhenchecked: Story = {
  name: 'With nested content visible only when checked',
  render: () => (
    <RadioGroup value="1" onChange={() => {}} label="Experience">
      <RadioItem label="Less than one year" value="0" />
      <RadioItem label="1 year" value="1">
        <Placeholder height={50} label="Nested content" />
      </RadioItem>
      <RadioItem label="2 years" value="2" />
      <RadioItem label="3+ years" value="3" />
    </RadioGroup>
  ),
  parameters: {
     ,
  },
};

export const Small: Story = {
  name: 'Small',
  args: {
    value: '',
    label: 'Experience',
    size: 'small',
    children: [
      <RadioItem key="0" label="Less than one year" value="0" />,
      <RadioItem key="1" label="1 year" value="1" />,
      <RadioItem key="2" label="2 years" value="2" />,
      <RadioItem key="3" label="3+ years" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Whendisableditem: Story = {
  name: 'When disabled item',
  render: () => (
    <RadioGroup value="2" onChange={() => {}} label="Experience">
      <RadioItem label="Less than one year" value="0" />
      <RadioItem label="1 year" value="1" />
      <RadioItem label="2 years" value="2" disabled />
      <RadioItem label="3+ years" value="3" />
    </RadioGroup>
  ),
  parameters: {
     ,
  },
};

export const Whenlabellingviaarialabel: Story = {
  name: 'When labelling via aria-label',
  args: {
    value: '2',
    'aria-label': 'Label',
    children: [
      <RadioItem key="1" label="One" value="1" />,
      <RadioItem key="2" label="Two" value="2" />,
      <RadioItem key="3" label="Three" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Whenlabellingviaarialabelledby: Story = {
  name: 'When labelling via aria-labelledby',
  args: {
    value: '2',
    'aria-labelledby': 'elementId',
    children: [
      <RadioItem key="1" label="One" value="1" />,
      <RadioItem key="2" label="Two" value="2" />,
      <RadioItem key="3" label="Three" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Whenlabellingviaarialabelledbywithadescription: Story = {
  name: 'When labelling via aria-labelledby with a description',
  args: {
    value: '2',
    'aria-labelledby': 'elementId',
    description: 'How many years have you been in this role?',
    children: [
      <RadioItem key="1" label="One" value="1" />,
      <RadioItem key="2" label="Two" value="2" />,
      <RadioItem key="3" label="Three" value="3" />,
    ],
  },
  parameters: {
     ,
  },
};

export const Virtualtouchtargetstandard: Story = {
  name: 'Virtual touch target (standard)',
  render: () => (
    <RadioGroup
      value="2"
      onChange={() => {}}
      label="Experience"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <RadioItem label="One" value="1" />
      <RadioItem label="Two" value="2" />
      <RadioItem label="Three" value="3" />
    </RadioGroup>
  ),
  parameters: {
     ,
  },
};

export const Virtualtouchtargetsmall: Story = {
  name: 'Virtual touch target (small)',
  render: () => (
    <RadioGroup
      value="2"
      onChange={() => {}}
      label="Experience"
      size="small"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <RadioItem label="One" value="1" />
      <RadioItem label="Two" value="2" />
      <RadioItem label="Three" value="3" />
    </RadioGroup>
  ),
  parameters: {
     ,
  },
};

export const Contrast: Story = {
  name: 'Contrast',
  render: () => (
    <Box maxWidth="xsmall">
      <BackgroundContrastTest>
        <RadioGroup value="1" onChange={() => {}} label="Experience">
          <RadioItem label="Less than one year" value="0" />
          <RadioItem label="1 year" value="1" />
        </RadioGroup>
      </BackgroundContrastTest>
    </Box>
  ),
  parameters: {
     ,
  },
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <RadioGroup
        value="2"
        onChange={() => {}}
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
  parameters: {
     ,
  },
};
