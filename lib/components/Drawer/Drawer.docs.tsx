import React, { useState, Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Actions, Drawer, Button, Text, Stack, TextLink, Strong } from '..';
import {
  Placeholder,
  Drawer as PlayroomDrawer,
} from '../../playroom/components';

const makeExampleContent = ({ label }: { label?: ReactNode } = {}) => (
  <Stack space="large">
    {[...new Array(20)].map((_, i) => (
      <Placeholder key={i} height={100} width="100%" label={label} />
    ))}
  </Stack>
);

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320, 768, 1200],
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
      <Text tone="secondary">
        If you’re only displaying a small amount of content, consider using a{' '}
        <TextLink href="/components/Dialog">Dialog.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open default drawer</Button>
            </Actions>

            <Drawer
              id="default"
              title="Default Drawer Example"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent()}
            </Drawer>
          </Fragment>
        );
      },
    },
    {
      label: 'With additional description',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
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
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent()}
            </Drawer>
          </Fragment>
        );
      },
    },
    {
      label: 'Small width',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open small drawer</Button>
            </Actions>

            <Drawer
              id="small"
              title="Small Drawer"
              width="small"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent({
                label: (
                  <Fragment>
                    Uses a small{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                ),
              })}
            </Drawer>
          </Fragment>
        );
      },
    },
    {
      label: 'Medium width',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open medium drawer</Button>
            </Actions>

            <Drawer
              id="medium"
              title="Medium Drawer"
              width="medium"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent({
                label: (
                  <Fragment>
                    Uses a medium{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                ),
              })}
            </Drawer>
          </Fragment>
        );
      },
    },
    {
      label: 'Large width',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open large drawer</Button>
            </Actions>

            <Drawer
              id="large"
              title="Large Drawer"
              width="large"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent({
                label: (
                  <Fragment>
                    Uses a large{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                ),
              })}
            </Drawer>
          </Fragment>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <PlayroomDrawer title="Drawer Heading">
          <Placeholder width={250} height={100} />
        </PlayroomDrawer>
      ),
    },
    {
      name: 'Small',
      code: (
        <PlayroomDrawer title="Drawer Heading" width="small">
          <Placeholder width="100%" height={100} />
        </PlayroomDrawer>
      ),
    },
    {
      name: 'Medium',
      code: (
        <PlayroomDrawer title="Drawer Heading" width="medium">
          <Placeholder width="100%" height={100} />
        </PlayroomDrawer>
      ),
    },
    {
      name: 'Large',
      code: (
        <PlayroomDrawer title="Drawer Heading" width="large">
          <Placeholder width="100%" height={100} />
        </PlayroomDrawer>
      ),
    },
  ],
};

export default docs;
