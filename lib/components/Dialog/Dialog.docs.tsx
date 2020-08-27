import React, { useState, Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Actions,
  Dialog,
  Button,
  Inline,
  Text,
  Stack,
  TextLink,
  IconMail,
  Box,
  Strong,
} from '../';
import {
  Placeholder,
  Dialog as PlayroomDialog,
} from '../../playroom/components';
import { DialogCard } from './DialogCard';

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
        The Dialog component provides a way to focus the user&rsquo;s attention
        on a specific subtask or flow within the context of another experience.
        In order to keep experiences simple, Dialogs{' '}
        <Strong>cannot be nested</Strong> inside one another.
      </Text>
      <Text>
        Dialogs should only be used as a last resort when other in-flow
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
              <Button onClick={() => setOpen(true)}>Open default dialog</Button>
            </Actions>

            <Dialog
              id="default"
              title="Default Dialog Example"
              open={open}
              onClose={setOpen}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </Fragment>
        );
      },
    },
    {
      label: 'With illustration/logo',
      playroom: false,
      storybook: false,
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open illustrated dialog
              </Button>
            </Actions>

            <Dialog
              id="illustrated"
              title="Illustrated Example"
              illustration={
                <Box style={{ height: 100, width: 100 }}>
                  <IconMail size="fill" />
                </Box>
              }
              open={open}
              onClose={setOpen}
            >
              <Stack space="xlarge" align="center">
                <Placeholder width="100%" height={100} />
                <Inline space="small">
                  <Button onClick={() => setOpen(false)}>Got it</Button>
                  <Button weight="weak" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </Inline>
              </Stack>
            </Dialog>
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
                Open dialog with description
              </Button>
            </Actions>

            <Dialog
              id="description"
              title="Dialog with description"
              description={
                <Text tone="secondary">
                  More context to describe this task.
                </Text>
              }
              open={open}
              onClose={setOpen}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
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
                Open content-sized dialog
              </Button>
            </Actions>

            <Dialog
              id="content"
              title="Content-sized"
              width="content"
              open={open}
              onClose={setOpen}
            >
              <Placeholder height={100} width={200} label="200px wide" />
            </Dialog>
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
              <Button onClick={() => setOpen(true)}>Open xsmall dialog</Button>
            </Actions>

            <Dialog
              id="xsmall"
              title="Xsmall Dialog"
              width="xsmall"
              open={open}
              onClose={setOpen}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <Fragment>
                    Uses a xsmall{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                }
              />
            </Dialog>
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
              <Button onClick={() => setOpen(true)}>Open small dialog</Button>
            </Actions>

            <Dialog
              id="small"
              title="Small Dialog"
              width="small"
              open={open}
              onClose={setOpen}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <Fragment>
                    Uses a small{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                }
              />
            </Dialog>
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
              <Button onClick={() => setOpen(true)}>Open medium dialog</Button>
            </Actions>

            <Dialog
              id="medium"
              title="Medium Dialog"
              width="medium"
              open={open}
              onClose={setOpen}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <Fragment>
                    Uses a medium{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                }
              />
            </Dialog>
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
              <Button onClick={() => setOpen(true)}>Open large dialog</Button>
            </Actions>

            <Dialog
              id="large"
              title="Large Dialog"
              width="large"
              open={open}
              onClose={setOpen}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <Fragment>
                    Uses a large{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </Fragment>
                }
              />
            </Dialog>
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
                Open dialog with description
              </Button>
            </Actions>

            <Dialog
              id="description"
              title="Dialog with description"
              description={
                <Text tone="secondary">
                  More context to describe this task.
                </Text>
              }
              open={open}
              onClose={setOpen}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </Fragment>
        );
      },
    },

    // Storybook tests
    {
      label: 'Test: Default',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="default"
          title="Default test"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogCard>
      ),
    },
    {
      label: 'Test: With illustration/logo',
      docsSite: false,
      Example: () => (
        <DialogCard
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
        </DialogCard>
      ),
    },
    {
      label: 'Test: Description',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="description"
          title="Description test"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogCard>
      ),
    },
    {
      label: 'Test: Content width',
      docsSite: false,
      Example: () => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <DialogCard
            id="content"
            title="Content-sized"
            width="content"
            onClose={() => {}}
            scrollLock={false}
          >
            <Placeholder height={100} width={200} label="200px wide" />
          </DialogCard>
        </Box>
      ),
    },
    {
      label: 'Test: Xsmall width',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="xsmall"
          title="Xsmall"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Dialog" />
        </DialogCard>
      ),
    },
    {
      label: 'Test: Small width',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="small"
          title="Small"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Dialog" />
        </DialogCard>
      ),
    },
    {
      label: 'Test: Medium width',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="medium"
          title="Medium"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Dialog" />
        </DialogCard>
      ),
    },
    {
      label: 'Test: Large width',
      docsSite: false,
      Example: () => (
        <DialogCard
          id="large"
          title="Large"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Dialog" />
        </DialogCard>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <PlayroomDialog title="Dialog Heading">
          <Placeholder width={250} height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'With illustration',
      code: (
        <PlayroomDialog
          title="Illustrated Dialog"
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
        </PlayroomDialog>
      ),
    },
    {
      name: 'Xsmall',
      code: (
        <PlayroomDialog title="Dialog Heading" width="xsmall">
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Small',
      code: (
        <PlayroomDialog title="Dialog Heading" width="small">
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Medium',
      code: (
        <PlayroomDialog title="Dialog Heading" width="medium">
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Large',
      code: (
        <PlayroomDialog title="Dialog Heading" width="large">
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
  ],
};

export default docs;
