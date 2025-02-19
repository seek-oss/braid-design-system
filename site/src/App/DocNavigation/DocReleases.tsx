import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Box,
  Stack,
  Heading,
  Badge,
  TextLink,
  Text,
  Spread,
  List,
  Divider,
} from 'braid-src/lib/components';
import { Fragment, useContext } from 'react';

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

      <Stack space="xxlarge">
        {Object.keys(groupedHistory).length > 0 ? (
          Object.keys(groupedHistory).map((version, index) => {
            const historyItem = groupedHistory[version];

            return (
              <Fragment key={`${version}_${index}`}>
                {index > 0 ? (
                  <Box paddingBottom="medium">
                    <Divider />
                  </Box>
                ) : null}
                <Stack space="large">
                  <Spread space="small" alignY="center">
                    <LinkableHeading level="3">{`v${version}`}</LinkableHeading>
                    {historyItem.time ? (
                      <Badge
                        bleedY
                        tone={historyItem.isRecent ? 'promote' : 'neutral'}
                      >
                        {historyItem.time}
                      </Badge>
                    ) : null}
                  </Spread>
                  <List space="xlarge">
                    {historyItem.changesets.map((change, changeIndex) => (
                      <Markdown key={`${version}_${index}_${changeIndex}`}>
                        {change}
                      </Markdown>
                    ))}
                  </List>
                </Stack>
              </Fragment>
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
