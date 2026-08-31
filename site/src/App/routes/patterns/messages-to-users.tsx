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
                    Inform the user of an important status or condition relevant
                    to their current task. They sit within the context of the
                    page, close to the issue to which they relate.
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
                    Briefly acknowledges a user action without interrupting
                    their flow. Toasts float at the bottom of the screen and
                    disappear after a few seconds.
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
                    For displaying messages below a custom input field that
                    isn&rsquo;t provided by Braid.
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
                  Occurs when there is no data available at the present time,
                  and informs the user about what they might see when there is
                  data, and/or what they should do next.
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
                  Occurs when the website or app fails to complete an expected
                  action, and informs the user that a problem has occurred.
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
                  A prominent message that encourages the user to take a
                  specific action on something relevant at that moment. A nudge
                  is always actionable and drives desired behaviour.
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
                  Inform users of upcoming interruptions to SEEK products and
                  services. This can include outages to the entire system or to
                  specific products.
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
