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
import { DialogContent, DialogProps } from './Dialog';

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
        The Dialog component provides a way to focus the user&rsquo;s attention
        on a specific subtask or flow within the context of another experience.
        In order to keep experiences simple, Dialogs and{' '}
        <TextLink href="/components/Drawer">Drawers</TextLink>{' '}
        <Strong>cannot be nested</Strong> inside one another.
      </Text>
      <Text>
        Dialogs should only be used as a last resort when other in-flow
        alternatives are not suitable.
      </Text>
      <Text>
        It’s recommended that you connect the Dialog’s open state to your router
        so that it can be closed via the browser’s back button.
      </Text>
      <Text tone="secondary">
        If you’re displaying a large amount of content, consider using a{' '}
        <TextLink href="/components/Drawer">Drawer.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      playroom: false,
      storybook: false,
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open default dialog</Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open illustrated dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open dialog with description
              </Button>
            </Actions>

            <Dialog
              id={id}
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
      label: 'With scrolling content',
      playroom: false,
      storybook: false,
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open scrolling dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Dialog with scrolling content"
              open={open}
              onClose={setOpen}
            >
              <Stack space="large">
                {[...new Array(20)].map((_, i) => (
                  <Placeholder key={i} height={100} width="100%" />
                ))}
              </Stack>
            </Dialog>
          </Fragment>
        );
      },
    },
    {
      label: 'Sized to content',
      playroom: false,
      storybook: false,
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>
                Open content-sized dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open xsmall dialog</Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open small dialog</Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open medium dialog</Button>
            </Actions>

            <Dialog
              id={id}
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
      gallery: false,
      Example: ({ id }) => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Actions>
              <Button onClick={() => setOpen(true)}>Open large dialog</Button>
            </Actions>

            <Dialog
              id={id}
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

    // Layout examples
    {
      label: 'Default layout',
      docsSite: false,
      gallery: true,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Default test"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogContent>
      ),
    },
    {
      label: 'Illustration layout',
      docsSite: false,
      gallery: true,
      Example: ({ id }) => (
        <DialogContent
          id={id}
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
        </DialogContent>
      ),
    },
    {
      label: 'Layout with a description',
      docsSite: false,
      gallery: true,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Description test"
          description={
            <Placeholder height="auto" width="100%" label="Description" />
          }
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Content width',
      docsSite: false,
      Example: ({ id }) => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <DialogContent
            id={id}
            title="Content-sized"
            width="content"
            onClose={() => {}}
            scrollLock={false}
          >
            <Placeholder height={100} width={200} label="200px wide" />
          </DialogContent>
        </Box>
      ),
    },
    {
      label: 'Layout: Xsmall width',
      docsSite: false,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Xsmall"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Small width',
      docsSite: false,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Small"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Medium width',
      docsSite: false,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Medium"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout:: Large width',
      docsSite: false,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Large"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Preview animation',
      playroom: false,
      storybook: false,
      docsSite: false,
      gallery: true,
      Example: () => {
        const [width, setWidth] = useState<DialogProps['width'] | null>(null);

        return (
          <Fragment>
            <Inline space="small" align="center">
              <Button onClick={() => setWidth('xsmall')}>Open xsmall</Button>
              <Button onClick={() => setWidth('small')}>Open small</Button>
              <Button onClick={() => setWidth('medium')}>Open medium</Button>
              <Button onClick={() => setWidth('large')}>Open large</Button>
            </Inline>

            <Dialog
              id="dialog-animation-example"
              title={`A \"${width}\" dialog`}
              width={width || undefined}
              open={width !== null}
              onClose={() => setWidth(null)}
            >
              <Placeholder height={200} width="100%" />
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
        <PlayroomDialog title="Dialog Heading" open={true}>
          <Placeholder width={250} height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'With illustration',
      code: (
        <PlayroomDialog
          title="Illustrated Dialog"
          open={true}
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
        <PlayroomDialog title="Dialog Heading" width="xsmall" open={true}>
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Small',
      code: (
        <PlayroomDialog title="Dialog Heading" width="small" open={true}>
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Medium',
      code: (
        <PlayroomDialog title="Dialog Heading" width="medium" open={true}>
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
    {
      name: 'Large',
      code: (
        <PlayroomDialog title="Dialog Heading" width="large" open={true}>
          <Placeholder width="100%" height={100} />
        </PlayroomDialog>
      ),
    },
  ],
};

export default docs;
