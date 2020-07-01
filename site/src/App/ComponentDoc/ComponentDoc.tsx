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
} from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';

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

  return (
    <Stack space="xlarge">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
      {docs.description}
      {docs.description ? (
        <Fragment>
          <Divider />
          <Heading level="3" component="h4">
            Example{filteredExamples.length > 1 ? 's' : ''}
          </Heading>
        </Fragment>
      ) : null}
      {filteredExamples.map((example, index) => {
        const {
          label,
          Example,
          code,
          Container = DefaultContainer,
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
          <Box key={index} marginBottom="xlarge">
            <Stack space="xlarge">
              {label && filteredExamples.length > 1 ? (
                <Heading level="4">{label}</Heading>
              ) : null}
              {Example ? (
                <Container>
                  <ThemedExample>
                    <Example id={`${index}`} handler={handler} />
                  </ThemedExample>
                </Container>
              ) : null}
              {codeAsString ? (
                <Code playroom={playroom}>{codeAsString}</Code>
              ) : null}
            </Stack>
          </Box>
        );
      })}

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
  );
};
