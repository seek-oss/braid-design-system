import React, { ReactNode, Fragment } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
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

interface ComponentRouteProps {
  componentName: string;
  subfolder?: string;
  sourceUrlPrefix: string;
}

export const ComponentRoute = ({
  componentName,
  subfolder = '',
  sourceUrlPrefix,
}: ComponentRouteProps) => {
  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${componentName}`;
  const docs: ComponentDocs = require(`../../../../${componentFolder}/${componentName}.docs.tsx`)
    .default;
  const examples = docs.examples || [];

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${componentName}.migration.md`;

  return (
    <Stack space="large">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
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
              ? reactElementToJSXString(Example({ id: 'id', handler }), {
                  useBooleanShorthandSyntax: false,
                  showDefaultProps: false,
                  showFunctions: false,
                  filterProps: ['onChange', 'onBlur', 'onFocus'],
                })
              : code;

          const ExampleInContainer = ({ id }: { id: string }) => (
            <Container>
              {Example && <Example id={id} handler={handler} />}
            </Container>
          );

          // Only render foundation elements in `wireframe` no need to theme them
          const exampleEl = docs.foundation ? (
            <ExampleInContainer id={`${index}`} />
          ) : (
            Object.values(themes).map(theme => (
              <Box key={theme.name} marginBottom="medium">
                <Stack space="gutter">
                  <Text tone="secondary">Theme: {theme.name}</Text>
                  <BraidProvider theme={theme}>
                    <ExampleInContainer id={`${index}_${theme.name}`} />
                  </BraidProvider>
                </Stack>
              </Box>
            ))
          );

          return (
            <Box key={index} marginBottom="xlarge">
              <Stack space="gutter">
                {label ? <Text>{label}</Text> : null}
                {Example ? exampleEl : null}
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

      <Heading level="3" component="h4">
        Further References
      </Heading>
      <Text>
        <ExternalLink href={sourceUrl}>View Source</ExternalLink>
      </Text>
      <Text>
        {docs.migrationGuide ? (
          <ExternalLink href={migrationGuideUrl}>Migration Guide</ExternalLink>
        ) : null}
      </Text>
    </Stack>
  );
};
