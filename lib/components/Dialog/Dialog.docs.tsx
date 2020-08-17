import React, { useState, Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Dialog } from '../';
import { Button } from '../Button/Button';
import { Inline } from '../Inline/Inline';
import { TextField } from '../TextField/TextField';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';
import { useToast, ToastProvider } from '../useToast/ToastContext';
import { TextLink } from '../TextLink/TextLink';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Layout',
  added: new Date('11 August 2020'),
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
        When opened focus will be placed on this first focusable element inside
        the container, tabbing will then cycle through all focusable elements
        internally. When the Dialog is closed, focus will be returned to the
        element last focused before the Dialog was opened.
      </Text>
      <Text tone="secondary">
        At this stage nested dialogs are not supported.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Default',
      Example: () => {
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState('');
        const [value2, setValue2] = useState('');

        return (
          <Fragment>
            <Inline space="large" alignY="center">
              <Button onClick={() => setOpen(true)}>Open dialog</Button>
            </Inline>

            <Dialog
              title="Braid Dialog Example"
              open={open}
              onDismiss={setOpen}
            >
              <Stack space="large">
                <TextField
                  id="1"
                  value={value}
                  onChange={({ currentTarget }) =>
                    setValue(currentTarget.value)
                  }
                  label="First field"
                  placeholder="I should auto focus"
                />
                <TextField
                  id="2"
                  value={value2}
                  onChange={({ currentTarget }) =>
                    setValue2(currentTarget.value)
                  }
                  label="Second field"
                />
                <Inline space="none">
                  <Button onClick={() => setOpen(false)}>Got it</Button>
                </Inline>
              </Stack>
            </Dialog>
          </Fragment>
        );
      },
    },
    {
      label: 'Labelled by heading within content',
      Example: () => {
        const [open, setOpen] = useState(false);
        const [open2, setOpen2] = useState(false);
        const showToast = useToast();

        const notify = () => {
          showToast({
            tone: 'positive',
            message: 'Toast up!',
          });
        };

        return (
          <ToastProvider>
            <Inline space="large" alignY="center">
              <Button onClick={() => setOpen(true)}>Open dialog</Button>
            </Inline>

            <Dialog
              aria-labelledby="dialogHeading"
              aria-describedby="dialogDescription"
              open={open}
              onDismiss={setOpen}
            >
              <Stack space="large">
                <Heading level="3" id="dialogHeading">
                  My important announcement
                </Heading>

                <Text id="dialogDescription">
                  This dialog box implements the aria spec for dialogs. Does not
                  support non-modals. This dialog box implements the aria spec
                  for dialogs. Does not support non-modals. This dialog box
                  implements the aria spec for dialogs. Does not support
                  non-modals. This dialog box implements the aria spec for
                  dialogs. Does not support non-modals. This dialog box
                  implements the aria spec for dialogs. Does not support
                  non-modals. This dialog box implements the aria spec for
                  dialogs. Does not support non-modals. This dialog box
                  implements the aria spec for dialogs. Does not support
                  non-modals. This dialog box implements the aria spec for
                  dialogs. Does not support non-modals. This dialog box
                  implements the aria spec for dialogs. Does not support
                  non-modals.
                </Text>

                <Dialog
                  title="Braid Dialog Example"
                  open={open2}
                  onDismiss={setOpen2}
                >
                  <Text>Test</Text>
                </Dialog>

                <Inline space="medium">
                  <Button onClick={() => setOpen2(true)}>🍾</Button>
                  <Button onClick={notify}>🍞</Button>
                  <Button onClick={() => setOpen(false)}>👋</Button>
                </Inline>
              </Stack>
            </Dialog>
          </ToastProvider>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: (
        <Dialog title="Dialog Heading" open={true} onDismiss={() => {}}>
          <Stack space="large">
            <Placeholder width={250} height={100} />
          </Stack>
        </Dialog>
      ),
    },
  ],
};

export default docs;
