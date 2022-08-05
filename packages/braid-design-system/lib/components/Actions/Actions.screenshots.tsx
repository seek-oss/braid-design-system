import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Button } from '../../components';
import { Actions } from './Actions';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Standard Actions',
      Example: () => (
        <Actions>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
    {
      label: 'Small Actions',
      Example: () => (
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
  ],
};
