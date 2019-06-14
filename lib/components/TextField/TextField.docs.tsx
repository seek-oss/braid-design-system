import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextField } from './TextField';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'TextField',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Job Title"
            id={id}
            onChange={handler}
            value="Senior Developer"
          />
        </div>
      ),
    },
    {
      label: 'TextField with message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Job Title"
            id={id}
            value=""
            message="e.g. Senior Developer"
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'TextField with secondary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Title"
            secondaryLabel="Optional"
            id={id}
            value=""
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'TextField with tertiary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Title"
            secondaryLabel="Optional"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
            id={id}
            value=""
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'TextField with error',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Do you like Braid?"
            tone="critical"
            id={id}
            value="No"
            message="Answer is incorrect"
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'TextField with postive message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Do you like Braid?"
            id={id}
            value="Yes"
            message="Nice one!"
            tone="positive"
            onChange={handler}
          />
        </div>
      ),
    },
  ],
};

export default docs;
