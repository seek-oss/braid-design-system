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

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        The Dialog component provides a way to focus the user's attention on a
        specific subtask or flow within the context of another experience. In
        order to keep experiences simple, Dialogs{' '}
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
      label: 'Sized to content',
      playroom: false,
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
