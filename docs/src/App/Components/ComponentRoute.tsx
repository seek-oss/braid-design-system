import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import dedent from 'dedent';
import { ComponentProps } from './ComponentProps';
import { ExternalLink } from './Link';
import { ThemeProvider, Box, Text } from '../../../../lib/components';
import {
  wireframe,
  jobStreet,
  seekAsia,
  seekAnz,
} from '../../../../lib/themes';
import { ComponentDocs } from '../../types';

const themes = [wireframe, jobStreet, seekAsia, seekAnz];
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

  return (
    <Box>
      <Box paddingBottom="small">
        <Text size="large" weight="strong">
          {componentName}
        </Text>
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
            ? themes.map(theme => (
                <Box key={theme.name} marginBottom="large">
                  <Box paddingBottom="small">
                    <Text color="secondary">Theme: {theme.name}</Text>
                  </Box>
                  <ThemeProvider theme={theme}>
                    {render({
                      id: `${index}_${theme.name}`,
                      handler,
                    })}
                  </ThemeProvider>
                </Box>
              ))
            : null}
          <Box paddingBottom="small">
            <Text color="secondary">Code:</Text>
          </Box>
          <Box
            paddingLeft="small"
            paddingRight="small"
            paddingTop="xxsmall"
            paddingBottom="small"
            borderRadius="standard"
            style={{
              backgroundColor: '#2b2b2b',
              overflowX: 'auto',
            }}
          >
            <Text component="pre" color="white">
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
        <Text weight="strong">Source</Text>
      </Box>
      <Box paddingBottom="large">
        <Text>
          <ExternalLink inline href={sourceUrl} rel="noopener noreferrer">
            View on GitHub
          </ExternalLink>
        </Text>
      </Box>
    </Box>
  );
};
