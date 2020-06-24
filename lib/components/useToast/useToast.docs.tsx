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
  Columns,
  Column,
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
  screenshotWidths: [320, 768],
  category: 'Content',
  examples: [
    {
      label: 'Positive Toast',
      storybook: false,
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
          <Columns space="gutter" alignY="center" collapseBelow="tablet">
            <Column width="content">
              <Toast
                id={id}
                dedupeKey={id}
                shouldRemove={false}
                treatTheme={theme}
                onClear={handler}
                {...toastProps}
              />
            </Column>
            <Column width="content">
              <Box display="flex" justifyContent="center">
                <Box>
                  <Button onClick={() => showToast(toastProps)}>
                    Show animation <IconPromote alignY="lowercase" />
                  </Button>
                </Box>
              </Box>
            </Column>
          </Columns>
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
      storybook: false,
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
          <Columns space="gutter" alignY="center" collapseBelow="tablet">
            <Column width="content">
              <Toast
                id={id}
                dedupeKey={id}
                shouldRemove={false}
                treatTheme={theme}
                onClear={handler}
                {...toastProps}
              />
            </Column>
            <Column width="content">
              <Box display="flex" justifyContent="center">
                <Box>
                  <Button onClick={() => showToast(toastProps)}>
                    Show animation <IconPromote alignY="lowercase" />
                  </Button>
                </Box>
              </Box>
            </Column>
          </Columns>
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
      storybook: false,
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
          <Columns space="gutter" alignY="center" collapseBelow="tablet">
            <Column width="content">
              <Toast
                id={id}
                dedupeKey={id}
                shouldRemove={false}
                treatTheme={theme}
                onClear={handler}
                {...toastProps}
              />
            </Column>
            <Column width="content">
              <Box display="flex" justifyContent="center">
                <Box>
                  <Button onClick={() => showToast(toastProps)}>
                    Show animation <IconPromote alignY="lowercase" />
                  </Button>
                </Box>
              </Box>
            </Column>
          </Columns>
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
      storybook: false,
      playroom: false,
      Example: ({ id, handler }) => {
        const showToast = useToast();
        const theme = useTheme();

        const toastProps = {
          message: 'Critical toast',
          tone: 'critical',
        } as const;

        return (
          <Columns space="gutter" alignY="center" collapseBelow="tablet">
            <Column width="content">
              <Toast
                id={id}
                dedupeKey={id}
                shouldRemove={false}
                treatTheme={theme}
                onClear={handler}
                {...toastProps}
              />
            </Column>
            <Column width="content">
              <Box display="flex" justifyContent="center">
                <Box>
                  <Button onClick={() => showToast(toastProps)}>
                    Show animation <IconPromote alignY="lowercase" />
                  </Button>
                </Box>
              </Box>
            </Column>
          </Columns>
        );
      },
      code: `
        const showToast = useToast();

        showToast({ message: 'Critical toast', tone: 'critical' })
        `,
    },
    {
      label: 'Critical Toast with description',
      storybook: false,
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
          <Columns space="gutter" alignY="center" collapseBelow="tablet">
            <Column width="content">
              <Toast
                id={id}
                dedupeKey={id}
                shouldRemove={false}
                treatTheme={theme}
                onClear={handler}
                {...toastProps}
              />
            </Column>
            <Column width="content">
              <Box display="flex" justifyContent="center">
                <Box>
                  <Button onClick={() => showToast(toastProps)}>
                    Show animation <IconPromote alignY="lowercase" />
                  </Button>
                </Box>
              </Box>
            </Column>
          </Columns>
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
    {
      label: 'Critical toast',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast"
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Critical toast w/actions',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast w/action"
            action={{
              label: 'Do the action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Critical toast w/descriptions',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="critical"
            message="Critical toast"
            description="A really long description about toast stuff that is quite long and stuff"
            action={{
              label: 'Action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast"
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast w/actions',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast w/actions"
            action={{
              label: 'Do the action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
    {
      label: 'Positive toast w/descriptions',
      docsSite: false,
      Example: () => {
        const treatTheme = useTheme();

        return (
          <Toast
            tone="positive"
            message="Positive toast"
            description="A really long description about toast stuff that is quite long and stuff"
            action={{
              label: 'Action',
              onClick: () => {},
            }}
            treatTheme={treatTheme}
            onClear={() => {}}
            id="n/a"
            dedupeKey="n/a"
            shouldRemove={false}
          />
        );
      },
    },
  ],
};

export default docs;
