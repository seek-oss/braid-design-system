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
