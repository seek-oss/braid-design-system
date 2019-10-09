import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextField } from './TextField';
import { TextLink } from '../TextLink/TextLink';
import { Box } from '../Box/Box';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'TextField',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          value="Senior Developer"
        />
      ),
    },
    {
      label: 'TextField with message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          value=""
          message="e.g. Senior Developer"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with secondary label',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Title"
          secondaryLabel="Optional"
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with tertiary label',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with error',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Do you like Braid?"
          tone="critical"
          id={id}
          value="No"
          message="Answer is incorrect"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with postive message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Do you like Braid?"
          id={id}
          value="Yes"
          message="Nice one!"
          tone="positive"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField on Brand Background',
      Container,
      Example: ({ id, handler }) => (
        <Box background="brand" padding="small">
          <TextField
            label="Job Title"
            id={id}
            onChange={handler}
            value="Senior Developer"
            reserveMessageSpace={false}
          />
        </Box>
      ),
    },
  ],
};

export default docs;
