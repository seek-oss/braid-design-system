import dedent from 'dedent';
import React from 'react';
import { colorModeStyle, vars } from '.';
import { Strong, Text, TextLink } from '../lib/components';
import source from '../lib/utils/source.macro';
import Code from '../site/src/App/Code/Code';
import { CssDoc } from '../site/src/types';

const docs: CssDoc = {
  usage: (
    <Code>{`import { colorModeStyle } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <Text>
      A utility to make authoring color mode specific styles in{' '}
      <TextLink href="https://vanilla-extract.style">vanilla-extract</TextLink>{' '}
      stylesheets easier.
    </Text>
  ),
  additional: [
    {
      label: 'Authoring styles by color mode',
      description: (
        <>
          <Text>
            The <Strong>colorModeStyle</Strong> function is a convenience for
            authoring color mode specific styling rules. It accepts sets of
            rules for each mode, e.g. <Strong>lightMode</Strong> and{' '}
            <Strong>darkMode</Strong>, and returns them scoped to the
            corresponding CSS selector.
          </Text>
          <Text>
            The returned object must be passed through one of
            vanilla-extract&rsquo;s{' '}
            <TextLink href="https://vanilla-extract.style/documentation/styling-api/">
              styling apis
            </TextLink>
            , e.g. <Strong>style</Strong>, to create the actual styles.
          </Text>
          <Code>
            {dedent`
              // styles.css.ts
              import { style } from '@vanilla-extract/css';
              import { vars, colorModeStyle } from 'braid-design-system/css';

              export const className = style(${
                source(
                  colorModeStyle({
                    lightMode: { borderColor: vars.borderColor.positiveLight },
                    darkMode: { borderColor: vars.borderColor.neutral },
                  }),
                ).code
              });

              // is equivalent to
              import { style } from '@vanilla-extract/css';
              import { vars, breakpoints } from 'braid-design-system/css';

              // The dark mode class name is not public api,
              // this is a placeholder class name for the example:
              const darkModeClass = "🌙";

              export const className = style({
                selectors: {
                  ${'[`html:not(${darkModeClass}) &`]: {'}
                    borderColor: vars.borderColor.positiveLight
                  },
                  ${'[`html${darkModeClass} &`]: {'}
                    borderColor: vars.borderColor.neutral
                  },
                }
              });
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
