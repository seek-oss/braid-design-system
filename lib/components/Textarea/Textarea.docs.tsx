import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Textarea } from './Textarea';
import { TextLink } from '../TextLink/TextLink';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Textarea',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="Senior Developer"
          onChange={handler}
          label="Job Title"
        />
      ),
    },
    {
      label: 'Textarea with message',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Job Title"
          message="e.g. Senior Developer"
        />
      ),
    },
    {
      label: 'Textarea with secondary label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Title"
          secondaryLabel="Optional"
        />
      ),
    },
    {
      label: 'Textarea with tertiary label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
        />
      ),
    },
    {
      label: 'Textarea with error',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="No"
          onChange={handler}
          label="Do you like Braid?"
          message="Answer is incorrect"
          tone="critical"
        />
      ),
    },
    {
      label: 'Textarea with postive message',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="Yes"
          onChange={handler}
          label="Do you like Braid?"
          message="Nice one!"
          tone="positive"
        />
      ),
    },
    {
      label: 'Textarea with a limit',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Do you like Braid?"
          lineLimit={100}
        />
      ),
    },
    {
      label: 'Textarea with value exceeding limit',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value="Yes I do"
          onChange={handler}
          label="Do you like Braid?"
          lineLimit={5}
        />
      ),
    },
  ],
};

export default docs;
