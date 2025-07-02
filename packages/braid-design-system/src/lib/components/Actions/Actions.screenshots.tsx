import type { StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Button, Actions } from '../';

type Story = StoryObj<typeof Actions>;

const meta = {
  title: 'Components/Actions',
  component: Actions,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
};

export default meta;

export const Standardsize: Story = {
  name: 'Standard size',
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </>
    ),
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};

export const Smallsize: Story = {
  name: 'Small size',
  args: {
    size: 'small',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </>
    ),
  },
  parameters: {
    chromatic: {
      viewports: [320, 768],
    },
    layout: 'fullscreen',
  },
};
