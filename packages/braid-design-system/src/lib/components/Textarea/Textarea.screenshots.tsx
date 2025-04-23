import { type ReactNode, useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Stack, Textarea, TextLink } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Textarea',
      Container,
      Example: ({ handler }) => (
        <Textarea value="Text value" onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Textarea with neutral message',
      Container,
      Example: ({ handler }) => (
        <Textarea
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
      Example: ({ handler }) => (
        <Textarea
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
      Example: ({ handler }) => (
        <Textarea
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
      Example: ({ handler }) => (
        <Textarea value="" onChange={handler} aria-label="Label" />
      ),
    },
    {
      label: 'Textarea with a description and no visual label',
      Container,
      Example: ({ handler }) => (
        <Textarea
          aria-label="Label"
          description="Longer description of this field"
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'Textarea with error',
      Container,
      Example: ({ handler }) => (
        <Textarea
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
      Example: ({ handler }) => (
        <Textarea
          value=""
          onChange={handler}
          label="Label"
          message="Positive message"
          tone="positive"
        />
      ),
    },
    {
      label: 'Textarea with caution message',
      Container,
      Example: ({ handler }) => (
        <Textarea
          value=""
          onChange={handler}
          label="Label"
          message="Caution message"
          tone="caution"
        />
      ),
    },
    {
      label: 'Textarea disabled',
      Container,
      Example: ({ handler }) => (
        <Stack space="gutter">
          <Textarea
            label="With no value or placeholder"
            value=""
            disabled={true}
            onChange={handler}
          />
          <Textarea
            label="With value and no placeholder"
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <Textarea
            label="With no value and a placeholder"
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <Textarea
            label="With value and a placeholder"
            value="Text value"
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <Textarea
            label="With critical tone"
            value=""
            disabled={true}
            tone="critical"
            onChange={handler}
          />
          <Textarea
            label="With critical tone and message"
            value=""
            disabled={true}
            tone="critical"
            message="Message"
            onChange={handler}
          />
        </Stack>
      ),
    },
    {
      label: 'Textarea grow field with typing, limited to 6 lines',
      Container,
      Example: () => {
        const [value, setValue] = useState('');

        return (
          <Textarea
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
      Example: () => {
        const [value, setValue] = useState('');

        return (
          <Textarea
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
      Example: () => {
        const [value, setValue] = useState(
          'The text is nearing the 50 character limit',
        );

        return (
          <Textarea
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
      Example: () => {
        const [value, setValue] = useState(
          '12345678910 The character limit is 9 so the highlighting should start from "10"',
        );

        return (
          <Textarea
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
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text highlighting a range',
        );

        return (
          <Textarea
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
      label: 'Textarea highlighting a range in caution',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text highlighting a range',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            tone="caution"
            description="Characters 9-22 are invalid"
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Within character limit with highlight range and no tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text within the limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            description="Should show highlighted range"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label:
        'Within character limit with highlight range and explicit critical tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text within the limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            tone="critical"
            description="Should show highlighted range"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Within character limit with highlight range and caution tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text within the limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            tone="caution"
            description="Should show highlighted range"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Exceeding character limit with highlight range and no tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text exceeding the specified 50 character limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            description="Should only highlight exceeding characters"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label:
        'Exceeding character limit with highlight range and explicit critical tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text exceeding the specified 50 character limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            tone="critical"
            description="Should only highlight exceeding characters"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Exceeding character limit with highlight range and caution tone',
      Container,
      Example: () => {
        const [value, setValue] = useState(
          'The long piece of text exceeding the specified 50 character limit',
        );

        return (
          <Textarea
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            label="Label"
            tone="caution"
            description="Should only highlight exceeding characters"
            characterLimit={50}
            highlightRanges={[{ start: 9, end: 22 }]}
          />
        );
      },
    },
    {
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <Textarea label="Label" onChange={handler} value="Text value" />
        </BackgroundContrastTest>
      ),
    },
  ],
};
