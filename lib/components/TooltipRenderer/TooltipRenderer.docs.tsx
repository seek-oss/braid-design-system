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
              wrap.
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
  description: (
    <Stack space="large">
      <Text>
        This component allows you to attach standard tooltips to a custom
        trigger element. The tooltip appears on mouse hover, tap and keyboard
        focus.
      </Text>
    </Stack>
  ),
  accessibility: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#tooltip">
          WAI-ARIA Tooltip Pattern.
        </TextLink>
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
          The <Strong>triggerProps</Strong> object provides low level props that
          are currently only supported on{' '}
          <TextLink href="/components/Box">Box.</TextLink>
        </Text>
      ),
    },
  ],
};

export default docs;
