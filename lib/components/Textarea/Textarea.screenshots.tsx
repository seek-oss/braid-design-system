import React, { ReactNode, useState } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Textarea, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
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
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
        />
      ),
    },
    {
      label: 'Textarea with no visual label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea id={id} value="" onChange={handler} aria-label="Title" />
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
      label: 'Textarea with positive message',
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
      label: 'Textarea grow field with typing, limited to 6 lines',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            lineLimit={6}
          />
        );
      },
    },
    {
      label: 'Textarea nearing character limit',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          'The text is nearing the 50 character limit',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            characterLimit={50}
          />
        );
      },
    },
    {
      label: 'Textarea exceeding character limit',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          '12345678910 The character limit is 9 so the highlighting should start from "10"',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            characterLimit={9}
          />
        );
      },
    },
    {
      label: 'Textarea highlighting a range',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          'The long piece of text highlighting a range',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            description="Characters 9-22 are invalid"
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Textarea highlighting a while range exceeding character limit',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState(
          'The long piece of text exceeding the specified 50 character limit',
        );

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Do you like Braid?"
            description="Characters 9-22 are invalid"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Textarea on Brand Background',
      background: 'brand',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <Textarea
            label="Do you like Braid?"
            id={id}
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
        );
      },
    },
  ],
};
