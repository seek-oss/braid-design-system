import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Disclosure, Stack, Text } from '../';

const meta = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof Disclosure>;

const handler = () => {};

const textSizes = ['xsmall', 'small', 'standard', 'large'] as const;

export const Collapsed: Story = {
  name: 'Collapsed',
  render: () => (
    <Disclosure
      expandLabel="Show content"
      collapseLabel="Hide content"
      expanded={false}
      onToggle={handler}
    >
      <Text>Content</Text>
    </Disclosure>
  ),
};

export const Expanded: Story = {
  name: 'Expanded',
  render: () => (
    <Disclosure
      expandLabel="Show content"
      collapseLabel="Hide content"
      expanded={true}
      onToggle={handler}
    >
      <Text>Content</Text>
    </Disclosure>
  ),
};

export const ExpandedWithCustomSpace: Story = {
  name: 'Expanded with custom space',
  render: () => (
    <Disclosure
      expandLabel="Show content"
      collapseLabel="Hide content"
      space="small"
      expanded={true}
      onToggle={handler}
    >
      <Text>Content</Text>
    </Disclosure>
  ),
};

export const WeakWeight: Story = {
  name: 'Weak weight',
  render: () => (
    <Disclosure
      expandLabel="Show content"
      collapseLabel="Hide content"
      weight="weak"
      expanded={true}
      onToggle={handler}
    >
      <Text>Content</Text>
    </Disclosure>
  ),
};

export const InlineAndCollapsed: Story = {
  name: 'Inline and collapsed',
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Disclosure
        expandLabel="Show content"
        collapseLabel="Hide content"
        expanded={false}
        onToggle={handler}
      >
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </Disclosure>
    </Text>
  ),
};

export const InlineAndExpanded: Story = {
  name: 'Inline and expanded',
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Disclosure
        expandLabel="Show content"
        collapseLabel="Hide content"
        expanded={true}
        onToggle={handler}
      >
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </Disclosure>
    </Text>
  ),
};

export const InlineExpandedWithCustomSpace: Story = {
  name: 'Inline, expanded with custom space',
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Disclosure
        expandLabel="Show content"
        collapseLabel="Hide content"
        space="xxsmall"
        expanded={true}
        onToggle={handler}
      >
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </Disclosure>
    </Text>
  ),
};

export const InlineCollapsedWithTrailingText: Story = {
  name: 'Inline, collapsed with trailing text',
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Disclosure
        expandLabel="Show content"
        collapseLabel="Hide content"
        space="xxsmall"
        expanded={false}
        onToggle={handler}
      >
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </Disclosure>
      . Curabitur cursus efficitur dui congue facilisis. Nam fermentum nulla vel
      nunc auctor facilisis. Quisque neque sapien, aliquam eget eros id,
      facilisis sodales nisl.
    </Text>
  ),
};

export const InlineExpandedWithTrailingText: Story = {
  name: 'Inline, expanded with trailing text',
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper
      interdum nibh quis viverra. Nullam ac turpis erat. Cras non venenatis
      lacus. In hac habitasse platea dictumst.
      <Disclosure
        expandLabel="Show content"
        collapseLabel="Hide content"
        space="xxsmall"
        expanded={true}
        onToggle={handler}
      >
        Vestibulum fringilla, leo at fringilla luctus, risus erat pretium eros,
        in sodales dolor velit at sem.
      </Disclosure>
      Curabitur cursus efficitur dui congue facilisis. Nam fermentum nulla vel
      nunc auctor facilisis. Quisque neque sapien, aliquam eget eros id,
      facilisis sodales nisl.
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
