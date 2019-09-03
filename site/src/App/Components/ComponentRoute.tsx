import React, { ReactNode, Fragment } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import dedent from 'dedent';
import { ComponentProps } from './ComponentProps';
import { ExternalLink } from './Link';
import {
  BraidProvider,
  Box,
  Heading,
  Paragraph,
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
    <Box>
      <Box paddingBottom="small">
        <Heading level="2">{componentName}</Heading>
      </Box>
      {examples.length > 0 ? (
        <Box paddingBottom="small">
          <Text weight="strong">
            Example
            {examples.length > 1 ? 's' : ''}
          </Text>
        </Box>
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
            <Box key={index} marginBottom="xxlarge">
              {label ? (
                <Box paddingBottom="small">
                  <Text>{label}</Text>
                </Box>
              ) : null}
              {Example
                ? Object.values(themes).map(theme => (
                    <Box key={theme.name} marginBottom="large">
                      <Box paddingBottom="small">
                        <Text tone="secondary">Theme: {theme.name}</Text>
                      </Box>
                      <BraidProvider theme={theme}>
                        <Container>
                          <Example
                            id={`${index}_${theme.name}`}
                            handler={handler}
                          />
                        </Container>
                      </BraidProvider>
                    </Box>
                  ))
                : null}
              {codeAsString ? (
                <Fragment>
                  <Box paddingBottom="small">
                    <Text tone="secondary">Code:</Text>
                  </Box>
                  <Code>{codeAsString}</Code>
                </Fragment>
              ) : null}
            </Box>
          );
        })}

      <Box paddingBottom="small">
        <ComponentProps componentName={componentName} />
      </Box>

      <Box paddingBottom="small">
        <Heading level="3">Further References</Heading>
      </Box>
      <Box paddingBottom="large">
        <Paragraph>
          <Text>
            <ExternalLink href={sourceUrl} rel="noopener noreferrer">
              View Source
            </ExternalLink>
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            {docs.migrationGuide ? (
              <ExternalLink href={migrationGuideUrl} rel="noopener noreferrer">
                Migration Guide
              </ExternalLink>
            ) : null}
          </Text>
        </Paragraph>
      </Box>
    </Box>
  );
};
