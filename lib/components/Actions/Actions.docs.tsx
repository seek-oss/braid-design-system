import React from 'react';
import Actions from './Actions';
import Button from '../Button/Button';
import TextLink from '../TextLink/TextLink';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      render: () => (
        <Actions>
          <Button weight="strong">Strong</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      render: () => (
        <Actions>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      render: () => (
        <Actions>
          <Button weight="weak">Weak</Button>
          <Button weight="weak">Weak</Button>
          <Button weight="regular">Regular</Button>
        </Actions>
      ),
    },
  ],
};

export default docs;
