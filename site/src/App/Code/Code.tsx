import React, { Fragment } from 'react';
import { useStyles } from 'react-treat';
import copy from 'copy-to-clipboard';
import base64url from 'base64-url';
import classnames from 'classnames';
import { useConfig } from '../ConfigContext';
import { Box, Text } from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { FieldOverlay } from '../../../../lib/components/private/FieldOverlay/FieldOverlay';
import { CopyIcon } from './CopyIcon';
import { PlayIcon } from './PlayIcon';
import * as styleRefs from './Code.treat';

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
  children: string;
}
export default ({ children }: CodeProps) => {
  const styles = useStyles(styleRefs);
  const { playroomUrl } = useConfig();

  return (
    <Box
      position="relative"
      style={{
        maxWidth: 800,
      }}
    >
      <Box
        background="brandAccent"
        position="relative"
        paddingX="small"
        paddingY="xsmall"
        borderRadius="standard"
        className={styles.code}
      >
        <Text component="pre" baseline={false}>
          {children}
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="flexEnd"
        paddingY="xxsmall"
        paddingRight="xxsmall"
        background="neutralLight"
        borderRadius="standard"
        className={styles.toolbar}
      >
        <CodeButton onClick={() => copy(children)} title="Copy to clipboard">
          <CopyIcon /> Copy
        </CodeButton>
        {/^import/m.test(children) ? null : (
          <Fragment>
            <Box paddingLeft="xxsmall" />
            <CodeButton
              component="a"
              target="_blank"
              href={`${playroomUrl}#?code=${base64url.encode(children)}`}
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
