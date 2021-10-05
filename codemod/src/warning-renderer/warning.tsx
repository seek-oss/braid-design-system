import type { types as t } from '@babel/core';
import React, { Fragment } from 'react';
import { Box, Text } from 'ink';

import { CodeFrame } from './codeFrame';
import { renderToString } from '../ink/ink-to-string';

interface UntraceableImportWarningProps {
  code: string;
  importLocation: t.SourceLocation | null;
  propLocation: t.SourceLocation | null;
  variableName: string;
  propName?: string;
  importSource: string;
  componentName: string;
}

export const UntraceableImportWarning = ({
  code,
  importLocation,
  componentName,
  propLocation,
  variableName,
  propName,
  importSource,
}: UntraceableImportWarningProps) => (
  <Stack>
    <Text>Untraceable import.</Text>

    <Fragment>
      <Text>
        Variable “{variableName}” is assigned to{' '}
        {propName ? `the ‘${propName}’` : 'a'} prop on ‘{componentName}’, but is
        imported from ‘{importSource}’.
      </Text>
      <Text>
        You should check that there are no usages of deprecated values in that
        file.
      </Text>
    </Fragment>

    {importLocation ? (
      <Fragment>
        <Text dimColor>Imported at</Text>
        <CodeFrame code={code} location={importLocation} />
      </Fragment>
    ) : null}

    {propLocation ? (
      <Fragment>
        <Text dimColor>Used at</Text>
        <CodeFrame code={code} location={propLocation} />
      </Fragment>
    ) : null}
  </Stack>
);

export const renderUntraceableImportWarning = (
  props: UntraceableImportWarningProps,
) => `\n${renderToString(<UntraceableImportWarning {...props} />)}\n\n`;

interface UntraceablePropertyWarningProps {
  code: string;
  propLocation: t.SourceLocation | null;
  componentName?: string;
}

const Stack = ({ children }: { children: React.ReactNode }) => (
  <Box flexDirection="column">
    {React.Children.toArray(children).map((child, index) => (
      <Fragment key={index}>
        {index ? <Box paddingTop={1} /> : null}
        {child}
      </Fragment>
    ))}
  </Box>
);

export const UntraceablePropertyWarning = ({
  code,
  componentName,
  propLocation,
}: UntraceablePropertyWarningProps) => (
  <Stack>
    <Text>Untraceable computed object property.</Text>

    <Fragment>
      {componentName ? (
        <Text>
          The following object is being spread onto {componentName} and contains
          computed properties.
        </Text>
      ) : null}
      <Text>
        You should check that there are no usages of deprecated properties in
        this object.
      </Text>
    </Fragment>

    {propLocation ? <CodeFrame code={code} location={propLocation} /> : null}
  </Stack>
);

export const renderUntraceablePropertyWarning = (
  props: UntraceablePropertyWarningProps,
) => `\n${renderToString(<UntraceablePropertyWarning {...props} />)}\n\n`;

interface RecursiveDepthProps {
  filePath: string;
}

export const RecursiveDepthWarning = ({ filePath }: RecursiveDepthProps) => (
  <Stack>
    <Text>File parsing depth limit met.</Text>

    <Fragment>
      <Text>You may want to manually check the following file:</Text>
      <Text>{filePath}</Text>
    </Fragment>
  </Stack>
);

export const renderRecursiveDepthWarning = (props: RecursiveDepthProps) =>
  `\n${renderToString(<RecursiveDepthWarning {...props} />)}\n\n`;
