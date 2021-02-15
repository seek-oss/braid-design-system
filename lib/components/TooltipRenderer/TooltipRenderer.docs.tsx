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
} from '..';
import { TooltipContent } from './TooltipRenderer';
import { constants } from './TooltipRenderer.treat';

const docs: ComponentDocs = {
  category: 'Content',
  Example: ({ id }) =>
    source(
      <Inline space="small">
        <TooltipRenderer id={id} tooltip={<Text>This is a tooltip!</Text>}>
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
      label: 'Placement',
      description: (
        <Text>
          You can set the <Strong>placement</Strong> of the tooltip to{' '}
          <Strong>top</Strong> or <Strong>bottom</Strong>. Whichever direction
          you choose, the tooltip will be centred against the trigger element.
        </Text>
      ),
      Example: ({ id }) =>
        source(
          <Inline space="small">
            <TooltipRenderer
              id={`${id}_1`}
              placement="top"
              tooltip={<Text>The placement is “top”</Text>}
            >
              {({ triggerProps }) => (
                <Box
                  cursor="default"
                  background="infoLight"
                  padding="xsmall"
                  borderRadius="standard"
                  {...triggerProps}
                >
                  <Text weight="strong">Top</Text>
                </Box>
              )}
            </TooltipRenderer>
            <TooltipRenderer
              id={`${id}_2`}
              placement="bottom"
              tooltip={<Text>The placement is “bottom”</Text>}
            >
              {({ triggerProps }) => (
                <Box
                  cursor="default"
                  background="infoLight"
                  padding="xsmall"
                  borderRadius="standard"
                  {...triggerProps}
                >
                  <Text weight="strong">Bottom</Text>
                </Box>
              )}
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
            {constants.maxWidth}px, which means that text will wrap onto
            multiple lines if you provide enough content.
          </Text>
          <Text>
            You can also use multiple text elements and layout components to
            create more custom layouts.
          </Text>
        </>
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
