import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { ButtonLink, Stack, Text } from '../';
import { TextLink } from '../TextLink/TextLink';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        Renders a semantic link that looks like a{' '}
        <TextLink href="/components/Button">Button</TextLink>.
      </Text>
      <Text>
        This component renders a native `a` element by default, but this can be
        customised via the `linkComponent` prop on{' '}
        <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
      </Text>
      <Text>
        Extends both the <TextLink href="/components/Button">Button</TextLink>{' '}
        and <TextLink href="/components/Link">Link</TextLink> component APIs,
        which means that `href` is required.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default Button Link',
      Container,
      Example: () => <ButtonLink href="#">Submit</ButtonLink>,
    },
    {
      label: 'Strong Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="strong">
          Submit
        </ButtonLink>
      ),
    },
    {
      label: 'Weak Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="weak">
          Submit
        </ButtonLink>
      ),
    },
  ],
};

export default docs;
