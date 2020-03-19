import React, { ReactNode, Fragment } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { ComponentProps } from './ComponentProps';
import { ExternalLink } from './Link';
import { Box, Heading, Stack, Text } from '../../../../lib/components';

import { ComponentDocs } from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';

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
  docs: ComponentDocs;
}

export const ComponentRoute = ({
  componentName,
  subfolder = '',
  sourceUrlPrefix,
  docs,
}: ComponentRouteProps) => {
  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${componentName}`;
  const examples = docs.examples || [];

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${componentName}.migration.md`;

  return (
    <Stack space="large">
      <Heading level="2" component="h3">
        {componentName}
      </Heading>
      {docs.description ? (
        <Box style={{ maxWidth: 700 }}>{docs.description}</Box>
      ) : null}
      {examples
        .filter(example => example.docsSite !== false)
        .map((example, index) => {
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
                {label ? <Heading level="4">{label}</Heading> : null}
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
