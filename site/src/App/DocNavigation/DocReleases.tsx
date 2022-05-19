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
} from '../../../../lib/components';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';
import { Markdown } from '../Markdown/Markdown';
import { PageTitle } from '../Seo/PageTitle';
import { DocsContext } from './DocNavigation';

export const DocReleases = () => {
  const { docsName, history } = useContext(DocsContext);

  return (
    <>
      <PageTitle title={`${docsName} Releases`} />

      <Stack space="xxlarge" dividers>
        {history && history.length > 0 ? (
          history.map((item, index) => (
            <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
              <Stack space="large">
                <Columns space="small" alignY="center">
                  <Column>
                    <LinkableHeading level="3">{`v${item.version}`}</LinkableHeading>
                  </Column>
                  {item.time ? (
                    <Column width="content">
                      <Badge
                        bleedY
                        tone={item.isRecent ? 'promote' : 'neutral'}
                      >
                        {item.time}
                      </Badge>
                    </Column>
                  ) : null}
                </Columns>
                <Markdown>{item.summary}</Markdown>
              </Stack>
            </Box>
          ))
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
