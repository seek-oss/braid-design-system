import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Dropdown, IconLocation, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

const handler = () => {};

export const WithPlaceholder: Story = {
  name: 'Dropdown with placeholder',
  render: () => (
    <Dropdown
      label="Job Title"
      onChange={handler}
      value=""
      placeholder="Please select a role title"
    >
      <option value="1">Developer</option>
      <option value="2">Designer</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithOptionsGroup: Story = {
  name: 'Dropdown with options group',
  render: () => (
    <Dropdown
      label="Location"
      value=""
      onChange={handler}
      placeholder="Please select a location"
    >
      <optgroup label="Major Cities">
        <option value="3004">Melbourne</option>
        <option value="3002">Sydney</option>
      </optgroup>
      <option value="3020">Wonthaggi</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithIcon: Story = {
  name: 'Dropdown with icon',
  render: () => (
    <Dropdown
      label="Location"
      icon={<IconLocation />}
      placeholder="Please select a location"
      value=""
      onChange={handler}
    >
      <option value="3004">Melbourne</option>
      <option value="3002">Sydney</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithoutPlaceholder: Story = {
  name: 'Dropdown without placeholder',
  render: () => (
    <Dropdown label="Job Title" onChange={handler} value="">
      <option value="1">Developer</option>
      <option value="2">Designer</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const CriticalTone: Story = {
  name: 'Dropdown in critical tone',
  render: () => (
    <Dropdown
      label="Job Title"
      onChange={handler}
      value=""
      tone="critical"
      message="Required field"
    >
      <option value="1">Developer</option>
      <option value="2">Designer</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const CautionTone: Story = {
  name: 'Dropdown in caution tone',
  render: () => (
    <Dropdown
      label="Job Title"
      onChange={handler}
      value=""
      tone="caution"
      message="Caution message"
    >
      <option value="1">Developer</option>
      <option value="2">Designer</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const DisabledState: Story = {
  name: 'Dropdown in disabled state',
  render: () => (
    <Stack space="gutter">
      <Dropdown
        label="With no value or placeholder"
        onChange={handler}
        value=""
        disabled={true}
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
      <Dropdown
        label="With value and no placeholder"
        onChange={handler}
        value="1"
        disabled={true}
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
      <Dropdown
        label="With no value and a placeholder"
        onChange={handler}
        value=""
        disabled={true}
        placeholder="Placeholder text"
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
      <Dropdown
        label="With critical tone"
        onChange={handler}
        value=""
        disabled={true}
        tone="critical"
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
      <Dropdown
        label="With critical tone and message"
        onChange={handler}
        value=""
        disabled={true}
        tone="critical"
        message="Message"
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const NoVisualLabel: Story = {
  name: 'Dropdown with no visual label',
  render: () => (
    <Dropdown
      aria-label="Job Title"
      onChange={handler}
      value=""
      placeholder="Please select a role title"
    >
      <option value="1">Developer</option>
      <option value="2">Designer</option>
    </Dropdown>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const ContrastTest: Story = {
  name: 'Contrast',
  render: () => (
    <BackgroundContrastTest>
      <Dropdown
        label="Job Title"
        onChange={handler}
        value=""
        placeholder="Please select a role title"
      >
        <option value="1">Developer</option>
        <option value="2">Designer</option>
      </Dropdown>
    </BackgroundContrastTest>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
