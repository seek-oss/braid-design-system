import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import {
  Box,
  CheckboxStandalone,
  Column,
  Columns,
  Inline,
  Stack,
  Text,
  Tiles,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const checkboxSizes = ['standard', 'small'] as const;

const meta = {
  title: 'Components/CheckboxStandalone',
  component: CheckboxStandalone,
  args: {
    id: 'checkbox-standalone-example',
    checked: false,
    'aria-label': 'Label',
    onChange: () => {},
  },
} satisfies Meta<typeof CheckboxStandalone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  name: 'Standard',
  render: function StandardStory(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckboxStandalone
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const Small: Story = {
  name: 'Small',
  render: function SmallStory(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckboxStandalone
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
        size="small"
      />
    );
  },
};

export const Checked: Story = {
  name: 'Checked',
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
  name: 'Disabled',
  render: function DisabledStory(args) {
    return (
      <Stack space="gutter">
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked={false}
          aria-label="Unchecked"
        />
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked={true}
          aria-label="Checked"
        />
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked="mixed"
          aria-label="Mixed"
        />
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked={false}
          aria-label="Unchecked & critical"
          tone="critical"
        />
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked={true}
          aria-label="Checked & critical"
          tone="critical"
        />
        <CheckboxStandalone
          {...args}
          disabled={true}
          checked="mixed"
          aria-label="Mixed & critical"
          tone="critical"
        />
      </Stack>
    );
  },
};

export const Critical: Story = {
  name: 'Critical',
  args: {
    tone: 'critical',
  },
};

export const Virtualtouchtarget: Story = {
  name: 'Virtual touch target',
  render: function VirtualTouchTargetStory(args) {
    const [checked, setChecked] = useState(false);
    return (
      <Inline
        space="large"
        data={{
          [debugTouchableAttrForDataProp]: '',
        }}
      >
        <CheckboxStandalone
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
          size="small"
        />

        <CheckboxStandalone
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Inline>
    );
  },
};

export const Textalignment: Story = {
  name: 'Text alignment',
  render: function TextAlignmentStory(args) {
    return (
      <Stack space="medium">
        {checkboxSizes.map((size) => (
          <Box background="surface" key={size}>
            <Columns space="small">
              <Column width="content">
                <Text size={size}>
                  <CheckboxStandalone {...args} size={size} />
                </Text>
              </Column>
              <Column>
                <Text size={size}>Text alignment</Text>
              </Column>
            </Columns>
          </Box>
        ))}
      </Stack>
    );
  },
};

export const Textalignmentwithwrappinglines: Story = {
  name: 'Text alignment with wrapping lines',
  render: function TextAlignmentWrappingStory(args) {
    return (
      <Box
        style={{
          maxWidth: 200,
        }}
      >
        <Stack space="medium">
          {checkboxSizes.map((size) => (
            <Box background="surface" key={size}>
              <Columns space="small">
                <Column width="content">
                  <Text size={size}>
                    <CheckboxStandalone {...args} size={size} />
                  </Text>
                </Column>
                <Column>
                  <Text size={size}>
                    Text with really really long wrapping lines
                  </Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  },
};

export const Contrast: Story = {
  name: 'Contrast',
  render: function ContrastStory(args) {
    return (
      <Box maxWidth="xsmall">
        <BackgroundContrastTest>
          <Tiles space="small" columns={2}>
            <CheckboxStandalone {...args} checked={false} />
            <CheckboxStandalone {...args} checked={true} />
          </Tiles>
        </BackgroundContrastTest>
      </Box>
    );
  },
};
