import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import {
  Actions,
  Button,
  TextLink,
  Text,
  Strong,
  IconSend,
  IconDelete,
  Card,
  Stack,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Card rounded>
        <Actions>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      </Card>,
    ),
  alternatives: [
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
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
        <Text>
          You can customise the size of the actions via the{' '}
          <Strong>size</Strong> prop, which accepts either{' '}
          <Strong>standard</Strong> or <Strong>small.</Strong>
        </Text>
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
    {
      label: 'Icons',
      description: (
        <Text>
          You can add icons to{' '}
          <TextLink href="/components/Button">Button</TextLink> elements by
          nesting icons inside. The size of the icon will adjust automatically
          based on its surrounding context.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Standard size
              </Text>
              <Actions>
                <Button>
                  <IconSend /> Send
                </Button>
                <Button variant="transparent">Cancel</Button>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Actions size="small">
                <Button>
                  <IconSend /> Send
                </Button>
                <Button variant="transparent">Cancel</Button>
              </Actions>
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Destructive actions',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the{' '}
          <TextLink href="/components/Button">Button</TextLink> element’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Actions>
            <Button tone="critical">
              <IconDelete /> Delete
            </Button>
            <Button variant="transparent">Cancel</Button>
          </Actions>,
        ),
    },
  ],
};

export default docs;
