import React, { Fragment, ReactChild } from 'react';
import { useStyles } from 'react-treat';
import copy from 'copy-to-clipboard';
import memoize from 'lodash/memoize';
import reactElementToJSXString from 'react-element-to-jsx-string';
import prettier from 'prettier/standalone';
import babylonParser from 'prettier/parser-babylon';
import { createUrl } from 'sku/playroom/utils';
import classnames from 'classnames';
import { useConfig } from '../ConfigContext';
import { Box, Stack, Text, BraidProvider } from '../../../../lib/components';
import { seekAnzClassic } from '../../../../lib/themes';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { FieldOverlay } from '../../../../lib/components/private/FieldOverlay/FieldOverlay';
import { CopyIcon } from './CopyIcon';
import { PlayIcon } from './PlayIcon';
import * as styleRefs from './Code.treat';

// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import editorTheme from './editorTheme';

const formatSnippet = memoize(
  snippet =>
    prettier
      .format(snippet, {
        parser: 'babel',
        plugins: [babylonParser],
        semi: false,
      })
      .replace(/^;/, ''), // Remove leading semicolons from JSX
);

const CodeButton = ({
  component = 'button',
  children,
  ...restProps
}: BoxProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component={component}
      cursor="pointer"
      background="neutralLight"
      borderRadius="standard"
      paddingY="xxsmall"
      paddingX="xsmall"
      position="relative"
      className={styles.button}
      {...restProps}
    >
      <FieldOverlay
        variant="focus"
        className={classnames(styles.focusOverlay)}
      />
      <FieldOverlay
        background="card"
        className={classnames(styles.hoverOverlay)}
      />
      <FieldOverlay className={classnames(styles.activeOverlay)} />
      <Box
        component="span"
        position="relative"
        pointerEvents="none"
        className={styles.buttonText}
      >
        <Text size="xsmall" baseline={false}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};

interface CodeProps {
  playroom?: boolean;
  children: ReactChild;
}
export default ({ playroom = true, children }: CodeProps) => {
  const styles = useStyles(styleRefs);
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
          <Box
            padding="small"
            background="neutralLight"
            borderRadius="standard"
          >
            <BraidProvider theme={seekAnzClassic} styleBody={false}>
              {children}
            </BraidProvider>
          </Box>
        )}
        <Box
          position="relative"
          padding="medium"
          borderRadius="standard"
          className={styles.code}
        >
          <Text component="pre" baseline={false}>
            <SyntaxHighlighter language="jsx" style={editorTheme}>
              {snippet}
            </SyntaxHighlighter>
          </Text>
        </Box>
      </Stack>
      <Box
        display="flex"
        justifyContent="flexEnd"
        paddingY="xxsmall"
        paddingRight="xxsmall"
        background="neutralLight"
        borderRadius="standard"
        className={styles.toolbar}
      >
        <CodeButton onClick={() => copy(snippet)} title="Copy to clipboard">
          <CopyIcon /> Copy
        </CodeButton>
        {/^import/m.test(snippet) || !playroom ? null : (
          <Fragment>
            <Box paddingLeft="xxsmall" />
            <CodeButton
              component="a"
              target="_blank"
              href={createUrl({ baseUrl: playroomUrl, code: snippet })}
              style={{ textDecoration: 'none' }}
              title="Open in Playroom"
            >
              <PlayIcon /> Open in Playroom
            </CodeButton>
          </Fragment>
        )}
      </Box>
    </Box>
  );
};
