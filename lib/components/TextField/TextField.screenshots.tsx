import React, { useState, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { IconSearch, IconPhone, TextField, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
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
      label: 'TextField with description',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Title"
          secondaryLabel="Optional"
          description="Longer description of this field"
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
    {
      label: 'TextField with prefix',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Amount"
          id={id}
          onChange={handler}
          prefix="AUD $"
          value="1000"
        />
      ),
    },
    {
      label: 'TextField with icon and prefix',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Phone number"
          id={id}
          onChange={handler}
          icon={<IconPhone />}
          prefix="+61"
          value="411 111 111"
        />
      ),
    },
  ],
};
