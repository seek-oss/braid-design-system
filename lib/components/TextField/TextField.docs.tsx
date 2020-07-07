import React, { useState, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { IconSearch, TextField, TextLink } from '../';
import { TextField as PlayroomTextField } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
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
      docsSite: false,
      label: 'TextField with default padding',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      ),
    },
    {
      label: 'TextField with clear button',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('Clear me');

        return (
          <TextField
            label="Job Title"
            id={id}
            onChange={(e) => setValue(e.currentTarget.value)}
            onClear={() => setValue('')}
            value={value}
          />
        );
      },
    },
    {
      label: 'TextField with icon',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <TextField
            label="Job Title"
            id={id}
            icon={<IconSearch />}
            placeholder="Enter a job title"
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
        );
      },
    },
    {
      docsSite: false,
      label: 'TextField with clear button padding',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Job Title"
          id={id}
          onChange={handler}
          onClear={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
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
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
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
      background: 'brand',
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
  ],
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomTextField label="Label" />,
    },
    {
      name: 'Optional',
      code: <PlayroomTextField label="Label" secondaryLabel="Optional" />,
    },
    {
      name: 'With error',
      code: (
        <PlayroomTextField label="Label" tone="critical" message="Required" />
      ),
    },
    {
      name: 'With description',
      code: (
        <PlayroomTextField
          label="Label"
          description="More detailed description of field."
        />
      ),
    },
    {
      name: 'With icon',
      code: <PlayroomTextField icon={<IconSearch />} placeholder="Search" />,
    },
    {
      name: 'With tertiary label',
      code: (
        <PlayroomTextField
          label="Label"
          tertiaryLabel={<TextLink href="#">Help</TextLink>}
        />
      ),
    },
  ],
};

export default docs;
