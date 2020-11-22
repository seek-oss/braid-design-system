import React, { useState } from 'react';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';
import { Disclosure, Stack, Text, TextLink } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#disclosure">
          WAI-ARIA Disclosure Pattern.
        </TextLink>
      </Text>
      <Text>
        Disclosures manage their own state internally by default. If you&rsquo;d
        like to take control of the state yourself, you can pass
        &ldquo;expanded&rdquo; and &ldquo;onToggle&rdquo; props.
      </Text>
      <Text tone="secondary">
        If you want a more prominent visual treatment, check out{' '}
        <TextLink href="/components/Accordion">Accordion.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Collapsed Disclosure',
      Example: ({ id }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Expanded Disclosure',
      Example: ({ id }) => {
        const [expanded, setExpanded] = useState(true);

        return (
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Text>Content</Text>
          </Disclosure>
        );
      },
    },
    {
      label: 'Expanded Disclosure with custom space',
      Example: ({ id }) => {
        const [expanded, setExpanded] = useState(true);

        return (
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            space="small"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Text>Content</Text>
          </Disclosure>
        );
      },
    },
    {
      label: 'Disclosure with controlled state',
      playroom: false,
      Example: ({ id }) => {
        const [expanded, setExpanded] = React.useState(false);

        return (
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={expanded}
            onToggle={setExpanded}
          >
            <Text>Content</Text>
          </Disclosure>
        );
      },
      code: dedent`
        const Example = () => {
          const [expanded, setExpanded] = useState(false);

          return (
            <Disclosure
              id="id"
              expandLabel="Show content"
              collapseLabel="Hide content"
              expanded={expanded}
              onToggle={setExpanded}
            >
              <Text>Content</Text>
            </Disclosure>
          );
        };
      `,
    },
  ],
};

export default docs;
