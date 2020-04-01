import React, { ReactNode, Fragment } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ComponentProps } from './ComponentProps';
import {
  Box,
  Heading,
  Stack,
  Text,
  TextLink,
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
    example => example.docsSite !== false,
  );

  return (
    <Stack space="xlarge">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
      {docs.description ? (
        <Box style={{ maxWidth: 700 }}>{docs.description}</Box>
      ) : null}
      {docs.description ? (
        <Heading level="3" component="h4">
          Example{filteredExamples.length > 1 ? 's' : ''}
        </Heading>
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
            <Stack space="gutter">
              {label && filteredExamples.length > 1 ? (
                <Text tone="secondary" component="h4">
                  {label}
                </Text>
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

      <ComponentProps componentName={componentName} />

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
