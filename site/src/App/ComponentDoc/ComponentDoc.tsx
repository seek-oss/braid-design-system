import React, { ReactNode, Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { ComponentProps } from './ComponentProps';
import docsTheme from '../../../../lib/themes/docs';
import { PlayroomStateProvider } from '../../../../lib/playroom/playroomState';
import { useSourceFromExample } from '../../../../lib/utils/useSourceFromExample';
import { BraidSnippet } from '../../../../lib/components/private/Snippets';
import {
  BraidProvider,
  Box,
  Heading,
  Stack,
  Text,
  TextLink,
  Alert,
  Inline,
  Badge,
  List,
  Secondary,
} from '../../../../lib/components';

import { ComponentDocs, ComponentExample } from '../../types';
import Code from '../Code/Code';
import { ThemedExample, useThemeSettings } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { getHistory } from '../Updates';
import { Markdown } from '../Markdown/Markdown';
import { Navigation, NavigationItem } from './Navigation/Navigation';
import { PageTitle } from '../Seo/PageTitle';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

interface RenderExampleProps {
  id: string;
  Example?: ComponentExample['Example'];
  code?: ComponentExample['code'];
  Container?: ComponentExample['Container'];
  background?: ComponentExample['background'];
  showCodeByDefault?: ComponentExample['showCodeByDefault'];
  playroom?: ComponentExample['playroom'];
}
const RenderExample = ({
  id,
  Example,
  code,
  Container = DefaultContainer,
  background,
  showCodeByDefault = false,
  playroom,
}: RenderExampleProps) => {
  const { code: codeAsString, value } = useSourceFromExample(id, {
    Example,
    code,
  });

  return (
    <BraidProvider styleBody={false} theme={docsTheme}>
      <Stack space="xxsmall">
        {value ? (
          <ThemedExample background={background}>
            <Container>{value}</Container>
          </ThemedExample>
        ) : null}
        {codeAsString ? (
          <Code collapsedByDefault={!showCodeByDefault} playroom={playroom}>
            {codeAsString}
          </Code>
        ) : null}
      </Stack>
    </BraidProvider>
  );
};

interface ComponentDocProps {
  componentName: string;
  subfolder?: string;
  docs: ComponentDocs;
  snippets?: BraidSnippet[];
}

export const ComponentDoc = ({
  componentName,
  subfolder = '',
  docs,
  snippets = [],
}: ComponentDocProps) => {
  const { theme } = useThemeSettings();
  const { sourceUrlPrefix } = useConfig();

  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${componentName}`;
  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${componentName}.migration.md`;

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

  const snippetsRouteActive =
    useRouteMatch({
      path: `/components/${componentName}/snippets`,
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
          {snippets.length > 0 ? (
            <NavigationItem
              active={snippetsRouteActive}
              href={`/components/${componentName}/snippets`}
            >
              Snippets
            </NavigationItem>
          ) : null}
        </Navigation>
        {docs.deprecationWarning ? (
          <Alert tone="caution">{docs.deprecationWarning}</Alert>
        ) : null}
        {docs.banner}
      </Stack>
      <Switch>
        <Route exact path={`/components/${componentName}`}>
          <PageTitle title={componentName} />
          <Stack space="xxlarge">
            {docs.Example ? (
              <BraidProvider styleBody={false} theme={theme}>
                <PlayroomStateProvider>
                  <RenderExample
                    id={`${componentName}_example`}
                    Example={docs.Example}
                    showCodeByDefault={docs.category === 'Logic'}
                  />
                </PlayroomStateProvider>
              </BraidProvider>
            ) : null}

            {docs.description ? (
              <Stack space="large">{docs.description}</Stack>
            ) : null}

            {docs.alternatives.length > 0 ? (
              <Stack space="large">
                <LinkableHeading level="3">Alternatives</LinkableHeading>
                <List space="large">
                  {docs.alternatives.map((alt) => (
                    <Text key={`${alt.name}`}>
                      <TextLink href={`/components/${alt.name}`}>
                        {alt.name}
                      </TextLink>{' '}
                      <Secondary>— {alt.description}</Secondary>
                    </Text>
                  ))}
                </List>
              </Stack>
            ) : null}

            {docs.accessibility ? (
              <Stack space="large">
                <LinkableHeading level="3">Accessibility</LinkableHeading>
                {docs.accessibility}
              </Stack>
            ) : null}

            {(docs.additional || []).map((example, index) => (
              <Stack space="large" key={index}>
                {example.label ? (
                  <LinkableHeading level="3">{example.label}</LinkableHeading>
                ) : null}
                {example.description ?? null}
                {example.code || example.Example ? (
                  <BraidProvider styleBody={false} theme={theme}>
                    <PlayroomStateProvider>
                      <RenderExample
                        id={String(index)}
                        code={example.code}
                        Example={example.Example}
                        Container={example.Container}
                        background={example.background}
                        showCodeByDefault={
                          example.showCodeByDefault ||
                          example.Example === undefined
                        }
                        playroom={example.playroom}
                      />
                    </PlayroomStateProvider>
                  </BraidProvider>
                ) : null}
              </Stack>
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
        <Route path={`/components/${componentName}/snippets`}>
          <PageTitle title={`${componentName} Snippets`} />

          <Stack space="xxlarge">
            {snippets.map(({ group, name, code }) => (
              <Stack space="medium" key={`${group}_${name}`}>
                <Text tone="secondary">{name}</Text>
                <BraidProvider styleBody={false} theme={theme}>
                  <PlayroomStateProvider>
                    <RenderExample
                      id={`${group}_${name}`}
                      Example={() => code}
                      showCodeByDefault={false}
                    />
                  </PlayroomStateProvider>
                </BraidProvider>
              </Stack>
            ))}
          </Stack>
        </Route>
      </Switch>
    </Stack>
  );
};
