import React from 'react';
import TextArea from './TextArea';
import TextLink from '../TextLink/TextLink';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'TextArea',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
            id={id}
            value="Senior Developer"
            onChange={handler}
            label="Job Title"
          />
        </div>
      ),
    },
    {
      label: 'TextArea with message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
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
      label: 'TextArea with secondary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
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
      label: 'TextArea with tertiary label',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
            id={id}
            value=""
            onChange={handler}
            label="Title"
            secondaryLabel="Optional"
            tertiaryLabel={<TextLink inline>Help?</TextLink>}
          />
        </div>
      ),
    },
    {
      label: 'TextArea with error',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
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
      label: 'TextArea with postive message',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
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
      label: 'TextArea with a limit',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
            id={id}
            value=""
            onChange={handler}
            label="Do you like Braid?"
            limit={100}
          />
        </div>
      ),
    },
    {
      label: 'TextArea with value exceeding limit',
      render: ({ id, handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <TextArea
            id={id}
            value="Yes I do"
            onChange={handler}
            label="Do you like Braid?"
            limit={5}
          />
        </div>
      ),
    },
  ],
};

export default docs;
