import { Fragment } from 'react';
import Code from 'site/App/Code/Code';
import type { CssDoc } from 'site/types';

import {
  Box,
  Column,
  Columns,
  Divider,
  IconDesktop,
  IconMobile,
  Stack,
  Text,
  TextLink,
} from 'braid-src/lib/components';
import { breakpoints } from 'braid-src/lib/css/breakpoints';

const bps = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;

const iconForBp = {
  mobile: <IconMobile size="small" />,
  tablet: <IconMobile size="large" />,
  desktop: <IconDesktop />,
  wide: <IconDesktop />,
};

const docs: CssDoc = {
  usage: (
    <Code>{`import { breakpoints } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <Text>
      A named set of screen sizes that form the basis of all responsive rules in
      Braid.
    </Text>
  ),
  additional: [
    {
      label: 'Available breakpoints',
      description: (
        <Stack space="xlarge">
          <Text>
            {`Braid provides ${bps.length} breakpoints that are uniform across all
            themes to maintain a consistent set of conditions when designing experiences.`}
          </Text>
          <Box maxWidth="xsmall">
            <Stack space="gutter">
              {bps.map((b, index) => (
                <Fragment key={b}>
                  {index > 0 ? <Divider /> : null}
                  <Columns space="small" alignY="center">
                    <Column width="content">
                      <Box
                        display="flex"
                        justifyContent="center"
                        style={{ width: 30 }}
                      >
                        {iconForBp[b]}
                      </Box>
                    </Column>
                    <Column>
                      <Text baseline={false} weight="strong">
                        {b}
                      </Text>
                    </Column>
                    <Column width="content">
                      <Text>{`${breakpoints[b]}${
                        index !== 0 ? 'px' : ''
                      }`}</Text>
                    </Column>
                  </Columns>
                </Fragment>
              ))}
            </Stack>
          </Box>
          <Text>
            To make responsive styling easier, these breakpoints can be targeted
            either through component props, such as responsive props on{' '}
            <TextLink href="/components/Box">Box</TextLink> or{' '}
            <TextLink href="/components/Stack">Stack</TextLink>, or in
            stylesheets using the{' '}
            <TextLink href="/css/responsiveStyle">responsiveStyle</TextLink>{' '}
            utility.
          </Text>
        </Stack>
      ),
    },
  ],
};

export default docs;
