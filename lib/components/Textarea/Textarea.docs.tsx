import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Textarea } from './Textarea';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Textarea',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value="Senior Developer"
            onChange={handler}
            label="Job Title"
          />
        </div>
      ),
    },
    {
      label: 'Textarea with message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value=""
            onChange={handler}
            label="Job Title"
            message="e.g. Senior Developer"
          />
        </div>
      ),
    },
    {
      label: 'Textarea with secondary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value=""
            onChange={handler}
            label="Title"
            secondaryLabel="Optional"
          />
        </div>
      ),
    },
    {
      label: 'Textarea with tertiary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value=""
            onChange={handler}
            label="Title"
            secondaryLabel="Optional"
            tertiaryLabel={<TextLink>Help?</TextLink>}
          />
        </div>
      ),
    },
    {
      label: 'Textarea with error',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value="No"
            onChange={handler}
            label="Do you like Braid?"
            message="Answer is incorrect"
            tone="critical"
          />
        </div>
      ),
    },
    {
      label: 'Textarea with postive message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value="Yes"
            onChange={handler}
            label="Do you like Braid?"
            message="Nice one!"
            tone="positive"
          />
        </div>
      ),
    },
    {
      label: 'Textarea with a limit',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value=""
            onChange={handler}
            label="Do you like Braid?"
            lineLimit={100}
          />
        </div>
      ),
    },
    {
      label: 'Textarea with value exceeding limit',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Textarea
            id={id}
            value="Yes I do"
            onChange={handler}
            label="Do you like Braid?"
            lineLimit={5}
          />
        </div>
      ),
    },
  ],
};

export default docs;
