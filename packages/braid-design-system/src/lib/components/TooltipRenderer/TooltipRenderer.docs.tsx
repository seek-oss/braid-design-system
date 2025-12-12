import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import {
  TooltipRenderer,
  Text,
  Stack,
  Inline,
  Box,
  IconHelp,
  TextLink,
  Strong,
  Button,
  List,
} from '..';

import { TooltipContent } from './TooltipRenderer';

import { constants } from './TooltipRenderer.css';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A concise, floating message that gives users non-critical, extra context
      on mouse hover or keyboard focus.
    </Text>
  ),
  Example: () =>
    source(
      <Inline space="small">
        <TooltipRenderer tooltip={<Text>This is a tooltip!</Text>}>
          {({ triggerProps }) => (
            <Box aria-label="Help" {...triggerProps}>
              <IconHelp />
            </Box>
          )}
        </TooltipRenderer>
      </Inline>,
    ),
  alternatives: [
    {
      name: 'Dialog',
      description:
        'For exposing additional content in a modal with rich formatting.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing optional content inline with a light visual treatment.',
    },
  ],
  accessibility: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/">
          WAI-ARIA Tooltip Pattern.
        </TextLink>
      </Text>
      <Text>
        Tooltips appear on mouse hover, tap and keyboard focus, and are hidden
        when scrolling and clicking/tapping/focusing on other elements.
      </Text>
      <Text>
        Tooltips cannot contain interactive elements like links, buttons or form
        elements.
      </Text>
    </Stack>
  ),
  additional: [
    {
      label: 'Placement',
      description: (
        <>
          <Text>
            Tooltips can be triggered on any element of your choice. They are
            positioned above the trigger element by default, but you can
            configure this via the <Strong>placement</Strong> prop which accepts{' '}
            <Strong>top</Strong>, <Strong>bottom</Strong>, <Strong>left</Strong>
            , or <Strong>right</Strong>.
          </Text>
          <Text>
            Whichever direction you choose, the tooltip will be centred against
            the trigger element.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small" align="center">
            <TooltipRenderer
              placement="top"
              tooltip={<Text>The placement is &ldquo;top&rdquo;</Text>}
            >
              {({ triggerProps }) => <Button {...triggerProps}>Top</Button>}
            </TooltipRenderer>
            <TooltipRenderer
              placement="bottom"
              tooltip={<Text>The placement is &ldquo;bottom&rdquo;</Text>}
            >
              {({ triggerProps }) => <Button {...triggerProps}>Bottom</Button>}
            </TooltipRenderer>
            <TooltipRenderer
              placement="left"
              tooltip={<Text>The placement is &ldquo;left&rdquo;</Text>}
            >
              {({ triggerProps }) => <Button {...triggerProps}>Left</Button>}
            </TooltipRenderer>
            <TooltipRenderer
              placement="right"
              tooltip={<Text>The placement is &ldquo;right&rdquo;</Text>}
            >
              {({ triggerProps }) => <Button {...triggerProps}>Right</Button>}
            </TooltipRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Formatting your message',
      description: (
        <>
          <Text>
            To ensure readability, Tooltips have a maximum width of{' '}
            {constants.maxWidth}, which means that text will wrap onto multiple
            lines if you provide enough content.
          </Text>
          <Text>
            You can also use multiple{' '}
            <TextLink href="/components/Text">Text</TextLink> elements and
            layout components like{' '}
            <TextLink href="/components/Stack">Stack</TextLink> to create more
            tailored layouts.
          </Text>
          <Text>
            Keep in mind that Tooltip content should be brief. Ideally less than
            100 characters / 20 words, and a maximum of 250 characters / 50
            words.
          </Text>
        </>
      ),
      Example: () => {
        const { code } = source(
          <TooltipRenderer
            placement="bottom"
            tooltip={
              <Stack space="medium">
                <Text size="large">Large text</Text>
                <Text>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog. The quick brown fox jumps over
                  the lazy dog.
                </Text>
              </Stack>
            }
          >
            {({ triggerProps }) => (
              <Inline space="small" align="center">
                <Box aria-label="Help" {...triggerProps}>
                  <IconHelp />
                </Box>
              </Inline>
            )}
          </TooltipRenderer>,
        );

        return {
          code,
          value: (
            <Stack space="none" align="center">
              <TooltipContent placement="bottom">
                <Stack space="medium">
                  <Text size="large">Large text</Text>
                  <Text>
                    The quick brown fox jumps over the lazy dog. The quick brown
                    fox jumps over the lazy dog. The quick brown fox jumps over
                    the lazy dog.
                  </Text>
                </Stack>
              </TooltipContent>
            </Stack>
          ),
        };
      },
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Tooltip:</Text>
            <List space="large">
              <Text>
                to provide optional information such as a short explanation of
                what something means.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Tooltip:</Text>
            <List space="large">
              <Text>
                if the information is important or the user needs it to complete
                a task (make it visible up front)
              </Text>
              <Text>
                to display complex content including CTAs or images (consider
                using a <TextLink href="/components/Dialog">Dialog</TextLink>{' '}
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
          The trigger element must support <Strong>ref</Strong>,{' '}
          <Strong>tabIndex</Strong> and <Strong>aria-describedby</Strong> props.
        </Text>
      ),
    },
  ],
};

export default docs;
