import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useStyles } from 'sku/react-treat';

import { CodeBlock } from '../Code/Code';
import {
  Text,
  Heading,
  Stack,
  List,
  Strong,
  Box,
  TextLink,
} from '../../../../lib/components';
import { DefaultTextPropsProvider } from '../../../../lib/components/private/defaultTextProps';
import * as styleRefs from './Markdown.treat';

const Code = ({ language, value }: { language: string; value: string }) => (
  <Box paddingBottom="medium">
    <CodeBlock language={language}>{value}</CodeBlock>
  </Box>
);

const paragraph = ({ children }: any) => (
  <Box paddingBottom="small">
    <Text component="p">{children}</Text>
  </Box>
);
paragraph.isParagraph = true;

const renderers = {
  root: ({ children }: any) => <Stack space="medium">{children}</Stack>,
  heading: ({ level, children }: any) => {
    const resolvedLevel = String(level + 1) as '2' | '3' | '4' | '5';
    const paddingTopForLevel = {
      '3': 'medium',
      '4': 'medium',
    } as const;

    return (
      <Box
        paddingBottom={
          resolvedLevel === '4' || resolvedLevel === '5' ? 'small' : undefined
        }
        paddingTop={
          resolvedLevel in paddingTopForLevel
            ? paddingTopForLevel[
                resolvedLevel as keyof typeof paddingTopForLevel
              ]
            : undefined
        }
      >
        <Heading level={resolvedLevel === '5' ? '4' : resolvedLevel}>
          {children}
        </Heading>
      </Box>
    );
  },
  paragraph,
  list: ({ children }: { children: any }) => (
    <Box paddingBottom="medium">
      <List space="medium">{children}</List>
    </Box>
  ),
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
  inlineCode: function InlineCode({ children }: any) {
    const styles = useStyles(styleRefs);

    return (
      <Box
        component="code"
        display="inline"
        paddingX="xxsmall"
        className={styles.inlineCode}
      >
        {children}
      </Box>
    );
  },
  code: Code,
  link: TextLink,
  blockquote: ({ children }: any) => (
    <Box
      paddingX="gutter"
      paddingY="small"
      background="selection" // Should be 'neutralLight' once it can be explicitly defined in the theme tokens
    >
      <Box paddingTop="small">
        <DefaultTextPropsProvider tone="secondary">
          {children}
        </DefaultTextPropsProvider>
      </Box>
    </Box>
  ),
};

interface MarkdownProps {
  children: string;
}
export function Markdown({ children }: MarkdownProps) {
  return <ReactMarkdown renderers={renderers}>{children}</ReactMarkdown>;
}
