import React from 'react';
import TextField from './TextField';
import TextLink from '../TextLink/TextLink';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'TextField',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Job Title"
            id={id}
            onChange={() => {
              /*...*/
            }}
            value="Senior Developer"
          />
        </div>
      ),
    },
    {
      label: 'TextField with message',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Job Title"
            id={id}
            value=""
            message="e.g. Senior Developer"
            onChange={() => {
              /*...*/
            }}
          />
        </div>
      ),
    },
    {
      label: 'TextField with secondary label',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Title"
            secondaryLabel="Optional"
            id={id}
            value=""
            onChange={() => {
              /*...*/
            }}
          />
        </div>
      ),
    },
    {
      label: 'TextField with tertiary label',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Title"
            secondaryLabel="Optional"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
            id={id}
            value=""
            onChange={() => {
              /*...*/
            }}
          />
        </div>
      ),
    },
    {
      label: 'TextField with error',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Do you like Braid?"
            tone="critical"
            id={id}
            value="No"
            message="Answer is incorrect"
            onChange={() => {
              /*...*/
            }}
          />
        </div>
      ),
    },
    {
      label: 'TextField with postive message',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Do you like Braid?"
            id={id}
            value="Yes"
            message="Nice one!"
            tone="positive"
            onChange={() => {
              /*...*/
            }}
          />
        </div>
      ),
    },
  ],
};

export default docs;
