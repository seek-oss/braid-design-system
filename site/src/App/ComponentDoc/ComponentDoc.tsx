import React, { ReactNode, Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { ComponentProps } from './ComponentProps';
import { PlayroomStateProvider } from '../../../../lib/playroom/playroomState';
import { useSourceFromExample } from '../../../../lib/utils/useSourceFromExample';
import {
  Box,
  Heading,
  Stack,
  Text,
  TextLink,
  Alert,
  Inline,
  Badge,
} from '../../../../lib/components';

import { ComponentDocs, ComponentExample } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { getHistory } from '../Updates';
import { Markdown } from '../Markdown/Markdown';
import { Navigation, NavigationItem } from './Navigation/Navigation';
import { PageTitle } from '../Seo/PageTitle';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

interface RenderExampleProps {
  id: string;
  example: ComponentExample;
  category: ComponentDocs['category'];
  showHeading: boolean;
}
const RenderExample = ({
  id,
  category,
  showHeading,
  example,
}: RenderExampleProps) => {
  const {
    label,
    Example,
    Container = DefaultContainer,
    background = 'body',
    showCodeByDefault = false,
    playroom,
    description,
  } = example;

  const { code, value } = useSourceFromExample(id, example);

  return (
    <Stack space="large">
      {label && showHeading ? <Heading level="3">{label}</Heading> : null}
      {description ?? null}
      <Stack space="xxsmall">
        {value ? (
          <ThemedExample background={background}>
            <Container>{value}</Container>
          </ThemedExample>
        ) : null}
        {code ? (
          <Code
            collapsedByDefault={
              !showCodeByDefault &&
              Example !== undefined &&
              category !== 'Logic'
            }
            playroom={playroom}
          >
            {code}
          </Code>
        ) : null}
      </Stack>
    </Stack>
  );
};

interface ComponentDocProps {
  componentName: string;
  subfolder?: string;
  docs: ComponentDocs;
}

export const ComponentDoc = ({
  componentName,
  subfolder = '',
  docs,
}: ComponentDocProps) => {
  const { sourceUrlPrefix } = useConfig();

  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${componentName}`;
  const examples = docs.examples || [];

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${componentName}.migration.md`;

  const filteredExamples = examples.filter(
    (example) => example.docsSite !== false,
  );

  const propsToDocument = docs.subComponents
    ? [componentName, ...docs.subComponents]
    : componentName;

  const relevantNames = docs.subComponents
    ? [componentName, ...docs.subComponents]
    : [componentName];

  const history = getHistory(...relevantNames);
  const updateCount = history.filter((item) => item.isRecent).length;

  const propsRouteActive =
    useRouteMatch({
      path: `/components/${componentName}/props`,
      exact: true,
    }) !== null;

  return (
    <Stack space={['xlarge', 'xxlarge']}>
      <Stack space={['large', 'xlarge']}>
        <Heading level="2" component="h1">
          {componentName}
        </Heading>
        <Navigation title="Subnavigation">
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}`}
          >
            Details
          </NavigationItem>
          {componentName.indexOf('use') !== 0 ? (
            <NavigationItem
              active={propsRouteActive}
              href={`/components/${componentName}/props`}
            >
              Props
            </NavigationItem>
          ) : null}
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}/releases`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}/releases`}
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
        {docs.deprecationWarning ? (
          <Alert tone="caution">{docs.deprecationWarning}</Alert>
        ) : null}
      </Stack>
      <Switch>
        <Route exact path={`/components/${componentName}`}>
          <PageTitle title={componentName} />
          <Stack space="xxlarge">
            {docs.description}

            {filteredExamples.map((example, index) => (
              <PlayroomStateProvider key={index}>
                <RenderExample
                  id={String(index)}
                  example={example}
                  category={docs.category}
                  showHeading={filteredExamples.length > 1}
                />
              </PlayroomStateProvider>
            ))}
          </Stack>
        </Route>
        <Route path={`/components/${componentName}/props`}>
          <PageTitle title={`${componentName} Props`} />

          <Stack space="xxlarge">
            {Array.isArray(propsToDocument) ? (
              propsToDocument.map((c) => (
                <Stack space="large" key={c}>
                  <Heading level="3">{c}</Heading>
                  <ComponentProps componentName={c} />
                </Stack>
              ))
            ) : (
              <ComponentProps componentName={componentName} />
            )}

            <Stack space="large">
              <Heading level="3" component="h4">
                Further References
              </Heading>
              <Text>
                <TextLink href={sourceUrl}>View Source</TextLink>
              </Text>
              <Text>
                {docs.migrationGuide ? (
                  <TextLink href={migrationGuideUrl}>Migration Guide</TextLink>
                ) : null}
              </Text>
            </Stack>
          </Stack>
        </Route>
        <Route path={`/components/${componentName}/releases`}>
          <PageTitle title={`${componentName} Releases`} />

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
                  This component hasn’t had any releases since we introduced{' '}
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
