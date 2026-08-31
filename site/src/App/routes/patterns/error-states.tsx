import source from '@braid-design-system/source.macro';
import {
  Actions,
  Box,
  Button,
  Card,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Inline,
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
      Displays a message when an expected action fails, alerting users to the
      problem and how to proceed.
    </Text>
  ),
  alternatives: [
    {
      name: 'empty-state',
      section: 'patterns',
      description: 'For when there is no data available at the present time',
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
            For error states that take up most or all of the page, such as when
            a user is unauthorised.
          </Text>
        ),
        Example: ({ responsiveValue }) =>
          source(
            <Box background="surface" borderRadius="large" padding="gutter">
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
                      How an error might look
                    </Heading>
                    <Text tone="secondary" align="center">
                      This is a center aligned example with a short summary. You
                      can use a button or{' '}
                      <TextLink href="#">a TextLink</TextLink> to suit your
                      needs.
                    </Text>
                    <Actions>
                      <Button variant="ghost">Button</Button>
                    </Actions>
                  </Stack>
                </Stack>
              </ContentBlock>
            </Box>,
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
                <TextLink href="/components/Text">Text</TextLink>: Copy to
                instruct, explain, reassure or support the user
              </Text>
              <Text>
                <TextLink href="/components/TextLink">TextLink</TextLink>{' '}
                (optional): A link to further help or info when appropriate
              </Text>
              <Text>
                <TextLink href="/components/Button">Button</TextLink>{' '}
                (optional): Actions for what to do next when appropriate
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
        Example: ({ responsiveValue }) =>
          source(
            <Box background="surface" borderRadius="large" padding="gutter">
              <ContentBlock width="small">
                <Stack space={{ mobile: 'medium', desktop: 'large' }}>
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
                  <Stack space="medium">
                    <Heading level="2" weight="weak">
                      How an error might look
                    </Heading>
                    <Text tone="secondary">
                      This is a left aligned example with a short summary. You
                      can use a button or{' '}
                      <TextLink href="#">a TextLink</TextLink> to suit your
                      needs.
                    </Text>
                    <List space="medium" tone="secondary">
                      <Text>List item one</Text>
                      <Text>List item two</Text>
                      <Text>List item three</Text>
                    </List>
                    <Inline space="none">
                      <Button variant="ghost">Button</Button>
                    </Inline>
                  </Stack>
                </Stack>
              </ContentBlock>
            </Box>,
          ),
      },
      {
        description: (
          <Text>
            For left aligned error states, the illustration can sit beside the
            copy to save vertical space when the content is lengthy. Left
            aligned illustrations still stack on mobile.
          </Text>
        ),
        Example: ({ responsiveValue }) =>
          source(
            <Box background="surface" borderRadius="large" padding="gutter">
              <ContentBlock width="small">
                <Columns
                  space={{
                    mobile: 'medium',
                    tablet: 'medium',
                    desktop: 'large',
                  }}
                  collapseBelow="tablet"
                  alignY="top"
                >
                  <Column width="content">
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
                  </Column>
                  <Column>
                    <Stack space="medium">
                      <Heading level="2" weight="weak">
                        How an error might look
                      </Heading>
                      <Text tone="secondary">
                        This is a left aligned example with a short summary. You
                        can use a button or{' '}
                        <TextLink href="#">a TextLink</TextLink> to suit your
                        needs.
                      </Text>
                      <List space="medium" tone="secondary">
                        <Text>List item one</Text>
                        <Text>List item two</Text>
                        <Text>List item three</Text>
                        <Text>List item four</Text>
                        <Text>List item five</Text>
                      </List>
                      <Inline space="none">
                        <Button variant="ghost">Button</Button>
                      </Inline>
                    </Stack>
                  </Column>
                </Columns>
              </ContentBlock>
            </Box>,
          ),
      },
      {
        label: 'Small and inline',
        description: (
          <Text>
            For error states that sit within content, such as a dashboard
            widget. Consider using an{' '}
            <TextLink href="/components/Alert">Alert</TextLink> or{' '}
            <TextLink href="/components/Notice">Notice</TextLink> with the tone{' '}
            <Strong>critical</Strong>. If that feels too intense, the{' '}
            <Strong>info</Strong> tone can be used instead.
          </Text>
        ),
        Example: () =>
          source(
            <Tiles columns={{ mobile: 1, tablet: 3 }} space="small">
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
                    <Notice tone="critical">
                      <Text>
                        We can&rsquo;t load this data right now. Please check
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
        label: 'General guidelines',
        description: (
          <List space="large">
            <Text>
              Be as specific as possible. This helps users resolve the issue.
              Don&rsquo;t try to address multiple error scenarios in one
              message.
            </Text>
            <Text>
              Project calm. Show the ideal state of something being fixed rather
              than something being broken. Avoid negative words such as error,
              oops, invalid, failed, problem and wrong.
            </Text>
            <Text>
              Don&rsquo;t blame the user. Make it about what we can&rsquo;t do,
              instead of what the user didn&rsquo;t do. Don&rsquo;t assume how
              they feel or trivialise the situation.
            </Text>
            <Text>
              More isn&rsquo;t always better. If the user needs to follow
              complicated instructions, break the process into steps. Generally
              avoid “please” and “sorry”.
            </Text>
          </List>
        ),
      },
      {
        label: 'Content guidelines',
        description: (
          <>
            <Text>
              Errors are pain points. Handling them with empathy helps users
              resolve issues faster and can turn a negative moment into a more
              lasting connection.
            </Text>
            <List space="large">
              <Text>
                <Strong>Instruct</Strong> when the user can resolve it quickly.
                Tell them clearly what to do and don&rsquo;t make it a big deal.
              </Text>
              <Text>
                <Strong>Reassure</Strong> when they need to wait for SEEK.
                There&rsquo;s little they can do, so let them know we&rsquo;re
                working on it. Light humour can be appropriate.
              </Text>
              <Text>
                <Strong>Explain</Strong> when they can resolve it but it takes
                many steps. Break the process down and provide as much
                information as needed.
              </Text>
              <Text>
                <Strong>Support</Strong> when they can&rsquo;t complete a
                critical or time-sensitive task. Be helpful and calm. This is
                not the time to be playful.
              </Text>
            </List>
          </>
        ),
      },
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use an error state when:</Text>
              <List space="large">
                <Text>
                  there are permissions issues such as unauthorised or forbidden
                  access
                </Text>
                <Text>
                  there are systems issues such as server errors, timeouts or
                  scheduled maintenance
                </Text>
                <Text>
                  configuration is required, such as an unsupported browser
                </Text>
                <Text>
                  a page or resource cannot be found, such as a missing page or
                  bad request
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use an error state when:</Text>
              <List space="large">
                <Text>
                  there is no data available, but nothing has failed (use an{' '}
                  <TextLink href="/patterns/empty-state">Empty state</TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  the message sits within a section, card, or widget (use an{' '}
                  <TextLink href="/components/Alert">Alert</TextLink> or{' '}
                  <TextLink href="/components/Notice">Notice</TextLink> instead)
                </Text>
                <Text>
                  content is still loading (use a{' '}
                  <TextLink href="/patterns/skeleton-loader">
                    Skeleton loader
                  </TextLink>{' '}
                  instead).
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
    ],
  },
};

export default docs;
