import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Disclosure, Stack, Text } from '../';

const handler = () => {};

const meta = {
  title: 'Components/Disclosure',
  component: Disclosure,
  args: {
    expandLabel: 'Show content',
    collapseLabel: 'Hide content',
    children: <Text>Content</Text>,
    expanded: false,
    onToggle: handler,
  },
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof Disclosure>;

const textSizes = ['xsmall', 'small', 'standard', 'large'] as const;

export const Collapsed: Story = {};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};

export const ExpandedWithCustomSpace: Story = {
  name: 'Expanded with custom space',
  args: {
    space: 'small',
    expanded: true,
  },
};

export const WeakWeight: Story = {
  name: 'Weak weight',
  args: {
    weight: 'weak',
    expanded: true,
  },
};

export const InlineAndCollapsed: Story = {
  name: 'Inline and collapsed',
  args: {
    space: 'xxsmall',
    children: (
      <>
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Story />
    </Text>
  ),
};

export const InlineAndExpanded: Story = {
  name: 'Inline and expanded',
  args: {
    expanded: true,
    children: (
      <>
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Story />
    </Text>
  ),
};

export const InlineExpandedWithCustomSpace: Story = {
  name: 'Inline, expanded with custom space',
  args: {
    space: 'large',
    expanded: true,
    children: (
      <>
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Story />
    </Text>
  ),
};

export const InlineCollapsedWithTrailingText: Story = {
  name: 'Inline, collapsed with trailing text',
  args: {
    space: 'xxsmall',
    children: (
      <>
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Story />. Curabitur cursus efficitur dui congue facilisis. Nam fermentum
      nulla vel nunc auctor facilisis. Quisque neque sapien, aliquam eget eros
      id, facilisis sodales nisl.
    </Text>
  ),
};

export const InlineExpandedWithTrailingText: Story = {
  name: 'Inline, expanded with trailing text',
  args: {
    space: 'xxsmall',
    expanded: true,
    children: (
      <>
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Story /> Curabitur cursus efficitur dui congue facilisis. Nam fermentum
      nulla vel nunc auctor facilisis. Quisque neque sapien, aliquam eget eros
      id, facilisis sodales nisl.
    </Text>
  ),
};

export const SizesAndDefaultSpacing: Story = {
  name: 'Sizes and default spacing',
  render: () => (
    <Stack space="large">
      {textSizes.map((size) => (
        <Disclosure
          key={size}
          expandLabel={`${size.charAt(0).toUpperCase()}${size.slice(1)} size`}
          size={size}
          expanded={true}
          onToggle={handler}
        >
          <Text>Defaults to {size} text size</Text>
        </Disclosure>
      ))}
    </Stack>
  ),
};

export const InlineSizesAndDefaultSpacing: Story = {
  name: 'Inline: Sizes and default spacing',
  render: () => (
    <Stack space="large">
      {textSizes.map((size) => (
        <Text size={size} key={size}>
          Inline disclosure in{' '}
          <Disclosure
            expandLabel={`${size} size`}
            expanded={true}
            onToggle={handler}
          >
            Defaults to {size} text size
          </Disclosure>
        </Text>
      ))}
    </Stack>
  ),
};
