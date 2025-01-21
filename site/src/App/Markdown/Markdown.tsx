import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Text,
  Heading,
  Stack,
  List,
  Strong,
  Box,
  TextLink,
} from 'braid-src/lib/components';
import { TextContext } from 'braid-src/lib/components/Text/TextContext';
import { DefaultTextPropsProvider } from 'braid-src/lib/components/private/defaultTextProps';
import type { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

import { CodeBlock, type SupportedLanguage } from '../Code/Code';
import { InlineCode } from '../InlineCode/InlineCode';

const Code = ({
  language,
  value,
}: {
  language: SupportedLanguage | null;
  value: string;
}) => (
  <TextContext.Provider value={null}>
    <Box paddingBottom="medium">
      <CodeBlock language={language}>{value}</CodeBlock>
    </Box>
  </TextContext.Provider>
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
        {resolvedLevel === '3' ? (
          <LinkableHeading level={resolvedLevel}>
            {Array.isArray(children)
              ? children
                  .map(({ props }: ReactElement) => props.children)
                  .join(' ')
              : children}
          </LinkableHeading>
        ) : (
          <Heading level={resolvedLevel === '5' ? '4' : resolvedLevel}>
            {children}
          </Heading>
        )}
      </Box>
    );
  },
  paragraph,
  list: ({ children }: { children: any }) => (
    <TextContext.Provider value={null}>
      <Box paddingBottom="medium">
        <List space="medium">{children}</List>
      </Box>
    </TextContext.Provider>
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
  inlineCode: InlineCode,
  code: Code,
  link: TextLink,
  linkReference: TextLink,
  blockquote: ({ children }: any) => (
    <Box paddingX="gutter" paddingY="small" background="neutralLight">
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
  return (
    <ReactMarkdown
      renderers={renderers}
      allowNode={
        /* Don't render a node for link definitions */
        (node) => node.type !== 'definition'
      }
    >
      {children}
    </ReactMarkdown>
  );
}
