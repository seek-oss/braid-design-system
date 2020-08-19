import React, { ReactNode, Fragment, useState, ReactElement } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ComponentProps } from './ComponentProps';
import {
  Box,
  Heading,
  Stack,
  Text,
  TextLink,
  TabsProvider,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  Alert,
  Inline,
  Badge,
  Link,
} from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { getHistory, isNew, isUpdated } from '../Updates';
import { Markdown } from '../Markdown/Markdown';
import { Route, Switch, useRouteMatch } from 'react-router';
import { BadgeProps } from '../../../../lib/components/Badge/Badge';

interface NavigationProps {
  title: string;
  children: ReactNode;
}
const Navigation = ({ title, children }: NavigationProps) => (
  <Box
    component="nav"
    aria-label={title}
    style={{ background: '#F5F6F8' }}
    borderRadius="standard"
    paddingX="small"
  >
    <Box component="ul" display="flex">
      {children}
    </Box>
  </Box>
);

interface NavigationItemProps {
  active?: boolean;
  href: string;
  badge?: ReactElement<BadgeProps>;
  children: ReactNode;
}
const NavigationItem = ({
  active = false,
  href,
  badge,
  children,
}: NavigationItemProps) => {
  const [hovered, setHovered] = useState(false);
  const inactiveTone = hovered ? 'neutral' : 'secondary';
  const tone = active ? 'formAccent' : inactiveTone;

  return (
    <Box component="li">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={active ? 'page' : undefined}
      >
        <Box
          display="flex"
          alignItems="center"
          paddingX="small"
          paddingY="small"
        >
          <Box paddingY="small">
            <Text weight="medium" tone={tone}>
              {children}
            </Text>
          </Box>
          {badge ? <Box paddingLeft="xsmall">{badge}</Box> : undefined}
        </Box>
      </Link>
    </Box>
  );
};

const handler = () => {
  /* No-op for docs examples */
};

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

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

  const hasNewUpdates = isNew(...relevantNames) || isUpdated(...relevantNames);

  return (
    <Stack space="xlarge">
      <Stack space="large">
        <Heading level="2" component="h3">
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
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}/props`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}/props`}
          >
            Props
          </NavigationItem>
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}/release-notes`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}/release-notes`}
            badge={
              hasNewUpdates ? <Badge tone="promote">Updated</Badge> : undefined
            }
          >
            Release Notes
          </NavigationItem>
        </Navigation>
        {docs.deprecationWarning ? (
          <Alert tone="caution">{docs.deprecationWarning}</Alert>
        ) : null}
      </Stack>
      <Switch>
        <Route exact path={`/components/${componentName}`}>
          <Stack space="xlarge" dividers>
            {docs.description}

            {filteredExamples.map((example, index) => {
              const {
                label,
                Example,
                code,
                Container = DefaultContainer,
                background = 'body',
                showCodeByDefault = false,
                playroom,
                description,
              } = example;

              const codeAsString =
                Example && !code
                  ? reactElementToJSXString(
                      Example({ id: 'id', handler }), // eslint-disable-line new-cap
                      {
                        useBooleanShorthandSyntax: false,
                        showDefaultProps: false,
                        showFunctions: false,
                        filterProps: ['onChange', 'onBlur', 'onFocus'],
                      },
                    )
                  : code;

              return (
                <Box key={index}>
                  <Stack space="large">
                    {label && filteredExamples.length > 1 ? (
                      <Heading level="3">{label}</Heading>
                    ) : null}
                    {description ?? null}
                    <Stack space="xxsmall">
                      {Example ? (
                        <ThemedExample background={background}>
                          <Container>
                            <Example id={`${index}`} handler={handler} />
                          </Container>
                        </ThemedExample>
                      ) : null}
                      {codeAsString ? (
                        <Code
                          collapsedByDefault={
                            !showCodeByDefault &&
                            Example !== undefined &&
                            docs.category !== 'Logic'
                          }
                          playroom={playroom}
                        >
                          {codeAsString}
                        </Code>
                      ) : null}
                    </Stack>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Route>
        <Route path={`/components/${componentName}/props`}>
          <Stack space="xlarge" dividers>
            {Array.isArray(propsToDocument) ? (
              <TabsProvider id="component-props">
                <Stack space="xlarge">
                  <Tabs label="Component props">
                    {propsToDocument.map((c) => (
                      <Tab item={c} key={c}>
                        {c}
                      </Tab>
                    ))}
                  </Tabs>
                  <TabPanels>
                    {propsToDocument.map((c) => (
                      <TabPanel key={c}>
                        <ComponentProps componentName={c} />
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Stack>
              </TabsProvider>
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
        <Route path={`/components/${componentName}/release-notes`}>
          <Stack space="large" dividers>
            {history.length > 0 ? (
              history.map((item, index) => (
                <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
                  <Stack space="large">
                    <Inline space="small" alignY="center">
                      <Heading level="3">v{item.version}</Heading>
                      <Text tone="secondary">{item.time}</Text>
                      {item.isRecent && item.recency ? (
                        <Box position="relative">
                          <Box
                            position="absolute"
                            style={{
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                          >
                            <Badge tone="promote">{item.recency}</Badge>
                          </Box>
                        </Box>
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
