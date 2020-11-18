import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import {
  Actions,
  Drawer,
  Button,
  Inline,
  Text,
  Stack,
  TextLink,
  Strong,
} from '..';
import { Placeholder } from '../../playroom/components';
import { DrawerContent } from './Drawer';

const makeExampleContent = ({ label }: { label?: ReactNode } = {}) => (
  <Stack space="large">
    {[...new Array(20)].map((_, i) => (
      <Placeholder key={i} height={100} width="100%" label={label} />
    ))}
  </Stack>
);

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320, 1200],
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
      storybook: false,
      gallery: false,
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
      storybook: false,
      gallery: false,
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
              {makeExampleContent()}
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Small width',
      storybook: false,
      gallery: false,
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
              {makeExampleContent()}
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Medium width',
      storybook: false,
      gallery: false,
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
              {makeExampleContent()}
            </Drawer>
          </>,
        ),
    },
    {
      label: 'Large width',
      storybook: false,
      gallery: false,
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
              {makeExampleContent()}
            </Drawer>
          </>,
        ),
    },

    // Layout examples
    {
      label: 'Default layout',
      docsSite: false,
      gallery: true,
      Example: ({ id }) => (
        <DrawerContent
          id={id}
          title="Default test"
          onClose={() => {}}
          width="medium"
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DrawerContent>
      ),
    },
    {
      label: 'Layout with a description',
      docsSite: false,
      gallery: true,
      Example: ({ id }) => (
        <DrawerContent
          id={id}
          title="Description test"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DrawerContent>
      ),
    },
    {
      label: 'Layout: Small width',
      docsSite: false,
      Example: ({ id }) => (
        <DrawerContent
          id={id}
          title="Small"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Drawer" />
        </DrawerContent>
      ),
    },
    {
      label: 'Layout: Medium width',
      docsSite: false,
      Example: ({ id }) => (
        <DrawerContent
          id={id}
          title="Medium"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Drawer" />
        </DrawerContent>
      ),
    },
    {
      label: 'Layout: Large width',
      docsSite: false,
      Example: ({ id }) => (
        <DrawerContent
          id={id}
          title="Large"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Drawer" />
        </DrawerContent>
      ),
    },
    {
      label: 'Preview animation',
      storybook: false,
      docsSite: false,
      gallery: true,
      Example: ({ getState, setState, resetState }) =>
        source(
          <>
            <Inline space="small" align="center">
              <Button onClick={() => setState('width', 'small')}>
                Open small
              </Button>
              <Button onClick={() => setState('width', 'medium')}>
                Open medium
              </Button>
              <Button onClick={() => setState('width', 'large')}>
                Open large
              </Button>
            </Inline>

            <Drawer
              id="drawer-animation-example"
              title={`A \"${getState('width')}\" drawer`}
              description={
                <Text tone="secondary">
                  Uses a {getState('width')}{' '}
                  <TextLink href="/components/ContentBlock">
                    ContentBlock
                  </TextLink>
                </Text>
              }
              width={getState('width')}
              open={getState('width')}
              onClose={() => resetState('width')}
            >
              {makeExampleContent()}
            </Drawer>
          </>,
        ),
    },
  ],
};

export default docs;
