import React from 'react';
import { useTheme } from 'sku/react-treat';
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
  IconPromote,
} from '..';
import Code from '../../../site/src/App/Code/Code';
import Toast from './Toast';

const description = (
  <Stack space="large">
    <Text>
      The Toast component is a good way to communicate out of flow messages, and
      optionally provide some helpful actions to respond with. However, as these
      actions can <Strong>NOT</Strong> be communicated to a screen reader, they
      should only ever be treated as a helpful enhancement of the experience. If
      the user should take a specific action as a result of a Toast being
      displayed, this should be communicated through the description property as
      well.
    </Text>
    <Heading level="3">Setup</Heading>
    <Text>
      Unlike other Braid components, Toast is exposed via a hook and rendered
      automatically at the bottom of the viewport using a{' '}
      <TextLink href="https://reactjs.org/docs/portals.html">
        React portal
      </TextLink>
      . This is managed by the ToastProvider component. The useToast hook
      won&apos;t work unless it is nested within a ToastProvider. Most apps
      should just render this within their top level BraidProvider component.
    </Text>
    <Text weight="strong">
      Warning: Only a render a single ToastProvider, not one per useToast usage.
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
    <Heading level="3">Usage</Heading>
    <Code playroom={false}>
      {`
        import { useToast } from 'braid-design-system';

        export const App = () => {
          const showToast = useToast();

          const onError = () => {
            showToast({
              tone: 'critical',
              message: 'Some error occured',
              description: 'Longer description of error and how to resolve it',
              action: {
                label: 'Retry',
                onClick: retryFn
              },
            });
          };

          const onSuccess = () => {
            showToast({
              tone: 'positive',
              message: 'Message sent'
            });
          };

          return <YourComponent onError={onError} onSuccess={onSuccess} />;
        }
      `}
    </Code>
  </Stack>
);

const docs: ComponentDocs = {
  description,
  category: 'Content',
  examples: [
    {
      label: 'Positive Toast',
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'Positive toast',
          tone: 'positive',
          action: { label: 'View', onClick: () => {} },
        } as const;

        return (
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              onClear={handler}
              {...toastProps}
            />
            <Box display="flex">
              <Button onClick={() => showToast(toastProps)}>
                Show animation <IconPromote alignY="lowercase" />
              </Button>
            </Box>
          </Stack>
        );
      },
      code: `
        const showToast = useToast();

        showToast({
          message: 'Positive toast',
          tone: 'positive',
          action: { label: 'View', onClick: () => {} },
        })
      `,
    },
    {
      label: 'Toast with no duplicates',
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'There can only be one',
          tone: 'positive',
          key: 'deduped',
        } as const;

        return (
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              onClear={handler}
              {...toastProps}
            />
            <Box display="flex">
              <Button onClick={() => showToast(toastProps)}>
                Show animation <IconPromote alignY="lowercase" />
              </Button>
            </Box>
          </Stack>
        );
      },
      code: `
        const showToast = useToast();

        showToast({
          message: 'There can only be one of me',
          tone: 'positive',
          key: 'deduped'
        })
      `,
    },
    {
      label: 'Positive Toast with description',
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'Positive toast',
          tone: 'positive',
          description:
            'With a longer piece of text describing what has occured.',
          action: { label: 'View', onClick: () => {} },
        } as const;

        return (
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              onClear={handler}
              {...toastProps}
            />
            <Box display="flex">
              <Button onClick={() => showToast(toastProps)}>
                Show animation <IconPromote alignY="lowercase" />
              </Button>
            </Box>
          </Stack>
        );
      },
      code: `
        const showToast = useToast();

        showToast({
          message: 'Positive toast',
          tone: 'positive',
          description: 'With a longer piece of text describing what has occured.',
          action: { label: 'View', onClick: () => {} },
        })
      `,
    },
    {
      label: 'Critical Toast',
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'Critical toast',
          tone: 'critical',
        } as const;

        return (
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              onClear={handler}
              {...toastProps}
            />
            <Box display="flex">
              <Button onClick={() => showToast(toastProps)}>
                Show animation <IconPromote alignY="lowercase" />
              </Button>
            </Box>
          </Stack>
        );
      },
      code: `
        const showToast = useToast();

        showToast({ message: 'Critical toast', tone: 'critical' })
        `,
    },
    {
      label: 'Critical Toast with description',
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'Critical toast',
          tone: 'critical',
          description:
            'With a longer piece of text describing what went wrong.',
          action: { label: 'Goto error', onClick: () => {} },
        } as const;

        return (
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme}
              onClear={handler}
              {...toastProps}
            />
            <Box display="flex">
              <Button onClick={() => showToast(toastProps)}>
                Show animation <IconPromote alignY="lowercase" />
              </Button>
            </Box>
          </Stack>
        );
      },
      code: `
        const showToast = useToast();

        showToast({
          message: 'Critical toast',
          tone: 'critical',
          description: 'With a longer piece of text describing what went wrong.',
          action: { label: 'Goto error', onClick: () => {} },
        })
      `,
    },
  ],
};

export default docs;
