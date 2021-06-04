import dedent from 'dedent';
import React from 'react';
import { Notice, Strong, Text, TextLink } from '../lib/components';
import { breakpoints } from '../lib/themes/vanillaUtils';
import Code from '../site/src/App/Code/Code';
import { CssDoc } from '../site/src/types';

const bps = Object.keys(breakpoints);

const docs: CssDoc = {
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
              <>
                {index === bps.length - 1 ? ' or ' : ''}
                <Strong key={b}>{b}</Strong>
                {index < bps.length - 2 ? ', ' : ''}
              </>
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
            The returned object must be passed through through one of
            vanilla-extract&rsquo;s{' '}
            <TextLink href="https://vanilla-extract.style/documentation/styling-api/">
              styling apis
            </TextLink>
            , e.g. ‘style’, to create the actual styles.
          </Text>
          <Code>
            {dedent`
              // myComponent.css.ts
              import { style } from '@vanilla-extract/css';
              import { vars, responsiveStyle } from 'braid-design-system/css';

              export const root = style(
                responsiveStyle({
                  mobile: { flexBasis: vars.space.small },
                  tablet: { flexBasis: vars.space.medium },
                  desktop: { flexBasis: vars.space.large },
                }),
              );
            `}
          </Code>
        </>
      ),
    },
    {
      label: 'Composing with non-responsive styles',
      description: (
        <>
          <Text>
            Given a style rule object is returned, you can compose it with
            non-responsive styles by spreading the result into the same style
            object.
          </Text>
          <Code>
            {dedent`
              // myComponent.css.ts
              import { style } from '@vanilla-extract/css';
              import { vars, responsiveStyle } from 'braid-design-system/css';

              export const root = style({
                top: '100px',
                ...responsiveStyle({
                  mobile: { left: vars.space.gutter },
                  tablet: { left: vars.space.xlarge },
                  desktop: { left: '10vw' },
                }),
              });
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
