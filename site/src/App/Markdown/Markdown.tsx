import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

import editorTheme from '../Code/editorTheme';
import {
  Text,
  Heading,
  Stack,
  List,
  Strong,
  Box,
} from '../../../../lib/components';

const Code = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter language="tsx" style={editorTheme}>
      {children}
    </SyntaxHighlighter>
  );
};

const renderers = {
  root: ({ children }: any) => <Stack space="large">{children}</Stack>,
  heading: ({ level, children }: any) => (
    <Heading level={level}>{children}</Heading>
  ),
  paragraph: Text,
  list: List,
  listItem: Text,
  strong: Strong,
  emphasis: Strong,
  inlineCode: ({ children }: any) => (
    <Box component="code" display="inline">
      {children}
    </Box>
  ),
  // code: Code,
};

interface MarkdownProps {
  children: string;
}
export function Markdown({ children }: MarkdownProps) {
  console.log(children);

  return <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>;
}
