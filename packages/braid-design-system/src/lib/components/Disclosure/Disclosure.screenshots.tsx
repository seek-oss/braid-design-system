import React, { type ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Disclosure, Stack, Text } from '../';
import { Box } from '../Box/Box';

import { textSizeUntrimmed } from '../../css/typography.css';

const Container = ({ children }: { children: ReactNode }) => (
  <Box style={{ maxWidth: 250 }}>{children}</Box>
);

const textSizes = Object.keys(textSizeUntrimmed) as Array<
  keyof typeof textSizeUntrimmed
>;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Collapsed',
      Example: ({ id, handler }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
          expanded={false}
          onToggle={handler}
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Expanded',
      Example: ({ id, handler }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
          expanded={true}
          onToggle={handler}
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Expanded with custom space',
      Example: ({ id, handler }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
          space="small"
          expanded={true}
          onToggle={handler}
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Weak weight',
      Example: ({ id, handler }) => (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
          weight="weak"
          expanded={true}
          onToggle={handler}
        >
          <Text>Content</Text>
        </Disclosure>
      ),
    },
    {
      label: 'Inline and collapsed',
      Container,
      Example: ({ id, handler }) => (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper interdum nibh quis viverra. Nullam ac turpis erat. Cras non
          venenatis lacus. In hac habitasse platea dictumst.
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={false}
            onToggle={handler}
          >
            Vestibulum fringilla, leo at fringilla luctus, risus erat pretium
            eros, in sodales dolor velit at sem.
          </Disclosure>
        </Text>
      ),
    },
    {
      label: 'Inline and expanded',
      Container,
      Example: ({ id, handler }) => (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper interdum nibh quis viverra. Nullam ac turpis erat. Cras non
          venenatis lacus. In hac habitasse platea dictumst.
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={true}
            onToggle={handler}
          >
            Vestibulum fringilla, leo at fringilla luctus, risus erat pretium
            eros, in sodales dolor velit at sem.
          </Disclosure>
        </Text>
      ),
    },
    {
      label: 'Inline, expanded with custom space',
      Container,
      Example: ({ id, handler }) => (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper interdum nibh quis viverra. Nullam ac turpis erat. Cras non
          venenatis lacus. In hac habitasse platea dictumst.
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            space="xxsmall"
            expanded={true}
            onToggle={handler}
          >
            Vestibulum fringilla, leo at fringilla luctus, risus erat pretium
            eros, in sodales dolor velit at sem.
          </Disclosure>
        </Text>
      ),
    },
    {
      label: 'Inline, collapsed with trailing text',
      Container,
      Example: ({ id, handler }) => (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper interdum nibh quis viverra. Nullam ac turpis erat. Cras non
          venenatis lacus. In hac habitasse platea dictumst.
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            space="xxsmall"
            expanded={false}
            onToggle={handler}
          >
            Vestibulum fringilla, leo at fringilla luctus, risus erat pretium
            eros, in sodales dolor velit at sem.
          </Disclosure>
          . Curabitur cursus efficitur dui congue facilisis. Nam fermentum nulla
          vel nunc auctor facilisis. Quisque neque sapien, aliquam eget eros id,
          facilisis sodales nisl.
        </Text>
      ),
    },
    {
      label: 'Inline, expanded with trailing text',
      Container,
      Example: ({ id, handler }) => (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          semper interdum nibh quis viverra. Nullam ac turpis erat. Cras non
          venenatis lacus. In hac habitasse platea dictumst.
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
            space="xxsmall"
            expanded={true}
            onToggle={handler}
          >
            Vestibulum fringilla, leo at fringilla luctus, risus erat pretium
            eros, in sodales dolor velit at sem.
          </Disclosure>
          Curabitur cursus efficitur dui congue facilisis. Nam fermentum nulla
          vel nunc auctor facilisis. Quisque neque sapien, aliquam eget eros id,
          facilisis sodales nisl.
        </Text>
      ),
    },
    {
      label: 'Sizes and default spacing',
      Example: ({ id, handler }) => (
        <Stack space="large">
          {textSizes.map((size) => (
            <Disclosure
              key={size}
              id={`${id}_${size}`}
              expandLabel={`${size.charAt(0).toUpperCase()}${size.slice(
                1,
              )} size`}
              size={size}
              expanded={true}
              onToggle={handler}
            >
              <Text>Defaults to {size} text size</Text>
            </Disclosure>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Inline: Sizes and default spacing',
      Example: ({ id, handler }) => (
        <Stack space="large">
          {textSizes.map((size) => (
            <Text size={size} key={size}>
              Inline disclosure in{' '}
              <Disclosure
                id={`${id}_${size}`}
                expandLabel={`${size} size`}
                expanded={true}
                onToggle={handler}
              >
                Defaults to {size} text size
              </Disclosure>
            </Text>
          ))}
        </Stack>
      ),
    },
  ],
};
