import React from 'react';
import type { types as t } from '@babel/core';
import { Box, Text } from 'ink';
import { renderToString } from '../ink/ink-to-string';
import SyntaxHighlight from './SyntaxHighlight';

interface CodeLineProps {
  code: string;
  lineNumber: number;
  lineNumberWidth: number;
  highlight?: {
    start: number;
    end: number;
  };
}

const CodeLine = ({
  code,
  lineNumber,
  lineNumberWidth,
  highlight,
}: CodeLineProps) => {
  const propIndicatorLength = highlight ? (
    <Box>
      <Box width={highlight.start} />
      <Text color="yellow">
        {''.padStart(highlight.end - highlight.start, '^')}
      </Text>
    </Box>
  ) : null;

  return (
    <Box alignItems="flex-start">
      <Box
        width={lineNumberWidth + 3}
        alignItems="flex-end"
        flexDirection="column"
      >
        <Text>{lineNumber} │ </Text>
        {highlight ? <Text>│ </Text> : null}
      </Box>
      <Box flexDirection="column">
        <SyntaxHighlight code={code} language="tsx" />
        {propIndicatorLength}
      </Box>
    </Box>
  );
};

interface CodeFrameProps {
  code: string;
  location: t.SourceLocation;
}
export const CodeFrame = ({ code, location }: CodeFrameProps) => {
  const codeLines = code.split('\n');

  const { start, end } = location;

  const codeLineNumber = start.line - 1;
  const beforeLineNumber = start.line - 2;
  const afterLineNumber = end.line;

  const codeLine = codeLines[codeLineNumber];
  const beforeLine = codeLines[beforeLineNumber];
  const afterLine = codeLines[afterLineNumber];

  const longestLineNumberLength = Math.max(
    3,
    ...[beforeLineNumber, codeLineNumber, afterLineNumber]
      .filter(Boolean)
      .map((lineNumber) => lineNumber.toString().length),
  );

  return (
    <Box flexDirection="column">
      <CodeLine
        code={beforeLine}
        lineNumber={beforeLineNumber}
        lineNumberWidth={longestLineNumberLength}
      />
      <CodeLine
        code={codeLine}
        lineNumber={codeLineNumber}
        lineNumberWidth={longestLineNumberLength}
        highlight={{ start: start.column, end: end.column }}
      />
      <CodeLine
        code={afterLine}
        lineNumber={afterLineNumber}
        lineNumberWidth={longestLineNumberLength}
      />
    </Box>
  );
};

export const renderCodeFrame = (props: CodeFrameProps) =>
  `\n${renderToString(<CodeFrame {...props} />)}`;
