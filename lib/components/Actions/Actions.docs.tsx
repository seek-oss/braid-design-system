import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Actions, Button, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      Example: () => (
        <Actions>
          <Button weight="strong">Strong</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      Example: () => (
        <Actions>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      Example: () => (
        <Actions>
          <Button weight="weak">Weak</Button>
          <Button weight="weak">Weak</Button>
          <Button weight="regular">Regular</Button>
        </Actions>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard Button, Text Link',
      code: (
        <Actions>
          <Button>Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      ),
    },
    {
      name: 'Strong Button, Text Link',
      code: (
        <Actions>
          <Button weight="strong">Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      ),
    },
    {
      name: 'Weak Button, Text Link',
      code: (
        <Actions>
          <Button weight="weak">Submit</Button>
          <TextLink href="#">Cancel</TextLink>
        </Actions>
      ),
    },
  ],
};

export default docs;
