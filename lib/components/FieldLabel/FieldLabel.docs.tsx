import React from 'react';
import FieldLabel from './FieldLabel';
import TextLink from '../TextLink/TextLink';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Field Label',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel id="standard">This is a field label</FieldLabel>
        </div>
      ),
    },
    {
      label: 'Field Label with secondary',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel id="secondary" secondaryLabel="Max 30 characters">
            Username
          </FieldLabel>
        </div>
      ),
    },
    {
      label: 'Field Label with tertiary label',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel
            id="tertiary"
            tertiaryLabel={<TextLink inline>Forgot password?</TextLink>}
          >
            Password
          </FieldLabel>
        </div>
      ),
    },
    {
      label: 'Field Label with all types',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel
            id="all"
            secondaryLabel="eg. Mr"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
          >
            Title
          </FieldLabel>
        </div>
      ),
    },
  ],
};

export default docs;
