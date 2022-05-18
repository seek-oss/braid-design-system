import React, { useContext } from 'react';
import {
  Box,
  Stack,
  Inline,
  Heading,
  Badge,
  TextLink,
  Text,
} from '../../../../lib/components';
import { Markdown } from '../Markdown/Markdown';
import { PageTitle } from '../Seo/PageTitle';
import { DocsContext } from './DocNavigation';

export const DocReleases = () => {
  const { docsName, history } = useContext(DocsContext);

  return (
    <>
      <PageTitle title={`${docsName} Releases`} />

      <Stack space="xlarge">
        {history && history.length > 0 ? (
          history.map((item, index) => (
            <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
              <Stack space="large">
                <Inline space="small" alignY="center">
                  <Heading level="3">v{item.version}</Heading>
                  {item.time ? (
                    <Badge bleedY tone={item.isRecent ? 'promote' : 'neutral'}>
                      {item.time}
                    </Badge>
                  ) : null}
                </Inline>
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
