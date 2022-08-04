import dedent from 'dedent';
import React, { Fragment } from 'react';
import { responsiveStyle, vars, breakpoints } from '.';
import { Notice, Strong, Text, TextLink } from '../lib/components';
import source from '../lib/utils/source.macro';
import Code from '../site/src/App/Code/Code';
import { CssDoc } from '../site/src/types';
import { VanillaMigrationBanner } from './VanillaMigrationBanner';

const bps = Object.keys(breakpoints);

const docs: CssDoc = {
  banner: <VanillaMigrationBanner />,
  usage: (
    <Code>{`import { responsiveStyle } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <Text>
      A utility to make authoring mobile-first responsive styles in{' '}
      <TextLink href="https://vanilla-extract.style">vanilla-extract</TextLink>{' '}
      stylesheets easier.
    </Text>
  ),
  additional: [
    {
      label: 'Authoring styles by breakpoint',
      description: (
        <>
          <Text>
            The <Strong>responsiveStyle</Strong> function is a convenience for
            authoring responsive styling rules. It accepts sets of rules for
            each <TextLink href="/css/breakpoints">breakpoint</TextLink>, e.g.{' '}
            {bps.map((b, index) => (
              <Fragment key={b}>
                {index === bps.length - 1 ? ' or ' : ''}
                <Strong key={b}>{b}</Strong>
                {index < bps.length - 2 ? ', ' : ''}
              </Fragment>
            ))}
            , and returns them wrapped in the corresponding media query.
          </Text>
          <Notice>
            <Text>
              As an optimisation, <Strong>responsiveStyle</Strong> evaluates the
              rules mobile-first and omits any redundant rule sets to reduce the
              overall CSS output.
            </Text>
          </Notice>
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
              import { vars, responsiveStyle } from 'braid-design-system/css';

              export const className = style(${
                source(
                  responsiveStyle({
                    mobile: { flexBasis: vars.space.small },
                    tablet: { flexBasis: vars.space.medium },
                    desktop: { flexBasis: vars.space.large },
                    wide: { flexBasis: vars.space.xlarge },
                  }),
                ).code
              });

              // is equivalent to
              import { style } from '@vanilla-extract/css';
              import { vars, breakpoints } from 'braid-design-system/css';

              export const className = style({
                "flexBasis": vars.space.small,
                "@media": {
                  ${'[`screen and (min-width: ${breakpoints.tablet}px)`]: {'}
                    "flexBasis": vars.space.medium
                  },
                  ${'[`screen and (min-width: ${breakpoints.desktop}px)`]: {'}
                    "flexBasis": vars.space.large
                  },
                  ${'[`screen and (min-width: ${breakpoints.wide}px)`]: {'}
                    "flexBasis": vars.space.xlarge
                  }
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
