import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Actions, Drawer, Button, Text, Stack, TextLink, Strong } from '..';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        The Drawer component provides a way to display a nested screen within
        the context of another experience. In order to keep experiences simple,
        Drawers and <TextLink href="/components/Dialog">Dialogs</TextLink>{' '}
        <Strong>cannot be nested</Strong> inside one another.
      </Text>
      <Text>
        Drawers should only be used as a last resort when other in-flow
        alternatives are not suitable.
      </Text>
      <Text>
        It’s recommended that you connect the Drawer’s open state to your router
        so that it can be closed via the browser’s back button.
      </Text>
      <Text tone="secondary">
        If you’re only displaying a small amount of content, consider using a{' '}
        <TextLink href="/components/Dialog">Dialog.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('drawer')}>
                Open default drawer
              </Button>
            </Actions>

            <Drawer
              id="default"
              title="Default Drawer Example"
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'With additional description',
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('drawer')}>
                Open drawer with description
              </Button>
            </Actions>

            <Drawer
              id="description"
              title="Drawer with description"
              description={
                <Text tone="secondary">
                  More context to describe this task.
                </Text>
              }
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Small width',
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('drawer')}>
                Open small drawer
              </Button>
            </Actions>

            <Drawer
              id="small"
              title="Small Drawer"
              description={
                <Text tone="secondary">
                  Uses a small{' '}
                  <TextLink href="/components/ContentBlock">
                    ContentBlock
                  </TextLink>
                </Text>
              }
              width="small"
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Medium width',
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('drawer')}>
                Open medium drawer
              </Button>
            </Actions>

            <Drawer
              id="medium"
              title="Medium Drawer"
              description={
                <Text tone="secondary">
                  Uses a medium{' '}
                  <TextLink href="/components/ContentBlock">
                    ContentBlock
                  </TextLink>
                </Text>
              }
              width="medium"
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Large width',
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('drawer')}>
                Open large drawer
              </Button>
            </Actions>

            <Drawer
              id="large"
              title="Large Drawer"
              description={
                <Text tone="secondary">
                  Uses a large{' '}
                  <TextLink href="/components/ContentBlock">
                    ContentBlock
                  </TextLink>
                </Text>
              }
              width="large"
              open={getState('drawer')}
              onClose={() => toggleState('drawer')}
            >
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
              <Placeholder height={100} width="100%" />
            </Drawer>
          </>,
        ),
    },
  ],
};

export default docs;
