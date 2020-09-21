import React, { useState, Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Actions,
  Drawer,
  Button,
  Inline,
  Text,
  Stack,
  TextLink,
  IconMail,
  Box,
  Strong,
} from '..';
import {
  Placeholder,
  Drawer as PlayroomDrawer,
} from '../../playroom/components';
import { ModalPanel } from '../private/Modal/ModalPanel';

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
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#drawer_modal">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        The Drawer component provides a way to focus the user&rsquo;s attention
        on a specific subtask or flow within the context of another experience.
        In order to keep experiences simple, Drawers{' '}
        <Strong>cannot be nested</Strong> inside one another.
      </Text>
      <Text>
        Drawers should only be used as a last resort when other in-flow
        alternatives are not suitable.
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
      label: 'Sized to content',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open content-sized drawer
              </Button>
            </Actions>

            <Drawer
              id="content"
              title="Content-sized"
              width="content"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent({ label: '200px wide' })}
            </Drawer>
          </Fragment>
        );
      },
    },
    {
      label: 'Xsmall width',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open xsmall drawer</Button>
            </Actions>

            <Drawer
              id="xsmall"
              title="Xsmall Drawer"
              width="xsmall"
              open={open}
              onClose={setOpen}
            >
              {makeExampleContent({
                label: (
                  <Fragment>
                    Uses a xsmall{' '}
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

    // Storybook tests
    {
      label: 'Test: Default',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="default"
          title="Default test"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </ModalPanel>
      ),
    },
    {
      label: 'Test: With illustration/logo',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="illustrated"
          title="Illustration test"
          illustration={
            <Placeholder
              height={150}
              width={150}
              shape="round"
              label="Illustration"
            />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Stack space="xlarge" align="center">
            <Placeholder width="100%" height={100} />
            <Inline space="small">
              <Placeholder height={44} width={80} label="OK" />
              <Placeholder height={44} width={80} label="Cancel" />
            </Inline>
          </Stack>
        </ModalPanel>
      ),
    },
    {
      label: 'Test: Description',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="description"
          title="Description test"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </ModalPanel>
      ),
    },
    {
      label: 'Test: Content width',
      docsSite: false,
      Example: () => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <ModalPanel
            id="content"
            title="Content-sized"
            width="content"
            onClose={() => {}}
            scrollLock={false}
          >
            <Placeholder height={100} width={200} label="200px wide" />
          </ModalPanel>
        </Box>
      ),
    },
    {
      label: 'Test: Xsmall width',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="xsmall"
          title="Xsmall"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Drawer" />
        </ModalPanel>
      ),
    },
    {
      label: 'Test: Small width',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="small"
          title="Small"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Drawer" />
        </ModalPanel>
      ),
    },
    {
      label: 'Test: Medium width',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="medium"
          title="Medium"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Drawer" />
        </ModalPanel>
      ),
    },
    {
      label: 'Test: Large width',
      docsSite: false,
      Example: () => (
        <ModalPanel
          id="large"
          title="Large"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Drawer" />
        </ModalPanel>
      ),
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
      name: 'With illustration',
      code: (
        <PlayroomDrawer
          title="Illustrated Drawer"
          illustration={
            <Box style={{ height: 100, width: 100 }}>
              <IconMail size="fill" />
            </Box>
          }
        >
          <Stack space="xlarge" align="center">
            <Placeholder width="100%" height={100} />
            <Inline space="small">
              <Button>Got it</Button>
              <Button weight="weak">Cancel</Button>
            </Inline>
          </Stack>
        </PlayroomDrawer>
      ),
    },
    {
      name: 'Xsmall',
      code: (
        <PlayroomDrawer title="Drawer Heading" width="xsmall">
          <Placeholder width="100%" height={100} />
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
