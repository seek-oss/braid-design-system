import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Actions } from './Actions';
import { Button } from '../Button/Button';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Actions with Strong Button and TextLink',
      render: ({ handler }) => (
        <Actions>
          <Button onClick={handler} weight="strong">
            Strong
          </Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Actions with Regular Button and Weak Button',
      render: ({ handler }) => (
        <Actions>
          <Button onClick={handler} weight="regular">
            Regular
          </Button>
          <Button onClick={handler} weight="weak">
            Weak
          </Button>
        </Actions>
      ),
    },
    {
      label: 'Actions with Weak Buttons and Regular Button',
      render: ({ handler }) => (
        <Actions>
          <Button onClick={handler} weight="weak">
            Weak
          </Button>
          <Button onClick={handler} weight="weak">
            Weak
          </Button>
          <Button onClick={handler} weight="regular">
            Regular
          </Button>
        </Actions>
      ),
    },
  ],
};

export default docs;
