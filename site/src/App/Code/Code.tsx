import React, { Fragment } from 'react';
import copy from 'copy-to-clipboard';
import base64url from 'base64-url';
import { useConfig } from '../ConfigContext';
import { Box, Text, TextLink, Button } from '../../../../lib/components';

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
          <Button onClick={() => copy(children)}>Copy</Button>
          <Box paddingLeft="small" />
          <TextLink
            target="_blank"
            href={`${playroomUrl}#?code=${base64url.encode(children)}`}
          >
            Playroom
          </TextLink>
        </Box>
      </Fragment>
    </Box>
  );
};
