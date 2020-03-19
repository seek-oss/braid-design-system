import * as React from 'react';
import { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { FieldLabel, TextLink } from '../';
import { FieldLabel as PlayroomFieldLabel } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Field Label',
      Container,
      Example: ({ id }) => (
        <FieldLabel htmlFor={id} label="This is a field label" />
      ),
    },
    {
      label: 'Field Label with secondary',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Username"
          secondaryLabel="Max 30 characters"
        />
      ),
    },
    {
      label: 'Field Label with tertiary label',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Password"
          tertiaryLabel={<TextLink>Forgot password?</TextLink>}
        />
      ),
    },
    {
      label: 'Field Label with all types',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
        />
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomFieldLabel label="Label" />,
    },
    {
      name: 'Standard with secondary label',
      code: <PlayroomFieldLabel label="Label" secondaryLabel="Optional" />,
    },
    {
      name: 'Standard with tertiary label',
      code: (
        <PlayroomFieldLabel
          label="Label"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
        />
      ),
    },
  ],
};

export default docs;
