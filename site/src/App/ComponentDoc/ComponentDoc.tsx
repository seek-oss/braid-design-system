import React, { ReactNode, Fragment } from 'react';
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
  Divider,
  Alert,
  Inline,
  Badge,
} from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { useUpdates } from '../Updates';
import { Markdown } from '../Markdown/Markdown';

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
  const { getHistory, isNew, isUpdated } = useUpdates();

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

  const history = getHistory(componentName);

  const hasNewUpdates = isNew(componentName) || isUpdated(componentName);

  return (
    <Stack space="xlarge">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
      {docs.deprecationWarning ? (
        <Alert tone="caution">{docs.deprecationWarning}</Alert>
      ) : null}
      <TabsProvider id="component-details">
        <Stack space="large">
          <Tabs label="Component details">
            <Tab>Details</Tab>
            <Tab
              badge={
                hasNewUpdates ? <Badge tone="promote">New</Badge> : undefined
              }
            >
              Updates
            </Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
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
              <Stack space="large">
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
                  <Fragment>
                    <Divider />
                    <ComponentProps componentName={componentName} />
                  </Fragment>
                )}

                <Heading level="3" component="h4">
                  Further References
                </Heading>
                <Text>
                  <TextLink href={sourceUrl}>View Source</TextLink>
                </Text>
                <Text>
                  {docs.migrationGuide ? (
                    <TextLink href={migrationGuideUrl}>
                      Migration Guide
                    </TextLink>
                  ) : null}
                </Text>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack space="xlarge" dividers>
                {history.map((item, index) => (
                  <Stack space="large" key={index}>
                    <Inline space="small" alignY="bottom">
                      <Heading level="3">v{item.version}</Heading>
                      <Text>{item.time}</Text>
                      {item.isRecent ? <Badge tone="promote">New</Badge> : null}
                    </Inline>
                    <Markdown>{item.summary}</Markdown>
                  </Stack>
                ))}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>
    </Stack>
  );
};
