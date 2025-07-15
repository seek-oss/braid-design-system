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
import type { ReactNodeNoStrings } from 'braid-src/lib/components/private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from 'braid-src/lib/components/private/defaultTextProps';
import { Children } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import { visit } from 'unist-util-visit';

import { CodeBlock } from '../Code/Code';
import type { SupportedLanguage } from '../Code/supportedLanguages';
import { InlineCode } from '../InlineCode/InlineCode';

const Code = ({ lang, value }: { lang: string | null; value: string }) => (
  <TextContext.Provider value={null}>
    <Box paddingBottom="medium">
      <CodeBlock language={lang as SupportedLanguage}>{value}</CodeBlock>
    </Box>
  </TextContext.Provider>
);

const paragraph = ({ children }: any) => (
  <Box paddingBottom="small">
    <Text component="p">{children}</Text>
  </Box>
);
paragraph.isParagraph = true;

const renderers: Components = {
  h1: ({ children }) => <Heading level="2">{children}</Heading>,
  h2: ({ children }) => (
    <Box paddingTop="medium">
      <LinkableHeading level="3">
        {Array.isArray(children)
          ? children.map(({ children: child }) => child).join(' ')
          : (children as string)}
      </LinkableHeading>
    </Box>
  ),
  h3: ({ children }) => (
    <Box paddingBottom="small" paddingTop="medium">
      <Heading level="4">{children}</Heading>
    </Box>
  ),
  h4: ({ children }) => (
    <Box paddingBottom="small">
      <Heading level="4">{children}</Heading>
    </Box>
  ),
  p: paragraph,
  ol: ({ children }) => (
    <TextContext.Provider value={null}>
      <Box paddingBottom="medium">
        <List space="medium" type="number">
          {children as ReactNodeNoStrings}
        </List>
      </Box>
    </TextContext.Provider>
  ),
  ul: ({ children }) => (
    <TextContext.Provider value={null}>
      <Box paddingBottom="medium">
        <List space="medium">
          {
            Children.map(children, (child) =>
              typeof child === 'string' ? null : child,
            ) as ReactNodeNoStrings
          }
        </List>
      </Box>
    </TextContext.Provider>
  ),
  li: ({ children }) => {
    const childList = Children.toArray(children);

    // @ts-expect-error
    if (childList[1]?.type?.isParagraph) {
      return <Stack space="medium">{children as ReactNodeNoStrings}</Stack>;
    }

    return <Text>{children}</Text>;
  },
  strong: ({ children }) => <Strong>{children}</Strong>,
  em: ({ children }) => <Strong>{children}</Strong>,
  pre: ({ children }) => children,
  code: ({ children, className, ...rest }) => {
    // This property is added by the `checkInlineCode` rehype plugin.
    if ('data-inline' in rest && rest['data-inline']) {
      return <InlineCode>{children as string}</InlineCode>;
    }
    const match = /language-(\w+)/.exec(className ?? '');
    return <Code lang={match?.[1] ?? null} value={children as string} />;
  },
  a: ({ children, href }) => (
    <TextLink href={href ?? '#!'}>{children}</TextLink>
  ),
  blockquote: ({ children }) => (
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
  readonly children: string;
}
export function Markdown({ children }: MarkdownProps) {
  return (
    <Stack space="medium">
      <ReactMarkdown components={renderers} rehypePlugins={[checkInlineCode]}>
        {children}
      </ReactMarkdown>
    </Stack>
  );
}

/**
 * Adds an `inline` property to code blocks.
 * This is used to determine whether the code block should be rendered as inline code or a block code.
 * Previous versions of `ReactMarkdown` used to add this for us, but now we need to do it manually.
 */
const checkInlineCode = () =>
  function addProp(tree: any) {
    visit(tree, 'element', (node, _, parent) => {
      if (node.tagName === 'code' && parent.tagName !== 'pre') {
        node.properties['data-inline'] = true;
      }
    });
  };
