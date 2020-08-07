import React, { useState, Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Dialog } from '../';
import { Button } from '../Button/Button';
import { Inline } from '../Inline/Inline';
import { TextField } from '../TextField/TextField';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
            <Inline space="large" alignY="center">
              <Button onClick={() => setOpen(true)}>Open dialog</Button>
            </Inline>

            <Dialog
              aria-label="My popup dialog"
              open={open}
              onDismiss={setOpen}
            >
              <Stack space="large">
                <Text id="dialogDescription">
                  Here is my content, nothing gets announced here
                </Text>
                <TextField placeholder="I should auto focus" />
                <TextField />
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
      label: 'Labelled by heading in content',
      Example: () => {
        const [open, setOpen] = useState(false);

        return (
          <Fragment>
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
                <Inline space="none">
                  <Button onClick={() => setOpen(false)}>Got it</Button>
                </Inline>
              </Stack>
            </Dialog>
          </Fragment>
        );
      },
    },
  ],
  snippets: [{ name: 'Standard', code: <Dialog /> }],
};

export default docs;
