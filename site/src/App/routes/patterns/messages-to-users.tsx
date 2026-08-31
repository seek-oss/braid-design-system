import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  TextLink,
} from 'braid-design-system';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Represents a group of patterns and components used to communicate
      conditions, events, or responses to user actions.
    </Text>
  ),
  additional: [
    {
      label: 'Messaging components',
      description: (
        <Stack space="large">
          <Text>
            Braid includes a variety of messaging components, each with their
            own purpose and intended use.
          </Text>
          <Table label="Messaging components" alignY="top">
            <TableHeader>
              <TableRow>
                <TableHeaderCell wrap width="30%" minWidth={150}>
                  <Text size="small">Component</Text>
                </TableHeaderCell>
                <TableHeaderCell wrap width="70%" minWidth={200}>
                  <Text size="small">Purpose and use</Text>
                </TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell wrap width="30%" minWidth={150}>
                  <Text size="small">
                    <TextLink href="/components/Alert">Alert</TextLink> and{' '}
                    <TextLink href="/components/Notice">Notice</TextLink>
                  </Text>
                </TableCell>
                <TableCell wrap width="70%" minWidth={200}>
                  <Text size="small">
                    A conditional message provided in response to user action or
                    system activity, and presented in the context of the user
                    flow.
                  </Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell wrap width="30%" minWidth={150}>
                  <Text size="small">
                    <TextLink href="/components/useToast">useToast</TextLink>
                  </Text>
                </TableCell>
                <TableCell wrap width="70%" minWidth={200}>
                  <Text size="small">
                    A brief, temporary message that appears at the bottom of the
                    screen to acknowledge user actions without interrupting
                    their workflow.
                  </Text>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell wrap width="30%" minWidth={150}>
                  <Text size="small">
                    <TextLink href="/components/FieldMessage">
                      FieldMessage
                    </TextLink>
                  </Text>
                </TableCell>
                <TableCell wrap width="70%" minWidth={200}>
                  <Text size="small">
                    This component is only required when building a custom field
                    that isn&rsquo;t provided by Braid.
                  </Text>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      ),
    },
    {
      label: 'Messaging patterns',
      description: (
        <Table label="Messaging patterns" alignY="top">
          <TableHeader>
            <TableRow>
              <TableHeaderCell wrap width="30%" minWidth={150}>
                <Text size="small">Pattern</Text>
              </TableHeaderCell>
              <TableHeaderCell wrap width="70%" minWidth={200}>
                <Text size="small">Purpose and use</Text>
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/patterns/empty-state">Empty state</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  Displays a message in place of content when none is available,
                  guiding users on what to do next.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/patterns/error-state">Error state</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  Displays a message when an expected action fails, alerting
                  users to the problem and how to proceed.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/patterns/nudge">Nudge</TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  Displays a prominent, actionable message that drives users
                  toward a specific behaviour relevant to their current context.
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell wrap width="30%" minWidth={150}>
                <Text size="small">
                  <TextLink href="/patterns/service-outage-banner">
                    Service outage banner
                  </TextLink>
                </Text>
              </TableCell>
              <TableCell wrap width="70%" minWidth={200}>
                <Text size="small">
                  Informs users of an existing or upcoming outage or reduced
                  service level, affecting the whole system or specific
                  products.
                </Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
    },
  ],
};

export default docs;
