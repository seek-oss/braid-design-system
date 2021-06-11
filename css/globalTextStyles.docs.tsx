import dedent from 'dedent';
import React from 'react';
import { globalTextStyles } from '.';
import { Alert, Stack, Strong, Text, TextLink } from '../lib/components';
import source from '../lib/utils/source.macro';
import Code from '../site/src/App/Code/Code';
import { CssDoc } from '../site/src/types';

const docs: CssDoc = {
  usage: (
    <Code>{`import { globalTextStyles } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <>
      <Text>
        A utility to style text within global HTML where Braid components cannot
        be used, e.g. styling strings of uncontrolled HTML.
      </Text>
      <Alert tone="caution">
        <Stack space="large">
          <Text weight="strong">
            This utility should only be used when you have no control over the
            HTML.
          </Text>
          <Text>
            Not controlling the HTML, means Braid cannot manage the white space
            or layout as it typically would. As a result the text styles
            returned <Strong>do&nbsp;not</Strong> trim the surrounding white
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
              styling apis
            </TextLink>
            , e.g. ‘globalStyle’, to create the actual styles.
          </Text>
          <Code>
            {dedent`
              // myComponent.css.ts
              import { style, globalStyle } from '@vanilla-extract/css';
              import { globalTextStyles } from 'braid-design-system/css';

              export const container = style({});

              // Target all <p> elements in the rendered HTML
              export const text = globalStyle(\`${'${container}'} p\`,
                ${
                  source(
                    globalTextStyles({ size: 'standard', weight: 'regular' }),
                  ).code
                }
              );
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
