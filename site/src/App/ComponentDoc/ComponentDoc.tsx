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
} from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { useUpdates } from '../UpdateProvider';

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
  const { getHistory } = useUpdates();

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

  const a = getHistory(componentName);

  return (
    <Stack space="xlarge">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
      <pre>{JSON.stringify(a, null, 2)}</pre>
      {docs.deprecationWarning ? (
        <Alert tone="caution">{docs.deprecationWarning}</Alert>
      ) : null}
      {docs.description}
      <Divider />
      <Stack space="xlarge" dividers>
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
              ? // eslint-disable-next-line new-cap
                reactElementToJSXString(Example({ id: 'id', handler }), {
                  useBooleanShorthandSyntax: false,
                  showDefaultProps: false,
                  showFunctions: false,
                  filterProps: ['onChange', 'onBlur', 'onFocus'],
                })
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
      <Stack space="large">
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
  );
};
