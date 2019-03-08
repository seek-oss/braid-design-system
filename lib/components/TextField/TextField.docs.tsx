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
            label="First name"
            id={id}
            onChange={() => {}}
            value="Burt"
          />
        </div>
      ),
    },
    {
      label: 'TextField with message',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Nickname"
            id={id}
            value="No"
            message="e.g. Gandalf"
            onChange={() => {}}
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
            secondaryLabel="eg. Mr"
            id={id}
            value=""
            onChange={() => {}}
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
            secondaryLabel="eg. Mr"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
            id={id}
            value=""
            onChange={() => {}}
          />
        </div>
      ),
    },
    {
      label: 'TextField with error',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextField
            label="Do you like pineapple pizza?"
            tone="critical"
            id={id}
            value="No"
            message="Answer is incorrect"
            onChange={() => {}}
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
            value="Yeah"
            message="Nice one!"
            tone="positive"
            onChange={() => {}}
          />
        </div>
      ),
    },
  ],
};

export default docs;
