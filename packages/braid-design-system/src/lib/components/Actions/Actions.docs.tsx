import React from 'react';
import type { ComponentDocs } from 'site/types';
import source from '@braid-design-system/source.macro';
import {
  Actions,
  Button,
  TextLink,
  Text,
  Strong,
  Stack,
  Notice,
  Tiles,
  Inline,
} from '../';
import { actionsSpace } from './Actions';

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
  description: (
    <Text>
      The <Strong>Actions</Strong> component standardises the responsive layout
      and spacing for groups of{' '}
      <TextLink href="/components/Button">Button</TextLink> components.
    </Text>
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
      label: 'Layout',
      description: (
        <>
          <Text>
            The buttons are arranged using a responsive{' '}
            <TextLink href="/components/Inline">Inline</TextLink> component.{' '}
            <Strong>On mobile</Strong>, the buttons are full width, and stacked
            vertically. <Strong>Above mobile</Strong>, the buttons are the width
            of their content sitting side by side, wrapping when necessary.
          </Text>

          <Notice tone="info">
            <Text>
              For consistency, it is recommended to always lead with the primary
              action.
            </Text>
          </Notice>
        </>
      ),
      code: false,
      Example: () =>
        source(
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                On mobile
              </Text>
              <Stack space={actionsSpace}>
                <Button>Primary</Button>
                <Button variant="transparent">Secondary</Button>
              </Stack>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Above mobile
              </Text>
              <Inline space={actionsSpace}>
                <Button>Primary</Button>
                <Button variant="transparent">Secondary</Button>
              </Inline>
            </Stack>
          </Tiles>,
        ),
    },
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
          <Tiles space="xlarge" columns={[1, 2]}>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Standard size
              </Text>
              <Actions>
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                Small size
              </Text>
              <Actions size="small">
                <Button>Button 1</Button>
                <Button variant="transparent">Button 2</Button>
              </Actions>
            </Stack>
          </Tiles>,
        ),
    },
  ],
};

export default docs;
