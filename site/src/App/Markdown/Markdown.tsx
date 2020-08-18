import React from 'react';
import ReactMarkdown from 'react-markdown';

import { CodeBlock } from '../Code/Code';
import {
  Text,
  Heading,
  Stack,
  List,
  Strong,
  Box,
  TextLink,
  Alert,
} from '../../../../lib/components';

const Code = ({ language, value }: { language: string; value: string }) => (
  <CodeBlock language={language}>{value}</CodeBlock>
);

const paragraph = ({ children }: any) => <Text component="p">{children}</Text>;

const renderers = {
  root: ({ children }: any) => <Stack space="large">{children}</Stack>,
  heading: ({ level, children }: any) => (
    <Heading level={level}>{children}</Heading>
  ),
  paragraph,
  list: List,
  listItem: ({ children }: { children: any }) => {
    const childList = React.Children.toArray(children);

    if (childList.length > 1) {
      return <Stack space="medium">{children}</Stack>;
    }

    // @ts-expect-error
    if (childList[0]?.type?.name === 'paragraph') {
      return children;
    }

    return <Text>{children}</Text>;
  },
  strong: Strong,
  emphasis: Strong,
  inlineCode: ({ children }: any) => (
    <Box
      component="code"
      display="inline"
      background="neutralLight"
      borderRadius="standard"
      padding="xxsmall"
    >
      {children}
    </Box>
  ),
  code: Code,
  link: TextLink,
  blockquote: ({ children }: any) => <Alert>{children}</Alert>,
};

interface MarkdownProps {
  children: string;
}
export function Markdown({ children }: MarkdownProps) {
  return <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>;
}
