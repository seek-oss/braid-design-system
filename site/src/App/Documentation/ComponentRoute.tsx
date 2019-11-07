import React, { ReactNode, Fragment } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import dedent from 'dedent';
import { ComponentProps } from './ComponentProps';
import { ExternalLink } from './Link';
import {
  BraidProvider,
  Box,
  Heading,
  Stack,
  Text,
} from '../../../../lib/components';
import * as themes from '../../../../lib/themes';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';

const handler = () => {
  /* No-op for docs examples */
};

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

const cleanCodeSnippet = (code: string) =>
  code.replace(/<HideCode>.*?<\/HideCode>/gs, '...');

interface ComponentRouteProps {
  componentName: string;
  category?: string;
  sourceUrlPrefix: string;
}

export const ComponentRoute = ({
  componentName,
  category,
  sourceUrlPrefix,
}: ComponentRouteProps) => {
  const docs: ComponentDocs = category
    ? require(`../../../../lib/components/${category}/${componentName}/${componentName}.docs.tsx`)
        .default
    : require(`../../../../lib/components/${componentName}/${componentName}.docs.tsx`)
        .default;
  const examples = docs.examples || [];

  const componentPath = category ? `${category}/` : '';
  const sourceUrl = `${sourceUrlPrefix}/lib/components/${componentPath}${componentName}`;
  const migrationGuideUrl = `${sourceUrl}/${componentName}.migration.md`;

  return (
    <Stack space="large">
      <Heading level="2">{componentName}</Heading>
      {examples.length > 0 ? (
        <Text weight="strong">
          Example
          {examples.length > 1 ? 's' : ''}
        </Text>
      ) : null}
      {examples
        .filter(example => example.docsSite !== false)
        .map((example, index) => {
          const {
            label,
            Example,
            code,
            Container = DefaultContainer,
          } = example;

          const codeAsString =
            Example && !code
              ? cleanCodeSnippet(
                  reactElementToJSXString(Example({ id: 'id', handler }), {
                    useBooleanShorthandSyntax: false,
                    showDefaultProps: false,
                    showFunctions: false,
                    filterProps: ['onChange', 'onBlur', 'onFocus'],
                  }),
                )
              : code
              ? cleanCodeSnippet(dedent(code))
              : null;

          return (
            <Box key={index} marginBottom="xlarge">
              <Stack space="gutter">
                {label ? <Text>{label}</Text> : null}
                {Example
                  ? Object.values(themes).map(theme => (
                      <Box key={theme.name} marginBottom="medium">
                        <Stack space="gutter">
                          <Text tone="secondary">Theme: {theme.name}</Text>
                          <BraidProvider theme={theme}>
                            <Container>
                              <Example
                                id={`${index}_${theme.name}`}
                                handler={handler}
                              />
                            </Container>
                          </BraidProvider>
                        </Stack>
                      </Box>
                    ))
                  : null}
                {codeAsString ? (
                  <Stack space="gutter">
                    <Text tone="secondary">Code:</Text>
                    <Code>{codeAsString}</Code>
                  </Stack>
                ) : null}
              </Stack>
            </Box>
          );
        })}

      <ComponentProps componentName={componentName} />

      <Heading level="3">Further References</Heading>
      <Text>
        <ExternalLink href={sourceUrl} rel="noopener noreferrer">
          View Source
        </ExternalLink>
      </Text>
      <Text>
        {docs.migrationGuide ? (
          <ExternalLink href={migrationGuideUrl} rel="noopener noreferrer">
            Migration Guide
          </ExternalLink>
        ) : null}
      </Text>
    </Stack>
  );
};
