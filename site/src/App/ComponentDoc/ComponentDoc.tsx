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
  Divider,
} from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { getHistory, isNew, isUpdated, getNew, getUpdated } from '../Updates';
import { Markdown } from '../Markdown/Markdown';
import { Route, Switch, useRouteMatch } from 'react-router';
import { BadgeProps } from '../../../../lib/components/Badge/Badge';
import {
  useNegativeMarginLeft,
  useNegativeMarginTop,
} from '../../../../lib/hooks/useNegativeMargin/useNegativeMargin';

const navItemPaddingX = ['xsmall', 'medium'] as const;
const navItemPaddingY = ['small', 'medium'] as const;

interface NavigationProps {
  title: string;
  children: ReactNode;
}
const Navigation = ({ title, children }: NavigationProps) => (
  <Box
    component="nav"
    aria-label={title}
    className={[
      useNegativeMarginTop(navItemPaddingY),
      useNegativeMarginLeft(navItemPaddingX),
    ]}
  >
    <Box component="ul" display="flex" alignItems="center">
      {children}
    </Box>
    <Box paddingLeft={navItemPaddingX}>
      <Divider />
    </Box>
  </Box>
);

interface NavigationItemProps {
  active?: boolean;
  href: string;
  badge?: ReactElement<BadgeProps>;
  badgeTitle?: string;
  children: ReactNode;
}
const NavigationItem = ({
  active = false,
  href,
  badge,
  children,
}: NavigationItemProps) => {
  const [hovered, setHovered] = useState(false);

  const badgeElement = badge ? (
    <Box paddingLeft="xsmall">{badge}</Box>
  ) : undefined;

  return (
    <Box component="li">
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={active ? 'page' : undefined}
      >
        <Box display="flex" alignItems="center" paddingX={navItemPaddingX}>
          <Box position="relative">
            <Box
              display="flex"
              alignItems="center"
              opacity={active ? undefined : 0}
            >
              <Box paddingY={navItemPaddingY}>
                <Text size="standard" weight="strong">
                  {children}
                </Text>
              </Box>
              {badgeElement}
            </Box>
            <Box
              aria-hidden
              display="flex"
              alignItems="center"
              position="absolute"
              top={0}
              {...(children === 'Details'
                ? { left: 0 }
                : { style: { left: '50%', transform: 'translateX(-50%)' } })}
              opacity={active ? 0 : undefined}
            >
              <Box paddingY={navItemPaddingY}>
                <Text
                  size="standard"
                  weight="medium"
                  tone={hovered ? 'neutral' : 'secondary'}
                >
                  {children}
                </Text>
              </Box>
              {badgeElement}
            </Box>
          </Box>
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
  const updateCounter = history.filter((item) => item.isRecent).length;

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
                path: `/components/${componentName}/releases`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}/releases`}
            badge={
              updateCounter > 0 ? (
                <Badge
                  tone="promote"
                  weight="strong"
                  title={`${updateCounter} release${
                    updateCounter === 1 ? '' : 's'
                  } in the last two months`}
                >
                  {String(updateCounter)}
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
          <Stack space="xxlarge">
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
          <Stack space="xlarge">
            {history.length > 0 ? (
              history.map((item, index) => (
                <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
                  <Stack space="large">
                    <Inline space="small" alignY="center">
                      <Heading level="3">v{item.version}</Heading>
                      <Box position="relative">
                        <Box
                          position="absolute"
                          style={{
                            top: '50%',
                            transform: 'translateY(-50%)',
                          }}
                        >
                          {item.time ? (
                            <Badge tone={item.isRecent ? 'promote' : 'neutral'}>
                              {item.time}
                            </Badge>
                          ) : null}
                        </Box>
                      </Box>
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
