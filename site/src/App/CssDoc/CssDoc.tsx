import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import {
  Stack,
  Heading,
  Badge,
  TextLink,
  Text,
  Box,
  Inline,
} from '../../../../lib/components';
import { CssDoc as CssDocType } from '../../types';
import {
  Navigation,
  NavigationItem,
} from '../ComponentDoc/Navigation/Navigation';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';
import { Markdown } from '../Markdown/Markdown';
import { PageTitle } from '../Seo/PageTitle';
import { getHistory } from '../Updates';

interface Props {
  name: string;
  docs: CssDocType;
}

export const CssDoc = ({ name, docs }: Props) => {
  const history = getHistory(name);
  const updateCount = history.filter((item) => item.isRecent).length;

  return (
    <Stack space={['xlarge', 'xxlarge']}>
      <Stack space={['large', 'xlarge']}>
        <Heading level="2" component="h1">
          {name}
        </Heading>
        <Navigation title="Subnavigation">
          <NavigationItem
            active={
              useRouteMatch({
                path: `/css/${name}`,
                exact: true,
              }) !== null
            }
            href={`/css/${name}`}
          >
            Details
          </NavigationItem>
          <NavigationItem
            active={
              useRouteMatch({
                path: `/css/${name}/releases`,
                exact: true,
              }) !== null
            }
            href={`/css/${name}/releases`}
            badge={
              updateCount > 0 ? (
                <Badge
                  tone="promote"
                  weight="strong"
                  title={`${updateCount} release${
                    updateCount === 1 ? '' : 's'
                  } in the last two months`}
                >
                  {String(updateCount)}
                </Badge>
              ) : undefined
            }
          >
            Releases
          </NavigationItem>
        </Navigation>
      </Stack>
      <Switch>
        <Route exact path={`/css/${name}`}>
          <PageTitle title={name} />
          <Stack space="xxlarge">
            <Stack space="large">
              {docs.banner}
              {docs.usage}
              {docs.description || null}
            </Stack>
            {(docs.additional || []).map((example, index) => (
              <Stack space="large" key={index}>
                {example.label ? (
                  <LinkableHeading level="3">{example.label}</LinkableHeading>
                ) : null}
                {example.description ?? null}
              </Stack>
            ))}
          </Stack>
        </Route>
        <Route path={`/css/${name}/releases`}>
          <PageTitle title={`${name} Releases`} />

          <Stack space="xlarge">
            {history.length > 0 ? (
              history.map((item, index) => (
                <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
                  <Stack space="large">
                    <Inline space="small" alignY="center">
                      <Heading level="3">v{item.version}</Heading>
                      {item.time ? (
                        <Badge
                          bleedY
                          tone={item.isRecent ? 'promote' : 'neutral'}
                        >
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
        </Route>
      </Switch>
    </Stack>
  );
};
