import React, { useState, Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Announcement } from './Announcement';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { Box } from '../Box/Box';
import { TextLink } from '../TextLink/TextLink';
import { Strong } from '../Strong/Strong';
import { Stack } from '../Stack/Stack';
import { Heading } from '../Heading/Heading';
import { InlineCode } from '../../../site/src/App/InlineCode/InlineCode';
import Code from '../../../site/src/App/Code/Code';

const messages = [
  'How did the web developer stir the soup?',
  'With an aria ladle!',
];

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Stack space="large">
      <Text>
        Announces extra information to screen reader users without stealing
        focus (using{' '}
        <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">
          aria-live
        </TextLink>
        ). This is useful for giving extra context to complex interactive
        components. For example,{' '}
        <TextLink href="/components/Autosuggest">Autosuggest</TextLink> uses
        this to announce how many suggestions are available.
      </Text>
      <Text>
        <Strong>Note:</Strong> Announcement should only be used for adding
        context to interactive components.{' '}
        <TextLink href="/components/HiddenVisually">HiddenVisually</TextLink>{' '}
        should be used for adding context to static markup. If you&apos;re
        unsure which to use contact{' '}
        <TextLink href="https://seekchat.slack.com/channels/braid-support">
          #braid-support
        </TextLink>
        .
      </Text>
      <Heading level="3">Usage</Heading>
      <Text>
        Announcement must be rendered <Strong>before</Strong> sending it any
        messages. This is due to how <InlineCode>aria-live</InlineCode> works.
        Therefore you should never use it to announce information on mount of a
        component. You should also not conditionally render it, and rather
        change or remove the current message.
      </Text>

      <Stack space="medium">
        <Text tone="critical">Example of incorrect usage</Text>
        <Code>{`
          <Box>
            {shouldAnnounceMessage ? <Announcement>Something happened</Announcement> : null}
          </Box>
      `}</Code>
      </Stack>

      <Stack space="medium">
        <Text tone="positive">Example of correct usage</Text>
        <Code>{`
          <Box>
            <Announcement>{shouldAnnounceMessage ? 'Something happened' : null}</Announcement>
          </Box>
      `}</Code>
      </Stack>
    </Stack>
  ),
  screenshotWidths: [],
  examples: [
    {
      showCodeByDefault: true,
      Container: ({ children }) => (
        <Box style={{ maxWidth: 200 }}>{children}</Box>
      ),
      Example: () => {
        const [messageIndex, setMesssage] = useState<number>(-1);

        return (
          <Fragment>
            <Button
              onClick={() =>
                setMesssage((curr) => (curr >= messages.length ? 0 : curr + 1))
              }
            >
              Announce
            </Button>
            <Announcement>{messages[messageIndex]}</Announcement>
          </Fragment>
        );
      },
      code: `
        <Announcement>{shouldAnnounceMessage ? 'Something happened' : null}</Announcement>
      `,
    },
  ],
};

export default docs;
