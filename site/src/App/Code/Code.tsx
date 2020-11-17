import React, {
  useState,
  ReactChild,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useStyles } from 'react-treat';
import copy from 'copy-to-clipboard';
import dedent from 'dedent';
import memoize from 'lodash/memoize';
import prettier from 'prettier/standalone';
import typescriptParser from 'prettier/parser-typescript';
import { createUrl } from 'sku/playroom/utils';
import { useConfig } from '../ConfigContext';
import { Source } from '../../../../lib/utils/source.macro';
import {
  Box,
  Stack,
  Text,
  Inline,
  IconChevron,
  Hidden,
  IconPositive,
} from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { FieldOverlay } from '../../../../lib/components/private/FieldOverlay/FieldOverlay';
import { useBoxStyles } from '../../../../lib/components/Box/useBoxStyles';
import { hideFocusRingsClassName } from '../../../../lib/components/private/hideFocusRings/hideFocusRings';
import { reactElementToJsxString } from '../../../../lib/utils/reactElementToJsxString';
import { CopyIcon } from './CopyIcon';
import { PlayIcon } from './PlayIcon';
import * as styleRefs from './Code.treat';

// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import editorTheme from './editorTheme';
import { ThemedExample } from '../ThemeSetting';
import usePlayroomScope from '../../../../lib/playroom/useScope';
import { PlayroomStateProvider } from '../../../../lib/playroom/playroomState';

const formatSnippet = memoize((snippet) => {
  const formattedSnippet = prettier
    .format(snippet, {
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
  const styles = useStyles(styleRefs);
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clickHandler = useCallback(
    (e) => {
      if (typeof onClick === 'function') {
        onClick(e);

        if (successLabel) {
          setShowSuccess(true);
          timerRef.current = setTimeout(() => setShowSuccess(false), 2000);
        }
      }
    },
    [onClick, successLabel],
  );

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
      cursor="pointer"
      borderRadius="standard"
      paddingY="xxsmall"
      paddingX="xsmall"
      position="relative"
      outline="none"
      className={[styles.button, className]}
      onClick={clickHandler}
      {...restProps}
    >
      <FieldOverlay
        variant="focus"
        className={[styles.focusOverlay, hideFocusRingsClassName]}
      />
      <FieldOverlay background="neutralLight" className={styles.hoverOverlay} />
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
}) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="relative"
      padding="xxsmall"
      borderRadius="standard"
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
  input: ReactChild | Source<ReactChild>,
): Source<ReactChild> => {
  if (typeof input === 'string') {
    return {
      code: formatSnippet(input),
      value: input,
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
    | ReactChild
    | Source<ReactChild>
    | ((
        playroomScope: ReturnType<typeof usePlayroomScope>,
      ) => Source<ReactChild>);
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

  const blockLinkStyles = useBoxStyles({
    component: 'a',
    display: 'block',
  });

  return (
    <Box
      position="relative"
      style={{
        maxWidth: 864,
      }}
    >
      <Stack space="xsmall">
        {typeof children !== 'string' && (
          <ThemedExample background="body">{value}</ThemedExample>
        )}
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
              <CopyIcon /> Copy
            </CodeButton>
          )}
          {/^import/m.test(code) || !playroom ? null : (
            <CodeButton
              component="a"
              target="_blank"
              href={createUrl({ baseUrl: playroomUrl, code })}
              className={blockLinkStyles}
              title="Open in Playroom"
            >
              <PlayIcon />{' '}
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
