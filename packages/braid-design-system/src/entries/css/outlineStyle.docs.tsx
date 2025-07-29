import dedent from 'dedent';
import Code from 'site/App/Code/Code';
import type { CssDoc } from 'site/types';

import {
  Alert,
  Notice,
  Stack,
  Strong,
  Text,
  TextLink,
} from 'braid-src/lib/components';

const docs: CssDoc = {
  usage: (
    <Code>{`import { outlineStyle } from 'braid-design-system/css';`}</Code>
  ),
  description: (
    <>
      <Text>
        A utility to apply the focus outline to an element via a selector,
        typically the focus of another element.
      </Text>
      <Alert tone="caution">
        <Stack space="large">
          <Text weight="strong">
            This utility should only be used when applying focus styles
            indirectly to an element.
          </Text>
          <Text>
            If you want to apply focus styles directly to your custom focusable
            element, use the <Strong>focus</Strong> outline via{' '}
            <TextLink href="/css/atoms">atoms</TextLink> or{' '}
            <TextLink href="/components/Box">Box</TextLink> props.
          </Text>
        </Stack>
      </Alert>
    </>
  ),
  additional: [
    {
      label: 'Indirectly styling focus outlines',
      description: (
        <>
          <Text>
            Requires a selector string that targets the element in which the
            visual focus style should be applied to. Returns a{' '}
            <TextLink href="https://vanilla-extract.style/documentation/styling">
              Vanilla Extract
            </TextLink>{' '}
            style object containing the designed focus outline.
          </Text>
          <Notice>
            <Text>
              The selector will vary depending on the DOM structure, and the
              relationship between the focusable and focus styled elements.{' '}
              Refer to{' '}
              <TextLink href="https://vanilla-extract.style/documentation/styling/#complex-selectors">
                Complex Selectors
              </TextLink>{' '}
              for syntax guidance.
            </Text>
          </Notice>
          <Code playroom={false}>
            {dedent`
              // stylesheet.css.ts
              export const visualFocus = style([
                outlineStyle(/* selector string */),
              ]);
            `}
          </Code>
        </>
      ),
    },
    {
      label: 'Basic example',
      description: (
        <>
          <Text>
            Returns a{' '}
            <TextLink href="https://vanilla-extract.style">
              vanilla-extract
            </TextLink>{' '}
            compatible object that needs to be passed through one of Vanilla
            Extract&rsquo;s{' '}
            <TextLink href="https://vanilla-extract.style/documentation/styling-api/">
              styling APIs
            </TextLink>{' '}
            (e.g. ‘globalStyle’) to create the actual styles.
          </Text>
          <Code>
            {dedent`
              // CustomFormComponent.tsx
              import { Box } from 'braid-design-system';
              import * as styles from './CustomFormComponent.css.ts';
              
              export const CustomFormComponent = () => (
                <Box>
                  <Box component="input" type="range" className={styles.hiddenField} />
                  <Box className={styles.thumb} />
                </Box>
              );
            `}
          </Code>
          <Code>
            {dedent`
              // CustomFormComponent.css.ts
              import { style } from '@vanilla-extract/css';
              import { outlineStyle } from 'braid-design-system/css';

              export const hiddenField = style({
                outline: 'none', // Remove default outline
              });

              export const thumb = style([
                // { custom thumb styles },
                outlineStyle(\`\$\{hiddenField}:focus-visible ~ &\`),
              ]);
            `}
          </Code>
        </>
      ),
    },
    {
      label: 'Usage with transitions',
      description: (
        <>
          <Text>
            The <Strong>outlineStyle</Strong> utility applies a transition to
            the outline.
          </Text>
          <Text>
            To transition additional properties, combine them with the{' '}
            <Strong>outline transition</Strong>.
          </Text>
          <Code>
            {dedent`
              // stylesheet.css.ts
              import { style } from '@vanilla-extract/css';
              import { outlineStyle } from 'braid-design-system/css';
              import { vars } from '../../themes/vars.css';

              const {
                transition: outlineTransition,
                ...restOutlineStyles
               } = outlineStyle(/* selector string */);
                
              export const visualFocus = style([
                {
                  transition: [vars.transition.fast, outlineTransition].join(', '),
                },
                restOutlineStyles,
              ]);
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
