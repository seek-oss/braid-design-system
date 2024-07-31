import React from 'react';
import type { ComponentDocs } from 'site/types';
import source from '@braid-design-system/source.macro';
import { Actions, Button, TextLink, Text, Strong, Stack } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Actions>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button variant="transparent">Button 3</Button>
      </Actions>,
    ),
  alternatives: [
    {
      name: 'Inline',
      description: 'For laying out flowing content that is allowed to wrap.',
    },
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
  ],
  additional: [
    {
      label: 'Sizes',
      description: (
        <>
          <Text>
            The size of all the buttons within an <Strong>Actions</Strong>{' '}
            component can be controlled uniformly via the <Strong>size</Strong>{' '}
            prop, which accepts either <Strong>standard</Strong> or{' '}
            <Strong>small.</Strong>
          </Text>
          <Text>
            The specified <Strong>size</Strong> will also be applied to any{' '}
            <TextLink href="/components/Button#icons">icons</TextLink> if
            provided.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Actions>
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Actions size="small">
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
          </Stack>,
        ),
    },
  ],
};

export default docs;
