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
      <Card>
        <Actions>
          <Button>Regular Button</Button>
          <Button weight="weak">Weak Button</Button>
          <TextLink href="#">TextLink</TextLink>
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
                <Button>Regular Button</Button>
                <Button weight="weak">Weak Button</Button>
                <TextLink href="#">TextLink</TextLink>
              </Actions>
            </Stack>
            <Stack space="small">
              <Text tone="secondary" weight="strong">
                Small size
              </Text>
              <Actions size="small">
                <Button>Regular Button</Button>
                <Button weight="weak">Weak Button</Button>
                <TextLink href="#">TextLink</TextLink>
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
          <TextLink href="/components/Button">Button</TextLink> and{' '}
          <TextLink href="/components/TextLink">TextLink</TextLink> elements by
          nesting icon elements inside. The size of the icon will adjust
          automatically based on its surrounding context.
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
                <TextLink href="#">Cancel</TextLink>
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
                <TextLink href="#">Cancel</TextLink>
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
            <TextLink href="#">Cancel</TextLink>
          </Actions>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <Text>
          When nested inside Actions,{' '}
          <TextLink href="/components/TextLink">TextLink</TextLink> is given a
          more prominent treatment to visually align with{' '}
          <TextLink href="/components/Button">Button</TextLink>.
        </Text>
      ),
    },
  ],
};

export default docs;
