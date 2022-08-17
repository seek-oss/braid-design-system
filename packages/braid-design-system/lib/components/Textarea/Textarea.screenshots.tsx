import React, { ReactNode, useState } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Stack, Textarea, TextLink } from '../';

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
        <Textarea id={id} value="Text value" onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Textarea with neutral message',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Label"
          message="Neutral message"
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
          label="Label"
          secondaryLabel="Secondary"
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
          label="Label"
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
        />
      ),
    },
    {
      label: 'Textarea with no visual label',
      Container,
      Example: ({ id, handler }) => (
        <Textarea id={id} value="" onChange={handler} aria-label="Label" />
      ),
    },
    {
      label: 'Textarea with error',
      Container,
      Example: ({ id, handler }) => (
        <Textarea
          id={id}
          value=""
          onChange={handler}
          label="Label"
          message="Critical message"
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
          value=""
          onChange={handler}
          label="Label"
          message="Positive message"
          tone="positive"
        />
      ),
    },
    {
      label: 'Textarea disabled',
      Container,
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <Textarea
            label="With no value or placeholder"
            id={`${id}_1`}
            value=""
            disabled={true}
            onChange={handler}
          />
          <Textarea
            label="With value and no placeholder"
            id={`${id}_2`}
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <Textarea
            label="With no value and a placeholder"
            id={`${id}_3`}
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <Textarea
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
      label: 'Textarea grow field with typing, limited to 6 lines',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            lineLimit={6}
          />
        );
      },
    },
    {
      label: 'Textarea with character limit and no value',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('');

        return (
          <Textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            characterLimit={50}
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
            label="Label"
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
            label="Label"
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
            label="Label"
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
            label="Label"
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
            label="Label"
            id={id}
            onChange={(e) => setValue(e.currentTarget.value)}
            value={value}
          />
        );
      },
    },
  ],
};
