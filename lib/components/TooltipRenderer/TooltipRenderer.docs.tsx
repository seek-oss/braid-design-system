import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import source from '../../utils/source.macro';
import {
  TooltipRenderer,
  Text,
  Stack,
  Inline,
  Box,
  IconHelp,
  TextLink,
  Strong,
  Badge,
} from '..';
import { TooltipContent } from './TooltipRenderer';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id }) =>
    source(
      <Inline space="small">
        <TooltipRenderer
          id={id}
          tooltip={
            <Text>
              This is a tooltip! If you provide enough content, the text will
              wrap onto multiple lines.
            </Text>
          }
        >
          {({ triggerProps }) => (
            <Box aria-label="Help" {...triggerProps}>
              <IconHelp />
            </Box>
          )}
        </TooltipRenderer>
      </Inline>,
    ),
  alternatives: [],
  accessibility: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#tooltip">
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
      label: 'Element support',
      description: (
        <Text>
          Tooltips can be attached to{' '}
          <TextLink href="/components/Box">Box</TextLink> and{' '}
          <TextLink href="/components/Badge">Badge.</TextLink>
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Inline space="medium">
            <TooltipRenderer id={`${id}_1`} tooltip={<Text>Tooltip!</Text>}>
              {({ triggerProps }) => <Badge {...triggerProps}>Badge</Badge>}
            </TooltipRenderer>
          </Inline>,
        ),
    },
    {
      label: 'Custom formatting',
      description: (
        <Text>
          You can use multiple text elements and layout components to create
          more custom layouts.
        </Text>
      ),
      Example: ({ id }) => ({
        code: source(
          <Inline space="small">
            <TooltipRenderer
              id={id}
              tooltip={
                <Stack space="medium">
                  <Text weight="strong">Strong text</Text>
                  <Text>
                    The quick brown fox jumps over the lazy dog. The quick brown
                    fox jumps over the lazy dog. The quick brown fox jumps over
                    the lazy dog.
                  </Text>
                </Stack>
              }
            >
              {({ triggerProps }) => (
                <Box aria-label="Help" {...triggerProps}>
                  <IconHelp />
                </Box>
              )}
            </TooltipRenderer>
          </Inline>,
        ).code,
        value: (
          <TooltipContent opacity={100}>
            <Stack space="medium">
              <Text weight="strong">Strong text</Text>
              <Text>
                The quick brown fox jumps over the lazy dog. The quick brown fox
                jumps over the lazy dog. The quick brown fox jumps over the lazy
                dog.
              </Text>
            </Stack>
          </TooltipContent>
        ),
      }),
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
