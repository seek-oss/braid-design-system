import source from '@braid-design-system/source.macro';
import Code from 'site/App/Code/Code';
import type { ComponentDocs } from 'site/types';

import {
  Box,
  Button,
  Text,
  Stack,
  Inline,
  TextLink,
  Strong,
  Notice,
  IconLanguage,
  IconBookmark,
  List,
} from '..';

import Toast, { toastDuration } from './Toast';
import { StaticToaster } from './Toaster';

// For static Toast examples, keys do not need to be unique
const defaultProps = {
  toastKey: `toastKey`,
  dedupeKey: `dedupeKey`,
} as const;

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A brief, temporary message that appears at the bottom of the screen to
      acknowledge user actions without interrupting their workflow.
    </Text>
  ),
  Example: ({ showToast }) => {
    const { code, value } = source(
      <Inline space="large" align="center">
        <Button
          onClick={() =>
            showToast({
              message: 'Positive toast',
              tone: 'positive',
            })
          }
        >
          Show animation
        </Button>
      </Inline>,
    );

    return {
      code,
      value: (
        <Stack space="large" align="center">
          <StaticToaster>
            <Toast
              {...defaultProps}
              shouldRemove={false}
              onClose={() => {}}
              message="Positive toast"
              tone="positive"
            />
          </StaticToaster>
          {value}
        </Stack>
      ),
    };
  },
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">
        WAI-ARIA Alert Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'Alert',
      description:
        'For strong in-flow messages that sit at page or section level.',
    },
    {
      name: 'Notice',
      description:
        'For light in-flow messages that sit within a section, card, or widget.',
    },
  ],
  additional: [
    {
      label: 'Choosing a tone',
      description: (
        <>
          <Text>
            Use the <Strong>tone</Strong> property to help communicate the
            meaning behind your message. Toasts support{' '}
            <Strong>positive</Strong>, <Strong>critical</Strong> and{' '}
            <Strong>neutral</Strong> tones.
          </Text>
          <Text>
            Read more about <TextLink href="/foundations/tones">Tones</TextLink>
            .
          </Text>
          <Notice>
            <Text>
              When using a <Strong>neutral</Strong> tone, an{' '}
              <Strong>icon</Strong> may optionally be provided. For consistency,
              the tone of the icon is set to <Strong>secondary</Strong> and
              cannot be customised.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ showToast }) => {
        const { code } = source(
          <Box padding="medium">
            <Stack space="small">
              <Text>
                Show toast <Strong>tone</Strong> example:
              </Text>
              <Inline space="small">
                <Button
                  onClick={() =>
                    showToast({
                      tone: 'positive',
                      message: 'Positive message',
                    })
                  }
                >
                  Positive
                </Button>

                <Button
                  onClick={() =>
                    showToast({
                      tone: 'critical',
                      message: 'Critical message',
                    })
                  }
                >
                  Critical
                </Button>

                <Button
                  onClick={() =>
                    showToast({
                      tone: 'neutral',
                      message: 'Neutral message',
                    })
                  }
                >
                  Neutral
                </Button>

                <Button
                  onClick={() =>
                    showToast({
                      tone: 'neutral',
                      icon: <IconBookmark />,
                      message: 'Neutral with icon',
                    })
                  }
                >
                  Neutral with icon
                </Button>
              </Inline>
            </Stack>
          </Box>,
        );

        const { value } = source(
          <StaticToaster>
            <Stack space="medium">
              <Toast
                {...defaultProps}
                shouldRemove={false}
                onClose={() => {}}
                message="Positive message"
                tone="positive"
              />
              <Toast
                {...defaultProps}
                shouldRemove={false}
                onClose={() => {}}
                message="Critical message"
                tone="critical"
              />
              <Toast
                {...defaultProps}
                shouldRemove={false}
                onClose={() => {}}
                message="Neutral message"
                tone="neutral"
              />
              <Toast
                {...defaultProps}
                shouldRemove={false}
                onClose={() => {}}
                message="Neutral message with icon"
                tone="neutral"
                icon={<IconBookmark />}
              />
            </Stack>
          </StaticToaster>,
        );

        return {
          code,
          value,
        };
      },
    },
    {
      label: 'Descriptions',
      description: (
        <Text>
          If you need to provide more context to the user, you can also provide
          a description.
        </Text>
      ),
      Example: ({ showToast }) => {
        const { code } = source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  tone: 'positive',
                  message: 'Positive message',
                  description:
                    'Longer description providing more context for the user.',
                })
              }
            >
              Show animation
            </Button>
          </Inline>,
        );

        const { value } = source(
          <StaticToaster>
            <Toast
              {...defaultProps}
              shouldRemove={false}
              onClose={() => {}}
              message="Positive message"
              tone="positive"
              description="Longer description providing more context for the user."
            />
          </StaticToaster>,
        );

        return {
          code,
          value,
        };
      },
    },
    {
      label: 'Including actions',
      description: (
        <>
          <Text>
            You can allow users to perform a single associated action via the{' '}
            <Strong>action</Strong> prop. When the action is performed, the
            toast is automatically removed from the screen.
          </Text>
          <Notice tone="info">
            <Text>
              Toast actions are not available to screen readers. To maintain
              accessibility, please ensure that these actions are either
              non-essential or available elsewhere in your application.
            </Text>
          </Notice>
        </>
      ),
      Example: ({ showToast }) => {
        /* eslint-disable no-alert */
        const { code } = source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  tone: 'positive',
                  message: 'Positive message',
                  action: {
                    label: 'Undo',
                    onClick: () => alert('Undo!'),
                  },
                })
              }
            >
              Show animation
            </Button>
          </Inline>,
        );

        const { value } = source(
          <StaticToaster>
            <Toast
              {...defaultProps}
              shouldRemove={false}
              onClose={() => {}}
              message="Positive message"
              tone="positive"
              action={{
                label: 'Undo',
                onClick: () => alert('Undo!'),
              }}
            />
          </StaticToaster>,
        );
        /* eslint-enable no-alert */

        return {
          code,
          value,
        };
      },
    },
    {
      description: (
        <Text>
          When an <Strong>action</Strong> is provided in addition to a{' '}
          <Strong>description</Strong>, the layout will stack vertically to
          better accommodate all the content.
        </Text>
      ),
      Example: ({ showToast }) => {
        /* eslint-disable no-alert */
        const { code } = source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  tone: 'positive',
                  message: 'Positive message',
                  description:
                    'Longer description providing more context for the user.',
                  action: {
                    label: 'Undo',
                    onClick: () => alert('Undo!'),
                  },
                })
              }
            >
              Show animation
            </Button>
          </Inline>,
        );

        const { value } = source(
          <StaticToaster>
            <Toast
              {...defaultProps}
              shouldRemove={false}
              onClose={() => {}}
              message="Positive message"
              description="Longer description providing more context for the user."
              tone="positive"
              action={{
                label: 'Undo',
                onClick: () => alert('Undo!'),
              }}
            />
          </StaticToaster>,
        );
        /* eslint-enable no-alert */

        return {
          code,
          value,
        };
      },
    },
    {
      label: 'Dismissing messages',
      description: (
        <>
          <Text>
            {`A toast message can be dismissed via the close button or automatically after ${
              toastDuration / 1000
            } seconds.`}
          </Text>

          <Text tone="promote" id="translations">
            <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
            <Strong>aria-label</Strong> for the close button can be customised
            by providing a <Strong>closeLabel</Strong> prop.
          </Text>
        </>
      ),
      Example: ({ showToast }) => {
        const { code } = source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  tone: 'positive',
                  message: 'Message',
                  description: 'Using a custom close button label',
                  closeLabel: 'Dismiss this message',
                })
              }
            >
              Show animation
            </Button>
          </Inline>,
        );

        const { value } = source(
          <StaticToaster>
            <Toast
              {...defaultProps}
              shouldRemove={false}
              onClose={() => {}}
              tone="positive"
              message="Message"
              description="Using a custom close button label"
              closeLabel="Dismiss this message"
            />
          </StaticToaster>,
        );

        return {
          code,
          value,
        };
      },
    },
    {
      label: 'Deduping',
      description: (
        <Text>
          You can assign a <Strong>key</Strong> to each toast which is used to
          guarantee that only a single toast with a given key is visible at
          once. This is particularly useful for reducing visual noise when your
          application has the potential to generate a lot of toasts.
        </Text>
      ),
      Example: ({ showToast }) =>
        source(
          <Inline space="small" align="center">
            <Button
              onClick={() =>
                showToast({
                  key: '1',
                  tone: 'positive',
                  message: 'Toast 1',
                })
              }
            >
              Toast 1
            </Button>
            <Button
              onClick={() =>
                showToast({
                  key: '2',
                  tone: 'positive',
                  message: 'Toast 2',
                })
              }
            >
              Toast 2
            </Button>
            <Button
              onClick={() =>
                showToast({
                  key: '3',
                  tone: 'positive',
                  message: 'Toast 3',
                })
              }
            >
              Toast 3
            </Button>
          </Inline>,
        ),
    },
    {
      label: 'Playroom prototyping',
      description: (
        <Text>
          The <Strong>showToast</Strong> function used in these examples is
          automatically available in Playroom. You do not need to call the{' '}
          <Strong>useToast</Strong> function.
        </Text>
      ),
    },
    {
      label: 'Development considerations',
      description: (
        <>
          <Text>
            To get access to the <Strong>showToast</Strong> function in your
            application code, call the <Strong>useToast</Strong> Hook.
          </Text>
          <Code playroom={false}>
            {`
              import { useToast } from 'braid-design-system';

              export const Demo = () => {
                const showToast = useToast();

                // etc...
              }
        `}
          </Code>
          <Text>
            To enable this Hook, wrap your app in a{' '}
            <Strong>ToastProvider</Strong>—typically where you render{' '}
            <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
          </Text>
          <Code playroom={false}>
            {`
              import { BraidProvider, ToastProvider } from 'braid-design-system';

              export const App = () => (
                <BraidProvider>
                  <ToastProvider>
                    {/* App code... */}
                  </ToastProvider>
                </BraidProvider>
              )
        `}
          </Code>
        </>
      ),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Toast if your message:</Text>
            <List space="large">
              <Text>
                has been triggered by a user action relevant to their current
                task
              </Text>
              <Text>does not impact the user&rsquo;s ability to continue.</Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Toast if your message:</Text>
            <List space="large">
              <Text>
                needs to be permanently on the screen (use plain{' '}
                <TextLink href="/components/Text">Text</TextLink> instead)
              </Text>
              <Text>
                impacts the user&rsquo;s ability to continue (use an{' '}
                <TextLink href="/components/Alert">Alert</TextLink> or{' '}
                <TextLink href="/components/Notice">Notice</TextLink> instead)
              </Text>
              <Text>
                doesn&rsquo;t relate to the user&rsquo;s current task (as this
                may cause a distraction).
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
  ],
};

export default docs;
