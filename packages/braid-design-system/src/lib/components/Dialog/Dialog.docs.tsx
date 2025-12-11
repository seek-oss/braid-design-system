import source from '@braid-design-system/source.macro';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import type { ComponentDocs } from 'site/types';

import {
  Dialog,
  Button,
  Inline,
  Text,
  Stack,
  TextLink,
  IconImage,
  Box,
  Strong,
  IconLanguage,
  Checkbox,
  Alert,
  TextDropdown,
  List,
} from '../';
import { Placeholder } from '../../playroom/components';
import { externalGutter } from '../private/Modal/ModalExternalGutter';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { DialogContent } from './Dialog';

import * as styles from '../private/Modal/Modal.css';

const Screen = () => (
  <Box
    position="absolute"
    inset={0}
    borderRadius="xlarge"
    boxShadow="borderNeutralLarge"
    pointerEvents="none"
  />
);

type DialogElement = ReactElement<ComponentProps<typeof Dialog>>;
const dialogPreviewPropsFromSourceValue = (element: DialogElement) => ({
  ...element.props,
  onClose: () => {},
  scrollLock: false,
});

const DialogPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal" padding={externalGutter}>
      {children}
    </Box>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A modal overlay that focusses user attention by disabling the screen to
      show a message.
    </Text>
  ),
  examplebackground: false,
  Example: () => {
    const { code, value } = source<DialogElement>(
      <Dialog
        title="Title"
        description={<Text tone="secondary">Optional description</Text>}
        open={true}
        onClose={() => {}}
      >
        <Placeholder height={100} width="100%" label="Dialog Content" />
      </Dialog>,
    );

    return {
      code,
      value: (
        <Box borderRadius="xlarge" overflow="hidden">
          <DialogPreview>
            <DialogContent {...dialogPreviewPropsFromSourceValue(value)}>
              <Placeholder height={100} width="100%" label="Dialog Content" />
            </DialogContent>
            <Screen />
          </DialogPreview>
        </Box>
      ),
    };
  },
  accessibility: (
    <>
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        Due to the size of the Dialog, all entrance and exit animations adhere
        to the users{' '}
        <TextLink href="https://www.w3.org/WAI/WCAG21/Techniques/css/C39">
          reduce motion
        </TextLink>{' '}
        preference.
      </Text>
    </>
  ),
  alternatives: [
    {
      name: 'Drawer',
      description:
        'For exposing complex content or capturing user input in a modal panel.',
    },
    {
      name: 'Accordion',
      description:
        'For revealing sections of content in a vertically stacked list.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing optional content inline with a light visual treatment.',
    },
  ],
  additional: [
    {
      label: 'Title and description',
      description: (
        <>
          <Text>
            The <Strong>title</Strong> prop provides an accessible name
            announced to the user when the Dialog is opened. Optionally, a{' '}
            <Strong>description</Strong> can be provided and will be announced
            by a screen reader as well as visually forming part of the header
            block.
          </Text>
          <Alert>
            <Text>
              Open in Playroom and enable your screen reader to preview the
              announcements.
            </Text>
          </Alert>
        </>
      ),
      background: false,
      Example: () => {
        const { code, value } = source<DialogElement>(
          <Dialog
            title="Example Title"
            description={
              <Text tone="secondary">
                An optional description of the Dialog content
              </Text>
            }
            open={true}
            onClose={() => {}}
          >
            <Placeholder height={100} width="100%" label="Dialog Content" />
          </Dialog>,
        );

        return {
          code,
          value: (
            <Box borderRadius="xlarge" overflow="hidden">
              <DialogPreview>
                <DialogContent {...dialogPreviewPropsFromSourceValue(value)}>
                  <Placeholder
                    height={100}
                    width="100%"
                    label="Dialog Content"
                  />
                </DialogContent>
                <Screen />
              </DialogPreview>
            </Box>
          ),
        };
      },
    },
    {
      label: 'Width',
      description: (
        <Text>
          The <Strong>width</Strong> prop can be set to <Strong>xsmall</Strong>,{' '}
          <Strong>small</Strong>, <Strong>medium</Strong> or{' '}
          <Strong>large</Strong> for standardised widths, or{' '}
          <Strong>content</Strong> to take on the width of it&rsquo;s contents.
        </Text>
      ),

      Example: ({ setDefaultState, setState, getState }) =>
        source(
          <>
            {setDefaultState('open', false)}
            {setDefaultState('width', 'xsmall')}

            <Stack space="medium">
              <Text>
                Select width:{' '}
                <Strong>
                  <TextDropdown
                    label="Width"
                    options={['content', 'xsmall', 'small', 'medium', 'large']}
                    value={getState('width')}
                    onChange={(width) => setState('width', width)}
                  />
                </Strong>
              </Text>
              <Inline space="none">
                <Button onClick={() => setState('open', true)}>
                  Open dialog
                </Button>
              </Inline>
            </Stack>

            <Dialog
              title={`Width: ${getState('width')}`}
              open={getState('open')}
              width={getState('width')}
              onClose={() => setState('open', false)}
            >
              {getState('width') === 'content' ? (
                <Placeholder height={100} width={200} label="200px wide" />
              ) : (
                <Placeholder height={100} width="100%" />
              )}
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Illustrations',
      description: (
        <Text>
          You can provide an element to display at the top of the Dialog via the{' '}
          <Strong>illustration</Strong> prop.
        </Text>
      ),
      background: false,
      Example: () => {
        const { code, value } = source<DialogElement>(
          <Dialog
            title="Illustrated Example"
            illustration={
              <Box style={{ height: 72, width: 72 }}>
                <IconImage size="fill" />
              </Box>
            }
            open={true}
            onClose={() => {}}
          >
            <Placeholder height={100} width="100%" label="Dialog Content" />
          </Dialog>,
        );

        return {
          code,
          value: (
            <Box borderRadius="xlarge" overflow="hidden">
              <DialogPreview>
                <DialogContent {...dialogPreviewPropsFromSourceValue(value)}>
                  <Placeholder
                    height={100}
                    width="100%"
                    label="Dialog Content"
                  />
                </DialogContent>
                <Screen />
              </DialogPreview>
            </Box>
          ),
        };
      },
    },
    {
      label: 'Tailoring the close behaviour',
      description: (
        <>
          <Text>
            The <Strong>onClose</Strong> function is called when the user either
            click the close button inside the Dialog, or clicks on the backdrop
            outside the Dialog.
          </Text>
          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be tailored by
            providing a <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
            </Inline>

            <Dialog
              title="Dialog Title"
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
              closeLabel="Close Dialog"
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </>,
        ),
    },
    {
      description: (
        <Text>
          To prevent the Dialog from closing, e.g. due to validation, this
          function should return <Strong>false</Strong>.
        </Text>
      ),
      Example: ({ getState, toggleState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('valid', false)}
            {setDefaultState('showError', false)}

            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>
                Open validated dialog
              </Button>
            </Inline>

            <Dialog
              title="Dialog Title"
              open={getState('dialog')}
              onClose={() => {
                if (getState('valid') === false) {
                  setState('showError', true);
                  return false;
                }

                setState('showError', false);
                toggleState('dialog');
              }}
              closeLabel="Close Dialog"
            >
              <Checkbox
                label="Can this Dialog be closed?"
                checked={getState('valid')}
                onChange={() => {
                  setState('showError', false);
                  toggleState('valid');
                }}
                tone={getState('showError') ? 'critical' : undefined}
                message={getState('showError') ? 'Required field' : undefined}
              />
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Scrollable dialogs',
      description: (
        <>
          <Text>
            If the contents are unable to fit on the screen, Dialogs become
            scrollable with a fixed close button.
          </Text>
          <Text>
            If you need to display a large amount of content, consider using a{' '}
            <TextLink href="/components/Drawer">Drawer</TextLink> instead.
          </Text>
        </>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>
                Open scrolling dialog
              </Button>
            </Inline>

            <Dialog
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
      label: 'Nested dialogs',
      description: (
        <Text>
          Although supported, in order to keep experiences simple nesting
          Dialogs is not encouraged.
        </Text>
      ),
      Example: ({ getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('firstDialog')}>
                Open nested dialog
              </Button>
            </Inline>

            <Dialog
              title="Third Dialog"
              width="xsmall"
              open={getState('thirdDialog')}
              onClose={() => toggleState('thirdDialog')}
            >
              <Placeholder height={50} />
            </Dialog>
            <Dialog
              title="First Dialog"
              width="medium"
              open={getState('firstDialog')}
              onClose={() => toggleState('firstDialog')}
            >
              <Placeholder height={300} label="Dialog Content" />
              <Button onClick={() => toggleState('secondDialog')}>
                Open second dialog
              </Button>
            </Dialog>
            <Dialog
              title="Second Dialog"
              width="small"
              open={getState('secondDialog')}
              onClose={() => toggleState('secondDialog')}
            >
              <Placeholder height={200} label="Dialog Content" />
              <Button onClick={() => toggleState('thirdDialog')}>
                Open third dialog
              </Button>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'General best practice',
      description: (
        <List space="large">
          <Text>
            A Dialog can be triggered on any element of your choice, but should
            always be directly connected to a user action such as clicking a
            button.
          </Text>
          <Text>
            Avoid displaying a Dialog on page load, as users tend to dismiss
            these without reading them.
          </Text>
        </List>
      ),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Dialog:</Text>
            <List space="large">
              <Text>
                to reveal secondary information including images or interactive
                elements
              </Text>
              <Text>
                to confirm an important user action (e.g. deleting a piece of
                data).
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Dialog:</Text>
            <List space="large">
              <Text>
                if your content is less than 20 words in length (consider using
                a{' '}
                <TextLink href="/components/TooltipRenderer">
                  TooltipRenderer
                </TextLink>{' '}
                instead)
              </Text>
              <Text>
                to capture complex user input, such as in a form (consider using
                a <TextLink href="/components/Drawer">Drawer</TextLink>{' '}
                instead).
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          It&rsquo;s recommended that you connect the Dialog&rsquo;s{' '}
          <Strong>open</Strong> state to your router so that it can be closed
          via the browser&rsquo;s back button.
        </Text>
      ),
    },
    dataAttributeDocs({
      code: `
        <Dialog
          data={{ testid: 'dialog-1' }}
          // => data-testid="dialog-1"
        >
          ...
        </Dialog>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
