import type { Source } from '@braid-design-system/source.macro';
import {
  Stack,
  Text,
  Inline,
  IconChevron,
  Hidden,
  IconPositive,
  IconCopy,
  IconVideo,
} from 'braid-src/lib/components';
// TODO: COLORMODE RELEASE
// Use public import
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import { FieldOverlay } from 'braid-src/lib/components/private/FieldOverlay/FieldOverlay';
import { hideFocusRingsClassName } from 'braid-src/lib/components/private/hideFocusRings/hideFocusRings';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';
import usePlayroomScope from 'braid-src/lib/playroom/useScope';
import copy from 'copy-to-clipboard';
import dedent from 'dedent';
import memoize from 'lodash.memoize';
import { createUrl } from 'playroom/utils';
import { type ReactElement, useState, useEffect, useRef } from 'react';
import reactElementToJsxString from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import diff from 'react-syntax-highlighter/dist/esm/languages/prism/diff';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

import { useConfig } from '../ConfigContext';
import { ThemedExample } from '../ThemeSetting';

import { editorTheme } from './editorTheme';

import * as styles from './Code.css';

type ReactElementOrString = ReactElement | string;

// `jsx` and `tsx` implicitly register `js` and `ts`
for (const [name, language] of Object.entries({ diff, jsx, tsx })) {
  SyntaxHighlighter.registerLanguage(name, language);
}

const supportedLanguages = ['diff', 'js', 'jsx', 'ts', 'tsx'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const formatSnippet = memoize((snippet: string) => {
  const lines = snippet.split('\n');
  const firstLine = lines[0];
  const lastLine = lines[lines.length - 1];

  if (
    (firstLine === '<>' && lastLine === '</>') ||
    (firstLine === '<Fragment>' && lastLine === '</Fragment>') ||
    (firstLine === '<React.Fragment>' && lastLine === '</React.Fragment>')
  ) {
    return dedent(lines.slice(1, lines.length - 1).join('\n'));
  }

  return snippet;
});

interface CodeButtonProps extends BoxProps {
  successLabel?: string;
}

export const CodeButton = ({
  component = 'button',
  children,
  className,
  onClick,
  successLabel,
  ...restProps
}: CodeButtonProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  return showSuccess ? (
    <Box
      paddingY="xxsmall"
      paddingX="xsmall"
      userSelect="none"
      pointerEvents="none"
    >
      <Text
        size="xsmall"
        baseline={false}
        tone="positive"
        icon={<IconPositive />}
      >
        {successLabel}
      </Text>
    </Box>
  ) : (
    <Box
      component={component}
      display="block"
      cursor="pointer"
      borderRadius="large"
      paddingY="xxsmall"
      paddingX="xsmall"
      position="relative"
      outline="none"
      className={[styles.button, className]}
      onClick={(e) => {
        if (typeof onClick === 'function') {
          onClick(e);

          if (successLabel) {
            setShowSuccess(true);
            timerRef.current = setTimeout(() => setShowSuccess(false), 2000);
          }
        }
      }}
      {...restProps}
    >
      <FieldOverlay
        variant="focus"
        className={[styles.focusOverlay, hideFocusRingsClassName]}
      />
      <FieldOverlay
        background={{ lightMode: 'neutralSoft', darkMode: 'surfaceDark' }}
        className={styles.hoverOverlay}
      />
      <FieldOverlay className={styles.activeOverlay} />
      <Box
        component="span"
        position="relative"
        pointerEvents="none"
        userSelect="none"
      >
        <Text size="xsmall" baseline={false} tone="secondary">
          {children}
        </Text>
      </Box>
    </Box>
  );
};

export const CodeBlock = ({
  children,
  language = 'tsx',
}: {
  children: string;
  language?: SupportedLanguage | null;
}) => {
  // `null` is the language when a code block contains no longuage tag.
  // We resolve it to a valid language or `undefined` to match the syntax highlighter's `language` type.
  const resolvedLanguage = language || undefined;

  if (resolvedLanguage && !supportedLanguages.includes(resolvedLanguage)) {
    throw new Error(
      `Unsupported syntax highlighter language: ${resolvedLanguage}. Please register the language if you wish to support it.`,
    );
  }

  return (
    <Box
      position="relative"
      padding="gutter"
      borderRadius="xlarge"
      background="surfaceDark"
      className={styles.code}
    >
      <Text size="small" component="pre" baseline={false}>
        <SyntaxHighlighter language={resolvedLanguage} style={editorTheme}>
          {children}
        </SyntaxHighlighter>
      </Text>
    </Box>
  );
};

const isSource = function <Value>(input: any): input is Source<Value> {
  return (
    typeof input === 'object' &&
    input !== null &&
    'code' in input &&
    'value' in input
  );
};

const parseInput = (
  input: ReactElementOrString | Source<ReactElementOrString>,
): Source<ReactElementOrString> => {
  if (typeof input === 'string') {
    // Dedent only if input starts with whitespace
    const shouldDedent = /^\s+/.test(input);

    const code = shouldDedent ? dedent(input) : input;
    const formattedCode = formatSnippet(code);

    return {
      code: formattedCode,
      value: formattedCode,
    };
  }

  return isSource(input)
    ? {
        code: formatSnippet(input.code),
        value: input.value,
      }
    : {
        code: formatSnippet(
          reactElementToJsxString(input, {
            useBooleanShorthandSyntax: false,
            showDefaultProps: false,
            showFunctions: false,
            filterProps: ['onChange', 'onBlur', 'onFocus'],
          }),
        ),
        value: input,
      };
};

interface CodeProps {
  playroom?: boolean;
  collapsedByDefault?: boolean;
  children:
    | ReactElementOrString
    | Source<ReactElementOrString>
    | ((
        playroomScope: ReturnType<typeof usePlayroomScope>,
      ) => Source<ReactElementOrString>);
}
const Code = ({
  playroom = true,
  collapsedByDefault = false,
  children,
}: CodeProps) => {
  const [hideCode, setHideCode] = useState(collapsedByDefault);
  const { playroomUrl } = useConfig();
  const playroomScope = usePlayroomScope();
  const { code, value } = parseInput(
    typeof children === 'function' ? children(playroomScope) : children,
  );

  return (
    <Box position="relative">
      <Stack space="xsmall">
        {typeof children !== 'string' && <ThemedExample>{value}</ThemedExample>}
        {hideCode ? null : <CodeBlock>{code}</CodeBlock>}
        <Inline space="xxsmall" align="right">
          {collapsedByDefault ? (
            <CodeButton onClick={() => setHideCode(!hideCode)}>
              <IconChevron direction={hideCode ? 'down' : 'up'} />
              <Hidden inline below="tablet">
                {hideCode ? ' View code' : ' Hide code'}
              </Hidden>
              <Hidden inline above="mobile">
                {' '}
                Code
              </Hidden>
            </CodeButton>
          ) : null}
          {hideCode ? null : (
            <CodeButton
              onClick={() => copy(code)}
              title="Copy code to clipboard"
              successLabel="Copied!"
            >
              <IconCopy /> Copy
            </CodeButton>
          )}
          {/^import/m.test(code) || !playroom ? null : (
            <CodeButton
              component="a"
              target="_blank"
              href={createUrl({ baseUrl: playroomUrl, code })}
              title="Open in Playroom"
            >
              <IconVideo />{' '}
              <Hidden inline below="tablet">
                Open in{' '}
              </Hidden>
              Playroom
            </CodeButton>
          )}
        </Inline>
      </Stack>
    </Box>
  );
};

export default (props: CodeProps) => (
  <PlayroomStateProvider>
    <Code {...props} />
  </PlayroomStateProvider>
);
