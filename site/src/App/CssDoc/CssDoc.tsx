import React, { Fragment, ReactNode } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import {
  Stack,
  Heading,
  Badge,
  TextLink,
  Text,
  Box,
  Inline,
  BraidProvider,
} from '../../../../lib/components';
import { PlayroomStateProvider } from '../../../../lib/playroom/playroomState';
import { useSourceFromExample } from '../../../../lib/utils/useSourceFromExample';
import { ComponentExample, CssDoc as CssDocType } from '../../types';
import {
  Navigation,
  NavigationItem,
} from '../ComponentDoc/Navigation/Navigation';
import { LinkableHeading } from '../LinkableHeading/LinkableHeading';
import { Markdown } from '../Markdown/Markdown';
import { PageTitle } from '../Seo/PageTitle';
import { ThemedExample, useThemeSettings } from '../ThemeSetting';
import { getHistory } from '../Updates';
import docsTheme from '../../../../lib/themes/docs';
import Code from '../Code/Code';

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
  background = 'body',
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

interface Props {
  name: string;
  docs: CssDocType;
}

export const CssDoc = ({ name, docs }: Props) => {
  const history = getHistory(name);
  const updateCount = history.filter((item) => item.isRecent).length;
  const { theme } = useThemeSettings();

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
            {docs.description ? (
              <Stack space="large">{docs.description}</Stack>
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
