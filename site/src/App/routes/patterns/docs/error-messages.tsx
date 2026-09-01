import {
  Badge,
  Inline,
  List,
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
import type { ComponentProps } from 'react';

import type { PatternDocs } from '../../../../types';

import {
  type ErrorMessageContent,
  type ErrorMessageRow,
  type ErrorMessageTable,
  type Status,
  errorMessageTables,
} from './error-messages-data';

type BadgeTone = NonNullable<ComponentProps<typeof Badge>['tone']>;

const statusTone: Record<Status, BadgeTone> = {
  Live: 'positive',
  Backlog: 'caution',
  Recommended: 'promote',
  Design: 'info',
};

const Message = ({ message }: { message: ErrorMessageContent }) => {
  if (
    !message.heading &&
    !message.body?.length &&
    !message.list?.length &&
    !message.footer?.length
  ) {
    return null;
  }

  return (
    <Stack space="medium">
      {message.heading ? (
        <Text size="small" weight="strong">
          {message.heading}
        </Text>
      ) : null}
      {message.body?.map((paragraph) => (
        <Text size="small" key={paragraph}>
          {paragraph}
        </Text>
      ))}
      {message.list ? (
        <List
          space="medium"
          type={message.listType === 'number' ? 'number' : undefined}
        >
          {message.list.map((item) => (
            <Text size="small" key={item}>
              {item}
            </Text>
          ))}
        </List>
      ) : null}
      {message.footer?.map((paragraph) => (
        <Text size="small" key={paragraph}>
          {paragraph}
        </Text>
      ))}
    </Stack>
  );
};

const Tags = ({ items, tone }: { items?: string[]; tone: BadgeTone }) =>
  items && items.length > 0 ? (
    <Inline space="xsmall">
      {items.map((item) => (
        <Badge key={item} tone={tone}>
          {item}
        </Badge>
      ))}
    </Inline>
  ) : null;

const ErrorMessagesTable = ({ table }: { table: ErrorMessageTable }) => (
  <Table label={`${table.label} error messages`} alignY="top">
    <TableHeader>
      <TableRow>
        <TableHeaderCell wrap width="18%" minWidth={140}>
          <Text size="small">Error</Text>
        </TableHeaderCell>
        <TableHeaderCell wrap width="22%" minWidth={160}>
          <Text size="small">Scenario</Text>
        </TableHeaderCell>
        <TableHeaderCell wrap width="40%" minWidth={220}>
          <Text size="small">Message</Text>
        </TableHeaderCell>
        <TableHeaderCell wrap width="20%" minWidth={140}>
          <Text size="small">Status</Text>
        </TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {table.rows.map((row, index) => {
        const showError =
          index === 0 || table.rows[index - 1].error !== row.error;

        return (
          <TableRow key={`${row.error}-${row.scenario ?? ''}-${index}`}>
            <TableCell wrap width="18%" minWidth={140}>
              {showError ? (
                <Text size="small">{row.error}</Text>
              ) : null}
            </TableCell>
            <TableCell wrap width="22%" minWidth={160}>
              <ScenarioCell row={row} />
            </TableCell>
            <TableCell wrap width="40%" minWidth={220}>
              <Stack space="medium">
                <Tags items={row.presentation} tone="neutral" />
                <Message message={row.message} />
              </Stack>
            </TableCell>
            <TableCell wrap width="20%" minWidth={140}>
              <Stack space="medium">
                {row.statuses?.map((entry) => (
                  <Stack space="medium" key={entry.label}>
                    <Badge tone={statusTone[entry.label]}>{entry.label}</Badge>
                    {entry.notes?.map((note) => (
                      <Text size="small" key={note}>
                        {note}
                      </Text>
                    ))}
                  </Stack>
                ))}
                {row.notes?.map((note) => (
                  <Text size="small" key={note}>
                    {note}
                  </Text>
                ))}
              </Stack>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

const ScenarioCell = ({ row }: { row: ErrorMessageRow }) => (
  <Stack space="medium">
    <Tags items={row.audience} tone="neutral" />
    {row.scenario ? <Text size="small">{row.scenario}</Text> : null}
  </Stack>
);

export const docs: PatternDocs = {
  description: (
    <Text>
      A library of error messages to reuse or adapt when designing error states.
      Choose copy that matches the response aim: Instruct, Reassure, Explain, or
      Support. See <TextLink href="/patterns/error-state">Error state</TextLink>{' '}
      for when to use each.
    </Text>
  ),
  alternatives: [
    {
      name: 'error-state',
      section: 'patterns',
      description: 'For the error state pattern and content guidelines.',
    },
  ],
  docSections: {
    bestPractices: [
      {
        label: errorMessageTables[0].label,
        description: <ErrorMessagesTable table={errorMessageTables[0]} />,
      },
      ...errorMessageTables.slice(1).map((table) => ({
        label: table.label,
        description: <ErrorMessagesTable table={table} />,
      })),
    ],
  },
};

export default docs;
