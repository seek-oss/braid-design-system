import React, { useState, ReactChild } from 'react';
import { useStyles } from 'react-treat';
import copy from 'copy-to-clipboard';
import memoize from 'lodash/memoize';
import reactElementToJSXString from 'react-element-to-jsx-string';
import prettier from 'prettier/standalone';
import typescriptParser from 'prettier/parser-typescript';
import { createUrl } from 'sku/playroom/utils';
import { useConfig } from '../ConfigContext';
import {
  Box,
  Stack,
  Text,
  Inline,
  IconChevron,
  Hidden,
} from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { FieldOverlay } from '../../../../lib/components/private/FieldOverlay/FieldOverlay';
import { useBoxStyles } from '../../../../lib/components/Box/useBoxStyles';
import { hideFocusRingsClassName } from '../../../../lib/components/private/hideFocusRings/hideFocusRings';
import { CopyIcon } from './CopyIcon';
import { PlayIcon } from './PlayIcon';
import * as styleRefs from './Code.treat';

// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import editorTheme from './editorTheme';
import { ThemedExample } from '../ThemeSetting';

const formatSnippet = memoize(
  (snippet) =>
    prettier
      .format(snippet, {
        parser: 'typescript',
        plugins: [typescriptParser],
        semi: false,
      })
      .replace(/^;/, ''), // Remove leading semicolons from JSX
);

const CodeButton = ({
  component = 'button',
  children,
  className,
  ...restProps
}: BoxProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component={component}
      cursor="pointer"
      borderRadius="standard"
      paddingY="xxsmall"
      paddingX="xsmall"
      position="relative"
      outline="none"
      className={[styles.button, className]}
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

interface CodeProps {
  playroom?: boolean;
  collapsedByDefault?: boolean;
  children: ReactChild;
}
export default ({
  playroom = true,
  collapsedByDefault = false,
  children,
}: CodeProps) => {
  const styles = useStyles(styleRefs);
  const [hideCode, setHideCode] = useState(collapsedByDefault);
  const { playroomUrl } = useConfig();

  const snippet = formatSnippet(
    typeof children === 'string'
      ? children
      : reactElementToJSXString(children, {
          useBooleanShorthandSyntax: false,
          showDefaultProps: false,
          showFunctions: false,
          filterProps: ['onChange', 'onBlur', 'onFocus'],
        }),
  );

  return (
    <Box
      position="relative"
      style={{
        maxWidth: 864,
      }}
    >
      <Stack space="xsmall">
        {typeof children !== 'string' && (
          <ThemedExample background="body">{children}</ThemedExample>
        )}
        {hideCode ? null : (
          <Box
            position="relative"
            padding="xxsmall"
            borderRadius="standard"
            className={styles.code}
          >
            <Box padding={['small', 'medium', 'large']}>
              <Text size="small" component="pre" baseline={false}>
                <SyntaxHighlighter language="tsx" style={editorTheme}>
                  {snippet}
                </SyntaxHighlighter>
              </Text>
            </Box>
          </Box>
        )}
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
              onClick={() => copy(snippet)}
              title="Copy code to clipboard"
            >
              <CopyIcon /> Copy
            </CodeButton>
          )}
          {/^import/m.test(snippet) || !playroom ? null : (
            <CodeButton
              component="a"
              target="_blank"
              href={createUrl({ baseUrl: playroomUrl, code: snippet })}
              className={useBoxStyles({
                component: 'a',
                display: 'block',
              })}
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
