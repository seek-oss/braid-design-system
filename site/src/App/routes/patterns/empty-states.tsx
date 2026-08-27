import source from '@braid-design-system/source.macro';
import {
  Actions,
  Button,
  Card,
  ContentBlock,
  Heading,
  List,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
  Tiles,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Displays a message in place of content when none is available, guiding
      users on what to do next.
    </Text>
  ),
  alternatives: [
    {
      name: 'error-state',
      section: 'patterns',
      description:
        'For when the website or app fails to complete an expected action',
    },
    {
      name: 'Alert',
      description: 'For in-flow messaging',
    },
    {
      name: 'Notice',
      description: 'For lighter in-flow messaging',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Large and full-page',
        description: (
          <Text>
            For empty states that take up most or all of the page, such as when
            there are no matching search results.
          </Text>
        ),
        Example: ({ responsiveValue }) =>
          source(
            <ContentBlock width="small">
              <Stack
                align="center"
                space={{ mobile: 'medium', desktop: 'large' }}
              >
                <Placeholder
                  shape="round"
                  width={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                  height={responsiveValue({
                    mobile: '96px',
                    tablet: '128px',
                    desktop: '192px',
                  })}
                />
                <Stack space="medium" align="center">
                  <Heading level="2" weight="weak" align="center">
                    An example empty state
                  </Heading>
                  <Text tone="secondary" align="center">
                    This is a center aligned example with a short summary. You
                    can use a button or <TextLink href="#">a TextLink</TextLink>{' '}
                    to suit your needs.
                  </Text>
                  <Actions>
                    <Button variant="ghost">Button</Button>
                  </Actions>
                </Stack>
              </Stack>
            </ContentBlock>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Anatomy</Heading>
            <List space="large">
              <Text>
                Illustration (recommended): A static image that relates to the
                user&rsquo;s situation
              </Text>
              <Text>
                <TextLink href="/components/Heading">Heading</TextLink>: A short
                summary of the situation. Refer to the content guidelines below
              </Text>
              <Text>
                <TextLink href="/components/Text">Text</TextLink>: Copy that
                informs the user why the data can&rsquo;t be displayed and/or
                what they might see when data becomes available
              </Text>
              <Text>
                <TextLink href="/components/TextLink">TextLink</TextLink>{' '}
                (optional): When appropriate, provide a link to further help or
                info
              </Text>
              <Text>
                <TextLink href="/components/Button">Button</TextLink>{' '}
                (optional): When appropriate, provide actions for what to do
                next
              </Text>
            </List>
          </>
        ),
      },
      {
        description: (
          <>
            <Heading level="4">Visual guidelines</Heading>
            <List space="large">
              <Text>
                Display the message on a neutral surface. Avoid using heavy or
                saturated background colours such as brand accents.
              </Text>
              <Text>
                Centre align components by default. Left align when the content
                includes a list, and optionally place the illustration to the
                left to save vertical space on longer content. It will still
                stack on mobile.
              </Text>
            </List>
          </>
        ),
      },
      {
        label: 'Small and inline',
        description: (
          <Text>
            For empty states that sit within content, such as a dashboard widget
            or tile, use an <TextLink href="/components/Alert">Alert</TextLink>{' '}
            or <TextLink href="/components/Notice">Notice</TextLink> with the
            tone <Strong>info</Strong>. Do not use a large format empty state
            inline.
          </Text>
        ),
        Example: () =>
          source(
            <Tiles columns={3} space="small">
              <Card height="full">
                <Stack space="large">
                  <Heading level="4">Widget title</Heading>
                  <Stack space="small">
                    <Text>
                      Widget content lorem ipsum dolor sit amet, consectetur
                      adipiscing elit amet.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
              <Card height="full">
                <Stack space="large">
                  <Heading level="4">Widget title</Heading>
                  <Stack space="small">
                    <Notice tone="info">
                      <Text>
                        We don&rsquo;t have any data for this yet. Please check
                        back later.
                      </Text>
                    </Notice>
                  </Stack>
                </Stack>
              </Card>
              <Card height="full">
                <Stack space="large">
                  <Heading level="4">Widget title</Heading>
                  <Stack space="small">
                    <Text>
                      Widget content lorem ipsum dolor sit amet, consectetur
                      adipiscing elit amet.
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Tiles>,
          ),
      },
    ],
    bestPractices: [
      {
        label: 'Content guidelines',
        description: (
          <>
            <Text>
              Empty states usually fall into one of four categories. The type
              determines the response.
            </Text>
            <List space="large">
              <Text>
                <Strong>Negative</Strong> — the content doesn&rsquo;t exist and
                there&rsquo;s nothing for the user to do. Explain why, offer a
                workaround if there is one, and be clear about whether content
                is coming later.
              </Text>
              <Text>
                <Strong>Neutral</Strong> — the content doesn&rsquo;t exist and
                there&rsquo;s something for the user to do. Explain clearly what
                they need to do and include a CTA if appropriate.
              </Text>
              <Text>
                <Strong>Positive</Strong> — the user has cleared outstanding
                items. Acknowledge the work and celebrate in proportion to the
                effort.
              </Text>
              <Text>
                <Strong>Onboarding</Strong> — the user hasn&rsquo;t used the
                feature yet. Explain what the feature is, why it matters, and
                what they should do next.
              </Text>
            </List>
          </>
        ),
      },
      {
        label: 'When to use',
        description: (
          <List space="large">
            <Text>
              No data yet — the user understands what will be available when
              data has been added
            </Text>
            <Text>
              No results when searching — the user understands how to adjust
              search criteria or filters
            </Text>
            <Text>
              First-time user — the user understands what actions they must take
              to populate data
            </Text>
          </List>
        ),
      },
    ],
  },
};

export default docs;
