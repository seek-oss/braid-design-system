import { type ReactNode, useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { IconSearch, IconPhone, TextField, TextLink, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextField',
      Container,
      Example: ({ handler }) => (
        <TextField label="Label" onChange={handler} value="Text value" />
      ),
    },
    {
      label: 'TextField with default padding',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          onChange={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      ),
    },
    {
      label: 'TextField with clear button',
      Container,
      Example: () => {
        const [value, setValue] = useState('Clear me');

        return (
          <TextField
            label="Label"
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
      Example: () => {
        const [value, setValue] = useState('');

        return (
          <TextField
            label="Label"
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
      Example: ({ handler }) => (
        <TextField
          label="Label"
          onChange={handler}
          onClear={handler}
          value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      ),
    },
    {
      label: 'TextField with message',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          value=""
          message="Neutral message"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with secondary label',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          secondaryLabel="Secondary"
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with tertiary label',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with no visual label',
      Container,
      Example: ({ handler }) => (
        <TextField aria-label="Label" value="" onChange={handler} />
      ),
    },
    {
      label: 'TextField with a description and no visual label',
      Container,
      Example: ({ handler }) => (
        <TextField
          aria-label="Label"
          description="Longer description of this field"
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with description',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          secondaryLabel="Secondary"
          description="Longer description of this field"
          value=""
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with critical message',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          tone="critical"
          value="Text value"
          message="Critical message"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with positive message',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          value="Text value"
          message="Positive message"
          tone="positive"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField with caution message',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          value="Text value"
          message="Caution message"
          tone="caution"
          onChange={handler}
        />
      ),
    },
    {
      label: 'TextField disabled',
      Container,
      Example: ({ handler }) => (
        <Stack space="gutter">
          <TextField
            label="With no value or placeholder"
            value=""
            disabled={true}
            onChange={handler}
          />
          <TextField
            label="With value and no placeholder"
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <TextField
            label="With no value and a placeholder"
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <TextField
            label="With value and a placeholder"
            value="Text value"
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <TextField
            label="With critical tone"
            value=""
            disabled={true}
            tone="critical"
            onChange={handler}
          />
          <TextField
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
      label: 'TextField with prefix',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
          onChange={handler}
          prefix="Prefix"
          value="Text value"
        />
      ),
    },
    {
      label: 'TextField with icon and prefix',
      Container,
      Example: ({ handler }) => (
        <TextField
          label="Label"
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
      Example: ({ handler }) => (
        <TextField
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
      Example: ({ handler }) => (
        <TextField
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
      Example: ({ handler }) => (
        <TextField
          value="123456789123456789"
          onChange={handler}
          label="Label"
          characterLimit={9}
        />
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <TextField label="Label" onChange={handler} value="Text value" />
        </BackgroundContrastTest>
      ),
    },
  ],
};
