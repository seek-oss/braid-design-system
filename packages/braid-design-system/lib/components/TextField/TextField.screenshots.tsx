import React, { useState, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { IconSearch, IconPhone, TextField, TextLink, Stack } from '../';

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
          label="Label"
          id={id}
          onChange={handler}
          value="Text value"
        />
      ),
    },
    {
      label: 'TextField with default padding',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
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
            label="Label"
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
            label="Label"
            id={id}
            icon={<IconSearch />}
            placeholder="Placeholder text"
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
          label="Label"
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
          label="Label"
          id={id}
          value=""
          message="Neutral message"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with secondary label',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          secondaryLabel="Secondary"
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
          label="Label"
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with no visual label',
      Container,
      Example: ({ id, handler }) => (
        <TextField aria-label="Label" id={id} value="" onChange={handler} />
      ),
    },
    {
      label: 'TextField with description',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          secondaryLabel="Secondary"
          description="Longer description of this field"
          id={id}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with critical message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          tone="critical"
          id={id}
          value="Text value"
          message="Critical message"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with postive message',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          id={id}
          value="Text value"
          message="Positive message"
          tone="positive"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField disabled',
      Container,
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <TextField
            label="With no value or placeholder"
            id={`${id}_1`}
            value=""
            disabled={true}
            onChange={handler}
          />
          <TextField
            label="With value and no placeholder"
            id={`${id}_2`}
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <TextField
            label="With no value and a placeholder"
            id={`${id}_3`}
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <TextField
            label="With value and a placeholder"
            id={`${id}_4`}
            value="Text value"
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
        </Stack>
      ),
    },
    {
      label: 'TextField on Brand Background',
      background: 'brand',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          id={id}
          onChange={handler}
          value="Text value"
        />
      ),
    },
    {
      label: 'TextField with prefix',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          id={id}
          onChange={handler}
          prefix="Prefix"
          value="Text value"
        />
      ),
    },
    {
      label: 'TextField with icon and prefix',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          label="Label"
          id={id}
          onChange={handler}
          icon={<IconPhone />}
          prefix="Prefix"
          value="Text value"
        />
      ),
    },
    {
      label: 'TextField with character limit and no value',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          id={id}
          value=""
          onChange={handler}
          label="Label"
          characterLimit={55}
        />
      ),
    },
    {
      label: 'TextField approaching character limit (should be 5)',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          id={id}
          value="123456789_123456789_123456789_123456789_123456789_"
          onChange={handler}
          label="Label"
          characterLimit={55}
        />
      ),
    },
    {
      label: 'TextField exceeding character limit (should be -9)',
      Container,
      Example: ({ id, handler }) => (
        <TextField
          id={id}
          value="123456789123456789"
          onChange={handler}
          label="Label"
          characterLimit={9}
        />
      ),
    },
  ],
};
