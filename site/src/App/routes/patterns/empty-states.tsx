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
          <Stack space="xxlarge">
            <Text>
              Empty states usually fall into one of four categories. The type
              determines the response.
            </Text>
            <Stack space="medium">
              <Heading level="4">Negative</Heading>
              <Text>Aim of response: Support</Text>
              <Table
                label="Negative empty state content guidelines"
                alignY="top"
              >
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Happens when&hellip;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Example</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">How to respond</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">Recommended message</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          the content doesn&rsquo;t exist
                        </Text>
                        <Text size="small">
                          there&rsquo;s nothing for the user to do
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="20%" minWidth={150}>
                      <Text size="small">
                        The job ad hasn&rsquo;t been live for long enough to
                        collect ad performance data.
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <List space="medium">
                        <Text size="small">
                          Explain why there&rsquo;s no content.
                        </Text>
                        <Text size="small">
                          Offer a workaround if there is one.
                        </Text>
                        <Text size="small">
                          Be clear about whether the content is being created,
                          i.e. they can come back later, vs. we have no plans to
                          create this content.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <Stack space="large">
                        <Stack space="medium">
                          <Text size="small" weight="strong">
                            No active jobs now
                          </Text>
                          <Text size="small">
                            [Company name] hasn&rsquo;t posted any new jobs. Use
                            our job search to find other vacancies.
                          </Text>
                        </Stack>
                        <Stack space="small">
                          <Text size="small" weight="strong">
                            No job applicants yet
                          </Text>
                          <Text size="small">
                            This job ad hasn&rsquo;t received any applications.
                            Check how it&rsquo;s performing against other
                            similar ads.
                          </Text>
                        </Stack>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="medium">
              <Heading level="4">Neutral</Heading>
              <Text>Aim of response: Instruct</Text>
              <Table
                label="Neutral empty state content guidelines"
                alignY="top"
              >
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Happens when&hellip;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Example</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">How to respond</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">Recommended message</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          the content doesn&rsquo;t exist
                        </Text>
                        <Text size="small">
                          there&rsquo;s something for the user to do
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="20%" minWidth={150}>
                      <Text size="small">
                        There are no matching search results. The user can
                        change their search parameters.
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <List space="medium">
                        <Text size="small">
                          Explain clearly what the user needs to do.
                        </Text>
                        <Text size="small">
                          Take the time and space to break the process into
                          steps.
                        </Text>
                        <Text size="small">
                          Provide as much information as needed to help users.
                        </Text>
                        <Text size="small">
                          If the process is particularly tedious, try to inject
                          some playfulness, if appropriate.
                        </Text>
                        <Text size="small">
                          Include a clear CTA, if appropriate.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <Stack space="medium">
                        <Text size="small" weight="strong">
                          No matching search results
                        </Text>
                        <Text size="small">
                          We couldn&rsquo;t find anything that matched your
                          search. Try adjusting the filters to broaden your
                          search.
                        </Text>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="medium">
              <Heading level="4">Positive</Heading>
              <Text>Aim of response: Celebrate</Text>
              <Table
                label="Positive empty state content guidelines"
                alignY="top"
              >
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Happens when&hellip;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Example</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">How to respond</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">Recommended message</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          the user has cleared outstanding items
                        </Text>
                        <Text size="small">
                          there&rsquo;s nothing for the user to do
                        </Text>
                        <Text size="small">everything is working well</Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="20%" minWidth={150}>
                      <Text size="small">
                        A hirer has cleared all the job applications in their
                        inbox.
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <List space="medium">
                        <Text size="small">
                          Acknowledge the work the user has done to get to this
                          point.
                        </Text>
                        <Text size="small">
                          Celebrate their achievement with the appropriate level
                          of excitement proportionate to the amount of effort
                          they&rsquo;ve put in.
                        </Text>
                        <Text size="small">
                          This is the time to inject playfulness and personality
                          into the message, but make sure it&rsquo;ll translate
                          well.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <Stack space="medium">
                        <Text size="small" weight="strong">
                          All applications cleared
                        </Text>
                        <Text size="small">
                          Great job! You&rsquo;ve cleared all the applications
                          here.
                        </Text>
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Stack>
            <Stack space="medium">
              <Heading level="4">Onboarding</Heading>
              <Text>Aim of response: Explain</Text>
              <Table
                label="Onboarding empty state content guidelines"
                alignY="top"
              >
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Happens when&hellip;</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="20%" minWidth={150}>
                      <Text size="small">Example</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">How to respond</Text>
                    </TableHeaderCell>
                    <TableHeaderCell wrap width="30%" minWidth={200}>
                      <Text size="small">Recommended message</Text>
                    </TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell wrap width="20%" minWidth={150}>
                      <List space="medium">
                        <Text size="small">
                          the user hasn&rsquo;t used the feature yet
                        </Text>
                        <Text size="small">
                          there&rsquo;s something for the user to do
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="20%" minWidth={150}>
                      <Text size="small">
                        A candidate hasn&rsquo;t saved any jobs yet.
                      </Text>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <List space="medium">
                        <Text size="small">
                          Explain clearly what the feature is and what needs to
                          be done.
                        </Text>
                        <Text size="small">
                          Help the user understand why they should do this. Try
                          to link this to the JTBD or task they&rsquo;re trying
                          to complete.
                        </Text>
                        <Text size="small">
                          Give them a glimpse of what would happen if they were
                          to complete the task or use the feature.
                        </Text>
                        <Text size="small">
                          Include a clear CTA, if appropriate.
                        </Text>
                      </List>
                    </TableCell>
                    <TableCell wrap width="30%" minWidth={200}>
                      <Stack space="medium">
                        <Text size="small" weight="strong">
                          No saved jobs yet
                        </Text>
                        <Text size="small">
                          Save jobs you&rsquo;re interested in so you can come
                          back to them later.
                        </Text>
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
              <Text>Use an empty state when:</Text>
              <List space="large">
                <Text>there is no data to display yet</Text>
                <Text>there are no matching search results</Text>
                <Text>
                  a first time user must take an action to populate the data
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use an empty state when:</Text>
              <List space="large">
                <Text>
                  the website or app failed to complete an expected action (use
                  an{' '}
                  <TextLink href="/patterns/error-state">Error state</TextLink>{' '}
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
