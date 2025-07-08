import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Text } from '../';

import { BoxRenderer } from './BoxRenderer';

const meta = {
  title: 'Components/BoxRenderer',
  component: BoxRenderer,
  argTypes: {
    component: { control: 'text' },
    background: {
      control: 'select',
      options: ['brand', 'surface', 'neutral', 'neutralSoft'],
    },
    padding: {
      control: 'select',
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof BoxRenderer>;

export default meta;

type Story = StoryObj<typeof BoxRenderer>;

export const StandardBoxRenderer: Story = {
  name: 'Standard BoxRenderer',
  render: () => (
    <BoxRenderer component="ul" background="brand" padding="medium">
      {(className) => (
        <ul className={className}>
          <li>
            <Text baseline={false}>
              This text should be white, and it shouldn&apos;t have a visible
              bullet.
            </Text>
          </li>
        </ul>
      )}
    </BoxRenderer>
  ),
};

export const WithDivComponent: Story = {
  name: 'With Div Component',
  render: () => (
    <BoxRenderer component="div" background="neutral" padding="large">
      {(className) => (
        <div className={className}>
          <Text baseline={false}>Content rendered inside a div</Text>
        </div>
      )}
    </BoxRenderer>
  ),
};

export const WithNoPadding: Story = {
  name: 'With No Padding',
  render: () => (
    <BoxRenderer component="section" background="brand" padding="none">
      {(className) => (
        <section className={className}>
          <Text baseline={false}>Content without padding</Text>
        </section>
      )}
    </BoxRenderer>
  ),
};
