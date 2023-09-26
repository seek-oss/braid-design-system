import React from 'react';
import type { ComponentDocs } from 'site/types';
import source from '../../utils/source.macro';
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
} from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';
import { DialogPreview } from './Dialog.screenshots';

const Screen = () => (
  <Box
    position="absolute"
    inset={0}
    borderRadius="xlarge"
    boxShadow="borderNeutralLarge"
    pointerEvents="none"
  />
);

const docs: ComponentDocs = {
  category: 'Content',
  examplebackground: false,
  Example: ({ id, getState, toggleState }) => {
    const { code } = source(
      <>
        <Inline space="small">
          <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
        </Inline>

        <Dialog
          id={id}
          title="Title"
          description={<Text tone="secondary">Optional description</Text>}
          open={getState('dialog')}
          onClose={() => toggleState('dialog')}
        >
          <Placeholder height={100} width="100%" label="Dialog Content" />
        </Dialog>
      </>,
    );

    return {
      code,
      value: (
        <Box borderRadius="xlarge" overflow="hidden">
          <DialogPreview>
            <DialogContent
              id={id}
              title="Title"
              description={<Text tone="secondary">Optional description</Text>}
              onClose={() => {}}
              scrollLock={false}
            >
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
    { name: 'Drawer', description: 'For a larger amount of content.' },
    {
      name: 'Accordion',
      description:
        'For revealing content inline with a strong visual treatment.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing content inline with a light visual treatment.',
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
      Example: ({ id, getState, toggleState }) => {
        const { code } = source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
            </Inline>

            <Dialog
              id={id}
              title="Example Title"
              description={
                <Text tone="secondary">
                  An optional description of the Dialog content
                </Text>
              }
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" label="Dialog Content" />
            </Dialog>
          </>,
        );

        return {
          code,
          value: (
            <Box borderRadius="xlarge" overflow="hidden">
              <DialogPreview>
                <DialogContent
                  id={id}
                  title="Example Title"
                  description={
                    <Text tone="secondary">
                      An optional description of the Dialog content
                    </Text>
                  }
                  onClose={() => {}}
                  scrollLock={false}
                >
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
      label: 'Design considerations',
      description: (
        <>
          <Text>
            Recommended for prompting the user to make a decision or confirm an
            action. For more detailed content or user input (e.g. forms),
            consider using a{' '}
            <TextLink href="/components/Drawer">Drawer</TextLink> instead.
          </Text>
          <Alert tone="caution">
            <Text>
              The presentation of a Dialog should always be directly connected
              to a user action, such as a button click.{' '}
              <Strong>Opening on page load should be avoided.</Strong>
            </Text>
          </Alert>
        </>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <Text>
          It’s recommended that you connect the Dialog’s <Strong>open</Strong>{' '}
          state to your router so that it can be closed via the browser’s back
          button.
        </Text>
      ),
    },
    {
      label: 'Widths',
      description: (
        <Text>
          There are a variety of standard widths to choose from, as well as{' '}
          <Strong>content</Strong> width for custom sizing based on the content
          of the dialog.
        </Text>
      ),
      Example: ({ id, setState, getState, resetState }) =>
        source(
          <>
            <Inline space="small" align="center">
              <Button onClick={() => setState('width', 'content')}>
                Content width
              </Button>
              <Button onClick={() => setState('width', 'xsmall')}>
                XSmall width
              </Button>
              <Button onClick={() => setState('width', 'small')}>
                Small width
              </Button>
              <Button onClick={() => setState('width', 'medium')}>
                Medium width
              </Button>
              <Button onClick={() => setState('width', 'large')}>
                Large width
              </Button>
            </Inline>

            <Dialog
              id={id}
              title={`Width: ${getState('width')}`}
              open={getState('width') !== undefined}
              width={getState('width')}
              onClose={() => resetState('width')}
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
      label: 'Illustrated dialogs',
      description: (
        <Text>
          You can also provide an element to render at the top of the dialog via
          the <Strong>illustration</Strong> prop.
        </Text>
      ),
      background: false,
      Example: ({ id, getState, toggleState }) => {
        const { code } = source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
            </Inline>

            <Dialog
              id={id}
              title="Illustrated Example"
              illustration={
                <Box style={{ height: 72, width: 72 }}>
                  <IconImage size="fill" />
                </Box>
              }
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" label="Dialog Content" />
            </Dialog>
          </>,
        );

        return {
          code,
          value: (
            <Box borderRadius="xlarge" overflow="hidden">
              <DialogPreview>
                <DialogContent
                  id={id}
                  title="Illustrated Example"
                  illustration={
                    <Box style={{ height: 72, width: 72 }}>
                      <IconImage size="fill" />
                    </Box>
                  }
                  onClose={() => {}}
                  scrollLock={false}
                >
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
      label: 'Customising the close behaviour',
      description: (
        <>
          <Text>
            The <Strong>onClose</Strong> function is called when the user either
            click the close button inside the Dialog, or clicks on the backdrop
            outside the Dialog.
          </Text>
          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be customised
            by providing a <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
            </Inline>

            <Dialog
              id={id}
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
      Example: ({ id, getState, toggleState, setState, setDefaultState }) =>
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
              id={id}
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
                id="valid"
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
            If the contents are unable to fit on the screen, dialogs become
            scrollable with a fixed close button.
          </Text>
          <Text>
            If you need to display a large amount of content, consider using a{' '}
            <TextLink href="/components/Drawer">Drawer</TextLink> instead.
          </Text>
        </>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('dialog')}>
                Open scrolling dialog
              </Button>
            </Inline>

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
      label: 'Nested dialogs',
      description: (
        <Text>
          Although supported, in order to keep experiences simple nesting
          Dialogs is not encouraged.
        </Text>
      ),
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Inline space="small">
              <Button onClick={() => toggleState('firstDialog')}>
                Open nested dialog
              </Button>
            </Inline>

            <Dialog
              id={`${id}_3`}
              title="Third Dialog"
              width="xsmall"
              open={getState('thirdDialog')}
              onClose={() => toggleState('thirdDialog')}
            >
              <Placeholder height={50} />
            </Dialog>
            <Dialog
              id={`${id}_1`}
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
              id={`${id}_2`}
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
  ],
};

export default docs;
