import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Box,
  Button,
  Text,
  Stack,
  useToast,
  Heading,
  TextLink,
  Strong,
} from '..';
import Code from '../../../site/src/App/Code/Code';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const description = (
  <Box style={{ maxWidth: 700 }}>
    <Stack space="large">
      <Text>
        The Toast component is a good way to communicate out of flow messages,
        and optionally provide some helpful actions to respond with. However, as
        these actions can <Strong>NOT</Strong> be communicated to a screen
        reader, they should only ever be treated as a helpful enhancement of the
        experience. If the user should take a specific action as a result of a
        Toast being displayed, this should be communicated through the
        description property as well.
      </Text>
      <Heading level="3">Setup</Heading>
      <Text>
        Unlike other Braid components, Toast is exposed via a hook and rendered
        automatically at the bottom left of the viewport using a{' '}
        <TextLink href="https://reactjs.org/docs/portals.html">
          React portal
        </TextLink>
        . This is managed by the ToastProvider component. The useToast hook
        won&apos;t work unless it is nested within a ToastProvider. Most apps
        should just render this within their top level BraidProvider component.
      </Text>
      <Text weight="strong">
        Warning: Only a render a single ToastProvider, not one per useToast
        usage.
      </Text>
      <Code playroom={false}>
        {`
        import { BraidProvider, ToastProvider } from 'braid-design-system';

        export const App = () => (
          <BraidProvider>
            <ToastProvider>
              <AppContent />
            </ToastProvider>
          </BraidProvider>
        )
      `}
      </Code>
    </Stack>
  </Box>
);

const docs: ComponentDocs = {
  description,
  screenshotWidths: [],
  category: 'Content',
  examples: [
    {
      label: 'Nuetral Toast',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Honey or Vegemite?',
                tone: 'neutral',
                actions: [{ label: 'Undo', onClick: () => {} }],
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({ message: 'Honey or Vegemite?', tone: 'neutral' });
      `,
    },
    {
      label: 'Nuetral Toast with description',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Honey or Vegemite',
                tone: 'neutral',
                description: 'Sweet or salty, the choice is all yours?',
                actions: [
                  { label: 'Undo', onClick: () => {} },
                  { label: 'Goto Profile', onClick: () => {} },
                ],
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({
          message: 'Honey or Vegemite',
          tone: 'neutral',
          description: 'Sweet or salty, the choice is all yours?',
        });
      `,
    },
    {
      label: 'Critical Toast',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({ message: 'Toast is burnt', tone: 'critical' })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({ message: 'Toast is burnt', tone: 'critical' });
      `,
    },
    {
      label: 'Critical Toast with description',
      Container,
      Example: () => {
        const makeToast = useToast();

        return (
          <Button
            onClick={() =>
              makeToast({
                message: 'Toast is burnt',
                tone: 'critical',
                actions: [
                  { label: 'Undo', onClick: () => {} },
                  { label: 'Goto Profile', onClick: () => {} },
                ],
                description:
                  '3 is too high for fruit toast. Try setting 2 for ideal crispness.',
              })
            }
          >
            Show toast
          </Button>
        );
      },
      code: `
        const makeToast = useToast();

        makeToast({
          message: 'Toast is burnt',
          tone: 'critical',
          description:
            '3 is too high for fruit toast. Try setting 2 for ideal crispness.',
        })
      `,
    },
  ],
};

export default docs;
