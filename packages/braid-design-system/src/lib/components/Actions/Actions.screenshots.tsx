import type { StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Button, Actions } from '../';

type Story = StoryObj<typeof Actions>;

const meta = {
  title: 'Components/Actions',
  component: Actions,
  parameters: {
    // screenshotOnlyInWireframe: false,
    parameters: {
      chromatic: {
        modes: makeBraidModes({ viewports: ['xsmall', 'small'] }),
      },
    },
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
};
