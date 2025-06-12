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
} from '..';

import {
  type TooltipRendererProps,
  StaticTooltipProvider,
  TooltipTextDefaultsProvider,
} from './TooltipRenderer';

import { constants } from './TooltipRenderer.css';

const StaticTooltip = ({
  tooltip,
  placement,
  children,
}: TooltipRendererProps) => {
  const contentPlaceholder = (
    <Box userSelect="none" opacity={0} aria-hidden>
      {children({ triggerProps: {} as any })}
      <TooltipTextDefaultsProvider>
        <Box
          style={{
            maxWidth: constants.maxWidth,
            paddingTop: constants.arrowSize,
          }}
        >
          <Box padding="medium">{tooltip}</Box>
        </Box>
      </TooltipTextDefaultsProvider>
    </Box>
  );

  return (
    <StaticTooltipProvider>
      <Box position="relative">
        {placement === 'top' ? contentPlaceholder : null}
        <Box position="absolute" left={0} right={0}>
          <TooltipRenderer tooltip={tooltip} placement={placement}>
            {children}
          </TooltipRenderer>
        </Box>
        {placement === 'bottom' ? contentPlaceholder : null}
      </Box>
    </StaticTooltipProvider>
  );
};

const docs: ComponentDocs = {
  category: 'Content',
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
        'For exposing additional content in a modal with richer formatting.',
    },
    {
      name: 'Disclosure',
      description:
        'For revealing content inline with a light visual treatment.',
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
      label: 'Development considerations',
      description: (
        <Text>
          The trigger element must support <Strong>ref</Strong>,{' '}
          <Strong>tabIndex</Strong> and <Strong>aria-describedby</Strong> props.
        </Text>
      ),
    },
    {
      label: 'Placement',
      description: (
        <>
          <Text>
            Tooltips are positioned above the trigger element by default, but
            you can configure this via the <Strong>placement</Strong> prop which
            accepts either <Strong>top</Strong> or <Strong>bottom</Strong>.
          </Text>
          <Text>
            Whichever direction you choose, the tooltip will be centred against
            the trigger element.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Inline space="small">
            <TooltipRenderer
              placement="top"
              tooltip={<Text>The placement is “top”</Text>}
            >
              {/* Todo - fix ref type issue */}
              {({ triggerProps }) => <Button {...triggerProps}>Top</Button>}
            </TooltipRenderer>
            <TooltipRenderer
              placement="bottom"
              tooltip={<Text>The placement is “bottom”</Text>}
            >
              {({ triggerProps }) => <Button {...triggerProps}>Bottom</Button>}
            </TooltipRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Formatting',
      description: (
        <>
          <Text>
            To ensure readability, tooltips have a maximum width of{' '}
            {constants.maxWidth}, which means that text will wrap onto multiple
            lines if you provide enough content.
          </Text>
          <Text>
            You can also use multiple text elements and layout components to
            create more custom layouts.
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
            <StaticTooltip
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
            </StaticTooltip>
          ),
        };
      },
    },
  ],
};

export default docs;
