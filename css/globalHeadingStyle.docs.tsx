import dedent from 'dedent';
import React from 'react';
import { Alert, Stack, Strong, Text, TextLink } from '../lib/components';
import { globalHeadingStyle } from '../lib/hooks/typography';
import source from '../lib/utils/source.macro';
import Code from '../site/src/App/Code/Code';
import { CssDoc } from '../site/src/types';
import { VanillaMigrationBanner } from './VanillaMigrationBanner';

const docs: CssDoc = {
  banner: <VanillaMigrationBanner />,
  usage: (
    <Code>{`import { globalHeadingStyle } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <>
      <Text>
        A utility to style headings within global HTML where Braid components
        cannot be used, e.g. styling strings of foreign markup.
      </Text>
      <Alert tone="caution">
        <Stack space="large">
          <Text weight="strong">
            This utility should only be used when you have no control over the
            HTML.
          </Text>
          <Text>
            Not controlling the HTML means Braid cannot manage the white space
            or layout as it typically would. As a result the heading style
            returned <Strong>does&nbsp;not</Strong> trim the surrounding white
            space.
          </Text>
        </Stack>
      </Alert>
    </>
  ),
  additional: [
    {
      label: 'Styling global HTML',
      description: (
        <>
          <Text>
            Returns a{' '}
            <TextLink href="https://vanilla-extract.style">
              vanilla-extract
            </TextLink>{' '}
            compatible object that needs to be passed through one of
            vanilla-extract&rsquo;s{' '}
            <TextLink href="https://vanilla-extract.style/documentation/styling-api/">
              styling APIs
            </TextLink>{' '}
            (e.g. ‘globalStyle’) to create the actual styles.
          </Text>
          <Code>
            {dedent`
              // styles.css.ts
              import { style, globalStyle } from '@vanilla-extract/css';
              import { globalHeadingStyle } from 'braid-design-system/css';

              export const root = style({});

              // Target all <h2> elements within the root class
              globalStyle(\`${'${root}'} h2\`,
                ${source(globalHeadingStyle({ level: '2' })).code}
              );
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
