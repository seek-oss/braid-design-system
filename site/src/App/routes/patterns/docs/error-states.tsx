import source from '@braid-design-system/source.macro';
import {
  Actions,
  Badge,
  Bleed,
  Button,
  Card,
  ContentBlock,
  Heading,
  Inline,
  List,
  Notice,
  Stack,
  Strong,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  TextLink,
  Tiles,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../../types';

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
      description: 'For when there is no data available at the present time.',
    },
    {
      name: 'Alert',
      description: 'For in-flow messaging.',
    },
    {
      name: 'Notice',
      description: 'For lighter in-flow messaging.',
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
        label: 'General best practice',
        description: (
          <>
            <List space="large">
              <Text>
                More isn&rsquo;t always better. Reading takes time and effort,
                so let&rsquo;s make it easier for people to understand
                what&rsquo;s happening.
              </Text>
              <Text>
                Break down complicated processes into easy-to-follow steps.
              </Text>
            </List>
            <Table label="Error state general guidelines" alignY="top">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell wrap width="50%" minWidth={200}>
                    <Text size="small">Do</Text>
                  </TableHeaderCell>
                  <TableHeaderCell wrap width="50%" minWidth={200}>
                    <Text size="small">Don&rsquo;t</Text>
                  </TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Be as specific as possible.
                      </Text>
                      <Text size="small">
                        This helps users resolve the issue. If they end up
                        calling Customer Service, it helps CS with
                        troubleshooting.
                      </Text>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Don&rsquo;t try to address multiple error scenarios in
                        one message.
                      </Text>
                      <Text size="small">
                        The more generic the message, the less helpful. If
                        individual errors cannot be implemented all at once,
                        create the messages anyway and put them in the backlog.
                      </Text>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="positive">Example</Badge>
                      <Text size="small" weight="strong">
                        We can&rsquo;t give you access to this right now.
                      </Text>
                      <Text size="small">Try:</Text>
                      <List space="medium">
                        <Text size="small">Refreshing the page</Text>
                        <Text size="small">
                          Signing out and signing in again
                        </Text>
                        <Text size="small">Asking your admin for access</Text>
                      </List>
                      <Text size="small">
                        If it still doesn&rsquo;t work, reach out to our
                        Customer Service team on 1300 658 700.
                      </Text>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="critical">Example</Badge>
                      <Text size="small" weight="strong">
                        Apparently you&rsquo;re not authorised to view this
                        page.
                      </Text>
                      <Text size="small">
                        Not sure why you&rsquo;re not&hellip; maybe try heading
                        to our homepage or contact support.
                      </Text>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Project calm or light-heartedness as appropriate.
                      </Text>
                      <Text size="small">
                        Users will start to mirror the emotional state that we
                        show them.
                      </Text>
                      <Text size="small">
                        Show the ideal state (problem fixed, calm person)
                        instead of the present, negative state.
                      </Text>
                      <Text size="small">
                        Use imagery that focuses on the positive state of
                        something being fixed, instead of something being
                        broken.
                      </Text>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Avoid negative words, such as:
                      </Text>
                      <List space="medium">
                        <Text size="small">Error</Text>
                        <Text size="small">Mistake</Text>
                        <Text size="small">Oops</Text>
                        <Text size="small">Invalid</Text>
                        <Text size="small">Failed</Text>
                        <Text size="small">Problem</Text>
                        <Text size="small">Wrong</Text>
                      </List>
                      <Text size="small">
                        These words make people feel anxious and your product
                        seem less reliable.
                      </Text>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="positive">Example</Badge>
                      <Text size="small" weight="strong">
                        Can we try that again?
                      </Text>
                      <Text size="small">
                        Refresh the page to see your job search results.
                      </Text>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="critical">Example</Badge>
                      <Text size="small" weight="strong">
                        Oops! Let&rsquo;s try this again.
                      </Text>
                      <Text size="small">
                        Just hit refresh and your jobs will be right here.
                      </Text>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Show an understanding that the user might be in a
                        challenging situation.
                      </Text>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Text size="small" weight="strong">
                        Don&rsquo;t blame the user.
                      </Text>
                      <List space="medium">
                        <Text size="small">
                          Try to make it about what{' '}
                          <Strong>we can&rsquo;t do</Strong>, instead of what
                          the <Strong>user didn&rsquo;t do</Strong>.
                        </Text>

                        <Text size="small">
                          Don&rsquo;t assume you know how they feel.
                        </Text>
                        <Text size="small">
                          Don&rsquo;t trivialise the situation.
                        </Text>
                      </List>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="positive">Example</Badge>
                      <Text size="small" weight="strong">
                        We need this information for your application:
                      </Text>
                      <List space="medium">
                        <Text size="small">
                          Cover letter - select one of the cover letter options
                        </Text>
                        <Text size="small">
                          Resum&eacute; - select one of the resum&eacute;
                          options
                        </Text>
                      </List>
                    </Stack>
                  </TableCell>
                  <TableCell wrap width="50%" minWidth={200}>
                    <Stack space="medium">
                      <Badge tone="critical">Example</Badge>
                      <Text size="small" weight="strong">
                        Before you can continue with the application, please
                        address the following issues:
                      </Text>
                      <List space="medium">
                        <Text size="small">
                          Cover letter - Please make a selection
                        </Text>
                        <Text size="small">
                          Resum&eacute; - Please make a selection
                        </Text>
                      </List>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </>
        ),
      },
      {
        label: 'Content guidelines',
        description: (
          <Stack space="xxlarge">
            <Stack space="xlarge">
              <Text>
                As errors are negative moments or pain points in someone&rsquo;s
                interaction with our products, it&rsquo;s important for us to
                handle errors in an empathetic and supportive way.
              </Text>
              <Stack space="large">
                <Text>Handling an error well:</Text>
                <List space="large">
                  <Text>
                    Helps users resolve an error quicker. When someone is
                    frustrated, they&rsquo;re more likely to keep trying
                    something that doesn&rsquo;t work, which keeps them caught
                    in an error loop. If they&rsquo;re calm, they see more
                    options and can problem-solve better.
                  </Text>
                  <Text>
                    Helps us turn a negative moment into a positive one. If
                    someone feels supported through a negative moment, it helps
                    build a more lasting connection to SEEK.
                  </Text>
                </List>
              </Stack>
            </Stack>
            <Stack space="large">
              <Heading level="4">
                How people might feel when an error happens
              </Heading>
              <Text>
                Understanding how someone might feel when they encounter an
                error helps us craft an appropriate response.
              </Text>
              <Tiles columns={{ mobile: 1, tablet: 2 }} space="small">
                <Card height="full">
                  <Stack space="medium">
                    <Bleed horizontal="xsmall">
                      <Inline space="xsmall">
                        <Badge tone="critical">High impact</Badge>
                        <Badge tone="caution">Low effort</Badge>
                      </Inline>
                    </Bleed>
                    <Heading level="4">Frustrated</Heading>
                    <Text>Reassure</Text>
                    <Text size="small" tone="secondary">
                      Task cannot be completed.
                    </Text>
                  </Stack>
                </Card>
                <Card height="full">
                  <Stack space="medium">
                    <Bleed horizontal="xsmall">
                      <Inline space="xsmall">
                        <Badge tone="critical">High impact</Badge>
                        <Badge tone="critical">High effort</Badge>
                      </Inline>
                    </Bleed>
                    <Heading level="4">Infuriated</Heading>
                    <Text>Apologise, Support</Text>
                    <Text size="small" tone="secondary">
                      Task cannot be completed.
                    </Text>
                  </Stack>
                </Card>
                <Card height="full">
                  <Stack space="medium">
                    <Bleed horizontal="xsmall">
                      <Inline space="xsmall">
                        <Badge tone="caution">Low impact</Badge>
                        <Badge tone="caution">Low effort</Badge>
                      </Inline>
                    </Bleed>
                    <Heading level="4">Annoyed</Heading>
                    <Text>Instruct</Text>
                    <Text size="small" tone="secondary">
                      Task interrupted but can be resolved.
                    </Text>
                  </Stack>
                </Card>
                <Card height="full">
                  <Stack space="medium">
                    <Bleed horizontal="xsmall">
                      <Inline space="xsmall">
                        <Badge tone="caution">Low impact</Badge>
                        <Badge tone="critical">High effort</Badge>
                      </Inline>
                    </Bleed>
                    <Heading level="4">Irritated</Heading>
                    <Text>Explain</Text>
                    <Text size="small" tone="secondary">
                      Task interrupted but can be resolved.
                    </Text>
                  </Stack>
                </Card>
              </Tiles>
            </Stack>
            <Stack space="large">
              <Heading level="4">How to respond to errors</Heading>
              <Table label="How to respond to errors" alignY="top">
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">If the error&hellip;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="10%" minWidth={120}>
                      <Text size="small">User feels</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="10%" minWidth={110}>
                      <Text size="small">Our goal</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={180}>
                      <Text size="small">How to respond</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={180}>
                      <Text size="small">Recommended message</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">can be resolved by the user</Text>
                        <Text size="small">is easy and quick to resolve</Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={120}>
                      <Text size="small">Annoyed</Text>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={110}>
                      <Text size="small" weight="strong">
                        Instruct
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <List space="medium">
                        <Text size="small">
                          Tell the user clearly what they need to do to resolve
                          the error.
                        </Text>
                        <Text size="small">
                          It&rsquo;s an easy fix so let&rsquo;s get them back on
                          track quickly.
                        </Text>
                        <Text size="small">
                          Don&rsquo;t make this a big deal i.e. don&rsquo;t use
                          negative words.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <Text size="small">
                        Select one of the cover letter options.
                      </Text>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          can&rsquo;t be resolved by the user (low to no effort
                          is needed from the user)
                        </Text>
                        <Text size="small">
                          requires the user to wait for SEEK (or someone else)
                          to resolve it
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={120}>
                      <Text size="small">Frustrated</Text>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={110}>
                      <Text size="small" weight="strong">
                        Reassure
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <List space="medium">
                        <Text size="small">
                          Since there&rsquo;s not much the user can do, reassure
                          them that we&rsquo;re doing all we can.
                        </Text>
                        <Text size="small">
                          This is an opportunity to introduce some
                          light-heartedness.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <Stack space="medium">
                        <Text size="small" weight="strong">
                          We&rsquo;re working on it
                        </Text>
                        <Text size="small">
                          We can&rsquo;t load this right now but we&rsquo;re
                          doing our best to fix it.
                        </Text>
                        <Text size="small">
                          Try refreshing the page or check back later.
                        </Text>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">can be resolved by the user</Text>
                        <Text size="small">
                          requires user to go through many steps to resolve it
                        </Text>
                        <Text size="small">
                          user can continue with their task or other parts of
                          the process
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={120}>
                      <Text size="small">Irritated</Text>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={110}>
                      <Text size="small" weight="strong">
                        Explain
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <List space="medium">
                        <Text size="small">
                          Explain clearly what the user needs to do.
                        </Text>
                        <Text size="small">
                          Take the time and space to break the process into
                          steps.
                        </Text>
                        <Text size="small">
                          Provide as much information as needed to help users
                          resolve the error.
                        </Text>
                        <Text size="small">
                          If the process is particularly tedious, try to inject
                          some playfulness, if appropriate.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <Stack space="medium">
                        <Text size="small" weight="strong">
                          Get access with Premium Talent Search
                        </Text>
                        <Text size="small">
                          Our Customer Service team can help to organise a
                          subscription.
                        </Text>
                        <Text size="small">
                          Or you can browse talent search matches for your
                          active job ads.
                        </Text>
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          can&rsquo;t be resolved by the user or requires the
                          user to go through many steps
                        </Text>
                        <Text size="small">
                          prevents the user from completing a critical or
                          time-sensitive task
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={120}>
                      <Text size="small">Infuriated</Text>
                    </TableCell>
                    <TableCell wrap width="10%" minWidth={110}>
                      <Text size="small" weight="strong">
                        Support
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <List space="medium">
                        <Text size="small">
                          It&rsquo;s always best to avoid a situation that would
                          infuriate someone.
                        </Text>
                        <Text size="small">
                          Sometimes it might not be our fault or something we
                          have control over.
                        </Text>
                        <Text size="small">
                          Be helpful, supportive and calm to defuse the
                          situation.
                        </Text>
                        <Text size="small">
                          This is not the time to be upbeat or playful.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={180}>
                      <Stack space="large">
                        <Stack space="medium">
                          <Text size="small" weight="strong">
                            We&rsquo;re trying to connect
                          </Text>
                          <Text size="small">
                            Check your internet connection and try again.
                          </Text>
                          <Text size="small">
                            If it still doesn&rsquo;t work, you may have to
                            contact your network provider.
                          </Text>
                          <Text size="small">
                            We&rsquo;re always here to help, so reach out
                            anytime.
                          </Text>
                        </Stack>
                        <Stack space="medium">
                          <Text size="small" weight="strong">
                            Are you offline?
                          </Text>
                          <Text size="small">
                            Check your internet connection and try again.
                          </Text>
                        </Stack>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
          </Stack>
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
                  bad request.
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
