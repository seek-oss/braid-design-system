import React from 'react';
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

const handler = () => {
  /* No-op for docs examples */
};

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
      {examples.map(({ label, render, code }, index) => (
        <Box key={index} marginBottom="xxlarge">
          {label ? (
            <Box paddingBottom="small">
              <Text>{label}</Text>
            </Box>
          ) : null}
          {render
            ? Object.values(themes).map(theme => (
                <Box key={theme.name} marginBottom="large">
                  <Box paddingBottom="small">
                    <Text tone="secondary">Theme: {theme.name}</Text>
                  </Box>
                  <BraidProvider theme={theme}>
                    {render({
                      id: `${index}_${theme.name}`,
                      handler,
                    })}
                  </BraidProvider>
                </Box>
              ))
            : null}
          <Box paddingBottom="small">
            <Text tone="secondary">Code:</Text>
          </Box>
          <Box
            background="brandAccent"
            paddingLeft="small"
            paddingRight="small"
            paddingTop="xxsmall"
            paddingBottom="small"
            borderRadius="standard"
            style={{
              overflowX: 'auto',
            }}
          >
            <Text component="pre">
              {render && !code
                ? cleanCodeSnippet(
                    reactElementToJSXString(render({ id: 'id', handler }), {
                      useBooleanShorthandSyntax: false,
                      showDefaultProps: false,
                      showFunctions: true,
                    }),
                  )
                : null}
              {code ? cleanCodeSnippet(dedent(code)) : null}
            </Text>
          </Box>
        </Box>
      ))}

      <Box paddingBottom="small">
        <ComponentProps componentName={componentName} />
      </Box>

      <Box paddingBottom="small">
        <Heading level="3">Further References</Heading>
      </Box>
      <Box paddingBottom="large">
        <Paragraph>
          <Text>
            <ExternalLink inline href={sourceUrl} rel="noopener noreferrer">
              View Source
            </ExternalLink>
          </Text>
        </Paragraph>
        <Paragraph>
          <Text>
            {docs.migrationGuide ? (
              <ExternalLink
                inline
                href={migrationGuideUrl}
                rel="noopener noreferrer"
              >
                Migration Guide
              </ExternalLink>
            ) : null}
          </Text>
        </Paragraph>
      </Box>
    </Box>
  );
};
