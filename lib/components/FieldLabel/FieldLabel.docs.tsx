import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { FieldLabel } from './FieldLabel';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Field Label',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel id="standard" label="This is a field label" />
        </div>
      ),
    },
    {
      label: 'Field Label with secondary',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel
            id="secondary"
            label="Username"
            secondaryLabel="Max 30 characters"
          />
        </div>
      ),
    },
    {
      label: 'Field Label with tertiary label',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel
            id="tertiary"
            label="Password"
            tertiaryLabel={<TextLink inline>Forgot password?</TextLink>}
          />
        </div>
      ),
    },
    {
      label: 'Field Label with all types',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <FieldLabel
            id="all"
            label="Title"
            secondaryLabel="Optional"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
          />
        </div>
      ),
    },
  ],
};

export default docs;
