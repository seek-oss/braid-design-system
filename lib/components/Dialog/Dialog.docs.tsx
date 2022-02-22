import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import {
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
  Example: ({ id, getState, toggleState }) =>
    source(
      <>
        <Box padding="medium">
          <Inline space="small" align={{ mobile: 'center', tablet: 'left' }}>
            <Button onClick={() => toggleState('dialog')}>Open dialog</Button>
          </Inline>
        </Box>

        <Dialog
          id={id}
          title="Dialog Title"
          description={<Text tone="secondary">Optional description</Text>}
          open={getState('dialog')}
          onClose={() => toggleState('dialog')}
        >
          <Placeholder height={100} width="100%" />
        </Dialog>
      </>,
    ),
  accessibility: (
    <>
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal">
          WAI-ARIA Dialog (Modal) Pattern.
        </TextLink>
      </Text>
      <Text>
        Due to the size of the Dialog, all entrance and exit animations adhere
        to the users{' '}
        <TextLink href="https://www.w3.org/WAI/WCAG21/Techniques/css/C39">
          reduce motion
        </TextLink>
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
      label: 'Design considerations',
      description: (
        <Text>
          Dialogs should only be used as a last resort when other in-flow
          alternatives are not suitable.
        </Text>
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
            <Box padding="medium">
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
            </Box>

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
      Example: ({ id, getState, toggleState }) =>
        source(
          <>
            <Box padding="medium">
              <Inline
                space="small"
                align={{ mobile: 'center', tablet: 'left' }}
              >
                <Button onClick={() => toggleState('dialog')}>
                  Open illustrated dialog
                </Button>
              </Inline>
            </Box>

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
                <Box padding="medium">
                  <Inline
                    space="small"
                    align={{ mobile: 'center', tablet: 'left' }}
                  >
                    <Button onClick={() => toggleState('dialog')}>
                      Got it
                    </Button>
                    <Button
                      variant="transparent"
                      onClick={() => toggleState('dialog')}
                    >
                      Cancel
                    </Button>
                  </Inline>
                </Box>
              </Stack>
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
            <Box padding="medium">
              <Inline
                space="small"
                align={{ mobile: 'center', tablet: 'left' }}
              >
                <Button onClick={() => toggleState('dialog')}>
                  Open scrolling dialog
                </Button>
              </Inline>
            </Box>

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
            <Box padding="medium">
              <Inline
                space="small"
                align={{ mobile: 'center', tablet: 'left' }}
              >
                <Button onClick={() => toggleState('firstDialog')}>
                  Open nested dialog
                </Button>
              </Inline>
            </Box>
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
