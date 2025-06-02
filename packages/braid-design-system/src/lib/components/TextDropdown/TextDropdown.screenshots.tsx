import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Box, Heading, Strong, Text, TextDropdown } from '../';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta: Meta<typeof TextDropdown> = {
  title: 'Components/TextDropdown',
  component: TextDropdown,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextDropdown>;

const DefaultComponent = () => {
  const [value, setValue] = useState('Developer');
  return (
    <Text>
      <TextDropdown
        label="Job Title"
        id="textdropdown-default"
        onChange={setValue}
        value={value}
        options={['Developer', 'Designer', 'Product Manager']}
      />
    </Text>
  );
};

export const Default: Story = {
  render: () => <DefaultComponent />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

const WithIdentifyingValuesComponent = () => {
  const [value, setValue] = useState(2000);
  return (
    <Text>
      <TextDropdown
        label="Location"
        id="textdropdown-identifying-values"
        onChange={setValue}
        value={value}
        options={[
          {
            text: 'Melbourne',
            value: 3000,
          },
          {
            text: 'Sydney',
            value: 2000,
          },
          {
            text: 'Brisbane',
            value: 4000,
          },
        ]}
      />
    </Text>
  );
};

export const Withidentifyingvalues: Story = {
  render: () => <WithIdentifyingValuesComponent />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

const WithinStrongTextComponent = () => {
  const [value, setValue] = useState('Relevance');
  return (
    <Text>
      Sort by{' '}
      <Strong>
        <TextDropdown
          label="Sort order"
          id="textdropdown-strong-text"
          onChange={setValue}
          value={value}
          options={['Relevance', 'Keyword']}
        />
      </Strong>
    </Text>
  );
};

export const Withinstrongtext: Story = {
  render: () => <WithinStrongTextComponent />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

const VirtualTouchTargetComponent = () => {
  const [value, setValue] = useState('Relevance');
  return (
    <Text
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      Sort by{' '}
      <TextDropdown
        label="Sort order"
        id="textdropdown-virtual-touch"
        onChange={setValue}
        value={value}
        options={['Relevance', 'Keyword']}
      />
    </Text>
  );
};

export const Virtualtouchtarget: Story = {
  render: () => <VirtualTouchTargetComponent />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

const WithinHeadingComponent = () => {
  const [value, setValue] = useState('Sydney');
  return (
    <Heading level="2">
      Jobs in{' '}
      <TextDropdown
        label="Location"
        id="textdropdown-heading"
        onChange={setValue}
        value={value}
        options={['Melbourne', 'Sydney', 'Brisbane']}
      />
    </Heading>
  );
};

export const Withinaheading: Story = {
  render: () => <WithinHeadingComponent />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

const TextDropdownOnBrandBackgroundComponent = () => {
  const [value, setValue] = useState('Designer');
  return (
    <Text>
      <TextDropdown
        label="Job Title"
        id="textdropdown-brand-background"
        onChange={setValue}
        value={value}
        options={['Developer', 'Designer', 'Product Manager']}
      />
    </Text>
  );
};

export const TextDropdownonBrandBackground: Story = {
  render: () => (
    <Box background="brand" padding="gutter">
      <TextDropdownOnBrandBackgroundComponent />
    </Box>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
