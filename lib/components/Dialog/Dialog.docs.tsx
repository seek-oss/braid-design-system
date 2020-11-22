import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
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
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open default dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Default Dialog Example"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'With illustration/logo',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
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
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Stack space="xlarge" align="center">
                <Placeholder width="100%" height={100} />
                <Inline space="small">
                  <Button onClick={() => toggleState('dialog')}>Got it</Button>
                  <Button weight="weak" onClick={() => toggleState('dialog')}>
                    Cancel
                  </Button>
                </Inline>
              </Stack>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'With additional description',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
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
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'With scrolling content',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open scrolling dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Dialog with scrolling content"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Stack space="large">
                {[...new Array(20)].map((_, i) => (
                  <Placeholder key={i} height={100} width="100%" />
                ))}
              </Stack>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Sized to content',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open content-sized dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Content-sized"
              width="content"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width={200} label="200px wide" />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Xsmall width',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open xsmall dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Xsmall Dialog"
              width="xsmall"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <>
                    Uses a xsmall{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </>
                }
              />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Small width',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open small dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Small Dialog"
              width="small"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <>
                    Uses a small{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </>
                }
              />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Medium width',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open medium dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Medium Dialog"
              width="medium"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <>
                    Uses a medium{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </>
                }
              />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Large width',
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Actions>
              <Button onClick={() => toggleState('dialog')}>
                Open large dialog
              </Button>
            </Actions>

            <Dialog
              id={id}
              title="Large Dialog"
              width="large"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder
                height={100}
                width="100%"
                label={
                  <>
                    Uses a large{' '}
                    <TextLink href="/components/ContentBlock">
                      ContentBlock
                    </TextLink>
                  </>
                }
              />
            </Dialog>
          </>,
        ),
    },
  ],
};

export default docs;
