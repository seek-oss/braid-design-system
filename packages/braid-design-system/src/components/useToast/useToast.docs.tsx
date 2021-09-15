import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Button,
  Text,
  Stack,
  Inline,
  TextLink,
  Strong,
  IconPromote,
  Notice,
} from '..';
import { useThemeSettings } from '../../../site/src/App/ThemeSetting';
import Code from '../../../site/src/App/Code/Code';
import Toast from './Toast';
import source from '../../utils/source.macro';
import { useToast } from './ToastContext';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id, handler }) => {
    const { theme } = useThemeSettings();
    const showToast = useToast();

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
          Show animation <IconPromote alignY="lowercase" />
        </Button>
      </Inline>,
    );

    return {
      code,
      value: (
        <Stack space="large" align="center">
          <Toast
            id={id}
            dedupeKey={id}
            shouldRemove={false}
            treatTheme={theme.treatTheme}
            vanillaTheme={theme.vanillaTheme}
            onClear={handler}
            message="Positive toast"
            tone="positive"
          />
          {value}
        </Stack>
      ),
    };
  },
  accessibility: (
    <Text>
      Follows the{' '}
      <TextLink href="https://www.w3.org/TR/wai-aria-practices/#alert">
        WAI-ARIA Alert Pattern.
      </TextLink>
    </Text>
  ),
  alternatives: [
    {
      name: 'Alert',
      description: 'For in-flow messaging.',
    },
    {
      name: 'Notice',
      description: 'For lighter in-flow messaging.',
    },
  ],
  additional: [
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

          export default () => {
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
      label: 'Tones',
      description: (
        <Text>
          Toasts support <Strong>positive</Strong> and <Strong>critical</Strong>{' '}
          tones.
        </Text>
      ),
      Example: ({ id, showToast, handler }) => {
        const { theme } = useThemeSettings();

        const { code } = source(
          <Stack space="small">
            <Inline space="small" align="center">
              <Button
                onClick={() =>
                  showToast({
                    tone: 'positive',
                    message: 'Positive message',
                  })
                }
              >
                Show positive toast <IconPromote alignY="lowercase" />
              </Button>
            </Inline>

            <Inline space="small" align="center">
              <Button
                onClick={() =>
                  showToast({
                    tone: 'critical',
                    message: 'Critical message',
                  })
                }
              >
                Show critical toast <IconPromote alignY="lowercase" />
              </Button>
            </Inline>
          </Stack>,
        );

        const { value } = source(
          <Stack space="large" align="center">
            <Toast
              id={`${id}_1`}
              dedupeKey={`${id}_1`}
              shouldRemove={false}
              treatTheme={theme.treatTheme}
              vanillaTheme={theme.vanillaTheme}
              onClear={handler}
              message="Positive message"
              tone="positive"
            />
            <Toast
              id={`${id}_2`}
              dedupeKey={`${id}_2`}
              shouldRemove={false}
              treatTheme={theme.treatTheme}
              vanillaTheme={theme.vanillaTheme}
              onClear={handler}
              message="Critical message"
              tone="critical"
            />
          </Stack>,
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
      Example: ({ id, showToast, handler }) => {
        const { theme } = useThemeSettings();

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
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Inline>,
        );

        const { value } = source(
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme.treatTheme}
              vanillaTheme={theme.vanillaTheme}
              onClear={handler}
              message="Positive message"
              tone="positive"
              description="Longer description providing more context for the user."
            />
          </Stack>,
        );

        return {
          code,
          value,
        };
      },
    },
    {
      label: 'Actions',
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
      Example: ({ id, showToast, handler }) => {
        const { theme } = useThemeSettings();

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
              Show animation <IconPromote alignY="lowercase" />
            </Button>
          </Inline>,
        );

        const { value } = source(
          <Stack space="large" align="center">
            <Toast
              id={id}
              dedupeKey={id}
              shouldRemove={false}
              treatTheme={theme.treatTheme}
              vanillaTheme={theme.vanillaTheme}
              onClear={handler}
              message="Positive message"
              tone="positive"
              action={{
                label: 'Undo',
                onClick: () => alert('Undo!'),
              }}
            />
          </Stack>,
        );
        /* eslint-enable no-alert */

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
  ],
};

export default docs;
