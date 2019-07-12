import React, { Fragment } from 'react';
import { useStyles } from 'react-treat';
import copy from 'copy-to-clipboard';
import base64url from 'base64-url';
import classnames from 'classnames';
import { useConfig } from '../ConfigContext';
import { Box, Text } from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import { FieldOverlay } from '../../../../lib/components/private/FieldOverlay/FieldOverlay';
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
      background="formAccent"
      borderRadius="standard"
      paddingTop="xxsmall"
      paddingBottom="xxsmall"
      paddingLeft="xsmall"
      paddingRight="xsmall"
      position="relative"
      className={styles.button}
      {...restProps}
    >
      <FieldOverlay
        variant="focus"
        className={classnames(styles.focusOverlay)}
      />
      <FieldOverlay
        background="formAccentHover"
        className={classnames(styles.hoverOverlay)}
      />
      <FieldOverlay
        background="formAccentActive"
        className={classnames(styles.activeOverlay)}
      />
      <Box
        component="span"
        // display="block"
        position="relative"
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
  const { playroomUrl } = useConfig();

  return (
    <Box
      background="brandAccent"
      position="relative"
      paddingLeft="small"
      paddingRight="small"
      paddingTop="xxsmall"
      paddingBottom="small"
      borderRadius="standard"
      style={{
        overflowX: 'auto',
        maxWidth: 800,
      }}
    >
      <Fragment>
        <Text component="pre">{children}</Text>
        <Box
          display="flex"
          position="absolute"
          paddingTop="small"
          paddingRight="small"
          style={{ top: 0, right: 0 }}
        >
          <CodeButton onClick={() => copy(children)}>Copy</CodeButton>
          <Box paddingLeft="xsmall" />
          <CodeButton
            component="a"
            target="_blank"
            href={`${playroomUrl}#?code=${base64url.encode(children)}`}
            style={{ textDecoration: 'none' }}
          >
            Playroom
          </CodeButton>
        </Box>
      </Fragment>
    </Box>
  );
};
