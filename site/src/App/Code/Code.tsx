import React, { type ReactElement, useState, useEffect, useRef } from 'react';
import copy from 'copy-to-clipboard';
import dedent from 'dedent';
import memoize from 'lodash/memoize';
import prettier from 'prettier/standalone';
import reactElementToJsxString from 'react-element-to-jsx-string';
import typescriptParser from 'prettier/parser-typescript';
import { createUrl } from 'playroom/utils';
import { useConfig } from '../ConfigContext';
import type { Source } from 'braid-design-system/src/lib/utils/source.macro';
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
import type { BoxProps } from 'braid-src/lib/components/Box/Box';
import { Box } from 'braid-src/lib/components/Box/Box';
import { FieldOverlay } from 'braid-src/lib/components/private/FieldOverlay/FieldOverlay';
import { hideFocusRingsClassName } from 'braid-src/lib/components/private/hideFocusRings/hideFocusRings';
import * as styles from './Code.css';

// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import editorTheme from './editorTheme';
import { ThemedExample } from '../ThemeSetting';
import usePlayroomScope from 'braid-src/lib/playroom/useScope';
import { PlayroomStateProvider } from 'braid-src/lib/playroom/playroomState';

type ReactElementOrString = ReactElement | string;

export const formatSnippet = memoize((snippet: string) => {
  // Remove id props from code snippets since they're not needed in Playroom
  const cleanedSnippet = snippet
    .replace(/id={id}/g, '')
    .replace(/id={`\${id}_[0-9a-zA-Z]+`}/g, '');

  const formattedSnippet = prettier
    .format(cleanedSnippet, {
      parser: 'typescript',
      plugins: [typescriptParser],
      semi: false,
    })
    .replace(/^;/, '') // Remove leading semicolons from JSX
    .replace(/[\r\n]+$/, ''); // Remove trailing newline

  const lines = formattedSnippet.split('\n');

  const firstLine = lines[0];
  const lastLine = lines[lines.length - 1];

  if (
    (firstLine === '<>' && lastLine === '</>') ||
    (firstLine === '<Fragment>' && lastLine === '</Fragment>') ||
    (firstLine === '<React.Fragment>' && lastLine === '</React.Fragment>')
  ) {
    return dedent(lines.slice(1, lines.length - 1).join('\n'));
  }

  return formattedSnippet;
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
      <Text size="xsmall" baseline={false} tone="positive">
        <IconPositive /> {successLabel}
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
  language?: string;
}) => (
  <Box
    position="relative"
    padding="xxsmall"
    borderRadius="large"
    background="surfaceDark"
    className={styles.code}
  >
    <Box padding={['medium', 'medium', 'large']}>
      <Text size="small" component="pre" baseline={false}>
        <SyntaxHighlighter language={language} style={editorTheme}>
          {children}
        </SyntaxHighlighter>
      </Text>
    </Box>
  </Box>
);

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
    const code = formatSnippet(input);

    return {
      code,
      value: code,
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
