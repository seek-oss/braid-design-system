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
  <Box paddingBottom="large">
    <CodeBlock language={language}>{value}</CodeBlock>
  </Box>
);

const paragraph = ({ children }: any) => <Text component="p">{children}</Text>;
paragraph.isParagraph = true;

const renderers = {
  root: ({ children }: any) => <Stack space="large">{children}</Stack>,
  heading: ({ level, children }: any) =>
    level <= 3 ? (
      <Box paddingTop={level <= 2 ? 'medium' : undefined}>
        <Heading level={level + 1}>{children}</Heading>
      </Box>
    ) : (
      <Text size="large">{children}</Text>
    ),
  paragraph,
  list: List,
  listItem: ({ children }: { children: any }) => {
    const childList = React.Children.toArray(children);

    // @ts-expect-error
    if (childList[0]?.type?.isParagraph) {
      return <Stack space="medium">{children}</Stack>;
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
