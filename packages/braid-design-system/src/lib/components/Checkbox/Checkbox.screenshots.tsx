import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge, Box, Inline, Stack, Text, Tiles } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
    id: { control: 'text' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'standard'],
    },
    tone: {
      control: 'radio',
      options: ['neutral', 'critical'],
    },
    message: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    id: 'checkbox-example',
    checked: false,
    label: 'Label',
    size: 'standard',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const handleChange = () => updateArgs({ checked: !checked });
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const handleChange = () => updateArgs({ checked: !checked });
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Mixedstate: Story = {
  name: 'Mixed state',
  args: {
    checked: 'mixed',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Stack space="gutter">
      <Checkbox
        {...args}
        id={`${args.id}_1`}
        disabled={true}
        checked={false}
        label="Unchecked"
      />
      <Checkbox
        {...args}
        id={`${args.id}_2`}
        disabled={true}
        checked={true}
        label="Checked"
      />
      <Checkbox
        {...args}
        id={`${args.id}_3`}
        disabled={true}
        checked="mixed"
        label="Mixed"
      />
      <Checkbox
        {...args}
        id={`${args.id}_4`}
        disabled={true}
        checked={false}
        label="Unchecked & critical"
        tone="critical"
      />
      <Checkbox
        {...args}
        id={`${args.id}_5`}
        disabled={true}
        checked={true}
        label="Checked & critical"
        tone="critical"
      />
      <Checkbox
        {...args}
        id={`${args.id}_6`}
        disabled={true}
        checked="mixed"
        label="Mixed & critical"
        tone="critical"
      />
      <Checkbox
        {...args}
        id={`${args.id}_7`}
        disabled={true}
        checked={false}
        label="Unchecked, critical & message"
        tone="critical"
        message="Message"
      />
      <Checkbox
        {...args}
        id={`${args.id}_8`}
        disabled={true}
        checked={true}
        label="Checked, critical & message"
        tone="critical"
        message="Message"
      />
      <Checkbox
        {...args}
        id={`${args.id}_9`}
        disabled={true}
        checked="mixed"
        label="Mixed, critical & message"
        tone="critical"
        message="Message"
      />
    </Stack>
  ),
};

export const Critical: Story = {
  args: {
    tone: 'critical',
    message: 'This is a critical message',
  },
};

export const Withadescription: Story = {
  name: 'With a description',
  args: {
    description: 'Extra information about the field',
  },
};

export const WithaBadge: Story = {
  name: 'With a Badge',
  args: {
    badge: (
      <Badge tone="positive" weight="strong">
        New
      </Badge>
    ),
  },
};

export const WithaBadgeanddescription: Story = {
  name: 'With a Badge and description',
  args: {
    description: 'Extra information about the field',
    badge: (
      <Badge tone="positive" weight="strong">
        New
      </Badge>
    ),
  },
};

export const Withnestedcontentvisibleonlywhenchecked: Story = {
  name: 'With nested content visible only when checked',
  args: {
    checked: true,
    children: <Text>This text is visible when the checkbox is checked.</Text>,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const handleChange = () => updateArgs({ checked: !checked });
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
};

export const Withnestedcontentanddescription: Story = {
  name: 'With nested content and description',
  args: {
    checked: true,
    description: 'Extra information about the field',
    children: <Text>This text is visible when the checkbox is checked.</Text>,
  },
};

export const Withamessageanddescription: Story = {
  name: 'With a message and description',
  args: {
    tone: 'critical',
    message: 'This is a critical message',
    description: 'Extra information about the field',
  },
};

export const Withnestedcontentamessageanddescription: Story = {
  name: 'With nested content, a message and description',
  args: {
    checked: true,
    tone: 'critical',
    message: 'This is a critical message',
    description: 'Extra information about the field',
    children: <Text>This text is visible when the checkbox is checked.</Text>,
  },
};

export const Virtualtouchtarget: Story = {
  name: 'Virtual touch target',
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();
    const handleChange = () => updateArgs({ checked: !checked });

    return (
      <Inline
        space="large"
        data={{
          [debugTouchableAttrForDataProp]: '',
        }}
      >
        <Checkbox
          {...args}
          id={`${args.id}-1`}
          checked={checked}
          onChange={handleChange}
          size="small"
        />

        <Checkbox
          {...args}
          id={`${args.id}-2`}
          checked={checked}
          onChange={handleChange}
        />
      </Inline>
    );
  },
};

export const Contrast: Story = {
  render: (args) => (
    <Box maxWidth="xsmall">
      <BackgroundContrastTest>
        <Tiles space="small" columns={2}>
          <Checkbox {...args} checked={false} />
          <Checkbox {...args} checked={true} />
        </Tiles>
      </BackgroundContrastTest>
    </Box>
  ),
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    tone: 'critical',
    message:
      'Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit.',
    description:
      'Nulla amet dolor sunt elit consequat proident eiusmod id. Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit.',
    label: 'Dolor cillum elit aliquip velit reprehenderit.',
  },
  render: (args) => (
    <Stack space="large" align="center">
      <Checkbox {...args} />
    </Stack>
  ),
};
