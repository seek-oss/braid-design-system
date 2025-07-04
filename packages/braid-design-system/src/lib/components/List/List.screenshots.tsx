import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { List, Text, Stack, IconTick, Box } from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Standard: Story = {
  name: 'Standard List',
  render: () => (
    <List>
      <Text>This is a list item.</Text>
      <Text>This is a list item.</Text>
      <Text>This is a list item.</Text>
    </List>
  ),
};

export const Numbered: Story = {
  name: 'Numbered List',
  render: () => (
    <List type="number">
      <Text>This is a numbered list item.</Text>
      <Text>This is a numbered list item.</Text>
      <Text>This is a numbered list item.</Text>
    </List>
  ),
};

export const Alpha: Story = {
  name: 'Alpha List',
  render: () => (
    <List type="alpha">
      <Text>This is an alpha list item.</Text>
      <Text>This is an alpha list item.</Text>
      <Text>This is an alpha list item.</Text>
    </List>
  ),
};

export const Roman: Story = {
  name: 'Roman List',
  render: () => (
    <List type="roman">
      <Text>This is a Roman list item.</Text>
      <Text>This is a Roman list item.</Text>
      <Text>This is a Roman list item.</Text>
    </List>
  ),
};

export const Icon: Story = {
  name: 'Icon List',
  render: () => (
    <List type="icon" icon={<IconTick tone="positive" />}>
      <Text>This is a list item.</Text>
      <Text>This is a list item.</Text>
      <Text>This is a list item.</Text>
    </List>
  ),
};

export const WithParagraphs: Story = {
  name: 'List with paragraphs',
  render: () => (
    <List space="large">
      <Stack space="medium">
        <Text>This is a paragraph.</Text>
        <Text>This is another paragraph.</Text>
      </Stack>
      <Stack space="medium">
        <Text>This is a paragraph.</Text>
        <Text>This is another paragraph.</Text>
      </Stack>
    </List>
  ),
};

export const Nested: Story = {
  name: 'Nested Lists',
  render: () => (
    <List space="large" type="number">
      <Stack space="medium">
        <Text>This has a nested list.</Text>
        <List type="alpha">
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
        </List>
      </Stack>
      <Stack space="medium">
        <Text>This has a nested list.</Text>
        <List type="alpha">
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
        </List>
      </Stack>
    </List>
  ),
};

export const CustomSize: Story = {
  name: 'List with custom text size',
  render: () => (
    <List size="large">
      <Text>This is a large list item.</Text>
      <Text>This is a large list item.</Text>
      <Text>This is a large list item.</Text>
    </List>
  ),
};

export const CustomSpace: Story = {
  name: 'List with custom space between items',
  render: () => (
    <List space="large">
      <Text>List item with large space.</Text>
      <Text>List item with large space.</Text>
      <Text>List item with large space.</Text>
    </List>
  ),
};

export const CustomTone: Story = {
  name: 'List with custom tone',
  render: () => (
    <List tone="secondary">
      <Text>List item with secondary tone.</Text>
      <Text>List item with secondary tone.</Text>
      <Text>List item with secondary tone.</Text>
    </List>
  ),
};

export const NumberedCustomStart: Story = {
  name: 'Numbered List with custom start position',
  render: () => (
    <List type="number" start={9}>
      <Text>This is a numbered list item.</Text>
      <Text>This is a numbered list item.</Text>
      <Text>This is a numbered list item.</Text>
    </List>
  ),
};

export const AlphaCustomStart: Story = {
  name: 'Alpha List with custom start position',
  render: () => (
    <List type="alpha" start={9}>
      <Text>This is an alpha list item.</Text>
      <Text>This is an alpha list item.</Text>
      <Text>This is an alpha list item.</Text>
    </List>
  ),
};

export const RomanCustomStart: Story = {
  name: 'Roman List with custom start position',
  render: () => (
    <List type="roman" start={9}>
      <Text>This is a Roman list item.</Text>
      <Text>This is a Roman list item.</Text>
      <Text>This is a Roman list item.</Text>
    </List>
  ),
};

export const CascadingStyles: Story = {
  name: 'Test: Size and tone should cascade to nested lists',
  render: () => (
    <List size="large" tone="critical">
      <Stack space="medium">
        <Text>Should be large and critical.</Text>
        <List>
          <Text>Should be large and critical.</Text>
        </List>
      </Stack>
    </List>
  ),
};

export const OverrideCascadingStyles: Story = {
  name: 'Test: Cascading size and tone should be overridable',
  render: () => (
    <List size="large" tone="critical">
      <Stack space="medium">
        <Text>Should be large and critical.</Text>
        <List size="xsmall" tone="positive">
          <Text>Should be xsmall and positive.</Text>
        </List>
      </Stack>
    </List>
  ),
};

export const FlattenFragments: Story = {
  name: 'Test: Flattens fragments',
  render: () => (
    <List>
      <Text>List item.</Text>
      <>
        <Text>List item.</Text>
      </>
      <>
        <>
          <Text>List item.</Text>
          <Text>List item.</Text>
        </>
      </>
    </List>
  ),
};

export const FullWidth: Story = {
  name: 'Test: List items should be full width',
  render: () => (
    <List>
      <Placeholder height={60} />
    </List>
  ),
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: List should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <List>
        <Text>Enim elit eu et culpa non esse voluptate labore in ea.</Text>
        <Text>Exercitation incididunt consequat.</Text>
        <Text>Incididunt irure aliquip cillum occaecat irure.</Text>
      </List>
    </Stack>
  ),
};

export const LeftAlignedInCenteredText: Story = {
  name: 'Test: List should be left aligned in an element using centered text alignment',
  render: () => (
    <Box textAlign="center">
      <List>
        <Text>Enim elit eu et culpa non esse voluptate labore in ea.</Text>
        <Text>Exercitation incididunt consequat.</Text>
        <Text>Incididunt irure aliquip cillum occaecat irure.</Text>
      </List>
    </Box>
  ),
};
