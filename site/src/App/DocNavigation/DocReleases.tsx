import React, { useContext } from 'react';
import {
  Box,
  Stack,
  Heading,
  Badge,
  TextLink,
  Text,
  Column,
  Columns,
  List,
} from 'braid-design-system';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';
import { Markdown } from '../Markdown/Markdown';
import { PageTitle } from '../Seo/PageTitle';
import { DocsContext } from './DocNavigation';

type GroupedHistory = Record<
  string,
  {
    version: string;
    time?: string;
    isRecent?: boolean;
    changesets: string[];
  }
>;

export const DocReleases = () => {
  const { docsName, history = [] } = useContext(DocsContext);
  const groupedHistory = history.reduce(
    (acc, { version, time, isRecent, summary }) => {
      if (acc[version]) {
        acc[version].changesets.push(summary);
      } else {
        acc[version] = {
          version,
          time,
          isRecent,
          changesets: [summary],
        };
      }
      return acc;
    },
    {} as GroupedHistory,
  );

  return (
    <>
      <PageTitle title={`${docsName} Releases`} />

      <Stack space="xxlarge" dividers>
        {Object.keys(groupedHistory).length > 0 ? (
          Object.keys(groupedHistory).map((version, index) => {
            const historyItem = groupedHistory[version];

            return (
              <Box
                key={`${version}_${index}`}
                paddingTop={index > 0 ? 'medium' : undefined}
              >
                <Stack space="large">
                  <Columns space="small" alignY="center">
                    <Column>
                      <LinkableHeading level="3">{`v${version}`}</LinkableHeading>
                    </Column>
                    {historyItem.time ? (
                      <Column width="content">
                        <Badge
                          bleedY
                          tone={historyItem.isRecent ? 'promote' : 'neutral'}
                        >
                          {historyItem.time}
                        </Badge>
                      </Column>
                    ) : null}
                  </Columns>
                  <List space="xlarge">
                    {historyItem.changesets.map((change, changeIndex) => (
                      <Markdown key={`${version}_${index}_${changeIndex}`}>
                        {change}
                      </Markdown>
                    ))}
                  </List>
                </Stack>
              </Box>
            );
          })
        ) : (
          <Stack space="large">
            <Heading level="3">No release notes available</Heading>
            <Text>
              There have been no releases since we introduced{' '}
              <TextLink href="https://github.com/atlassian/changesets">
                a proper release notes system.
              </TextLink>
            </Text>
          </Stack>
        )}
      </Stack>
    </>
  );
};
