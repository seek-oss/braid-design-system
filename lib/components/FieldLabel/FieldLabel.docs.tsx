import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { FieldLabel } from './FieldLabel';
import { TextLink } from '../TextLink/TextLink';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Field Label',
      Container,
      render: () => <FieldLabel htmlFor="id" label="This is a field label" />,
    },
    {
      label: 'Field Label with secondary',
      Container,
      render: () => (
        <FieldLabel
          htmlFor="id"
          label="Username"
          secondaryLabel="Max 30 characters"
        />
      ),
    },
    {
      label: 'Field Label with tertiary label',
      Container,
      render: () => (
        <FieldLabel
          htmlFor="id"
          label="Password"
          tertiaryLabel={<TextLink>Forgot password?</TextLink>}
        />
      ),
    },
    {
      label: 'Field Label with all types',
      Container,
      render: () => (
        <FieldLabel
          htmlFor="id"
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink>Help?</TextLink>}
        />
      ),
    },
  ],
};

export default docs;
