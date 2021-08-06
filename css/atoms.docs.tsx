import dedent from 'dedent';
import React from 'react';
import {
  responsiveProperties,
  ResponsiveProperties,
  pseudoProperties,
  PseudoProperties,
  unresponsiveProperties,
  UnresponsiveProperties,
} from '../lib/css/atoms/atomicProperties';
import { Atoms, atoms } from '../lib/css/atoms/atoms';
import {
  Box,
  Stack,
  Columns,
  Column,
  Tiles,
  Inline,
  Text,
  TextLink,
  Strong,
  Alert,
} from '../lib/components';
import source from '../lib/utils/source.macro';
import Code from '../site/src/App/Code/Code';
import { ThemedExample } from '../site/src/App/ThemeSetting';
import { CssDoc } from '../site/src/types';
import { VanillaMigrationBanner } from './VanillaMigrationBanner';

type BoxShadowDocs = Required<Record<NonNullable<Atoms['boxShadow']>, string>>;
const validateBoxShadows = (boxShadows: BoxShadowDocs) => boxShadows;

interface AtomicPropertyProps {
  name: string;
  modifier?: string;
  values: Array<string>;
}
function AtomicProperty({ name, modifier, values }: AtomicPropertyProps) {
  return (
    <Stack space="medium">
      <Text weight="strong">
        {name}
        {modifier ? ` (${modifier})` : ''}
      </Text>
      <Text tone="secondary">
        {values
          .sort()
          .map((key) => (!/[0-9]/.test(key) ? `"${key}"` : key))
          .join(', ')}
      </Text>
    </Stack>
  );
}

const docs: CssDoc = {
  banner: <VanillaMigrationBanner />,
  usage: <Code>{`import { atoms } from 'braid-design-system/css';`}</Code>,
  description: (
    <Text>
      The <Strong>atoms</Strong> function provides low-level access to Braid’s
      reusable atomic classes within your{' '}
      <TextLink href="https://vanilla-extract.style">
        vanilla&#8209;extract
      </TextLink>
      &nbsp;stylesheets.
    </Text>
  ),
  additional: [
    {
      label: 'CSS utilities',
      description: (
        <>
          <Text>
            The atoms function provides a suite of common CSS utility props.
            Styles that regularly differ across screen sizes can also be
            expressed as responsive values, e.g.{' '}
            <Strong>
              {
                "atoms({ justifyContent: { mobile: 'center', tablet: 'flexStart' }})"
              }
            </Strong>
          </Text>
          <Text>
            These utilities are recommended where possible to reduce the amount
            of custom CSS in your application.
          </Text>
          <Code playroom={false}>
            {dedent`
              // styles.css.ts
              import { atoms } from 'braid-design-system/css';

              export const className = ${
                source(
                  atoms({
                    display: 'flex',
                    justifyContent: {
                      mobile: 'center',
                      tablet: 'flexStart',
                    },
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 'full',
                    height: 'full',
                  }),
                ).code
              };
            `}
          </Code>
          <Box paddingBottom="large">
            <Tiles space="xlarge" columns={{ mobile: 1, tablet: 2 }}>
              {(
                Object.keys(responsiveProperties) as Array<ResponsiveProperties>
              ).map((prop) => (
                <AtomicProperty
                  key={prop}
                  modifier="Responsive"
                  name={prop}
                  values={Object.keys(responsiveProperties[prop])}
                />
              ))}
              {(Object.keys(pseudoProperties) as Array<PseudoProperties>).map(
                (prop) => (
                  <AtomicProperty
                    key={prop}
                    modifier="Pseudo"
                    name={prop}
                    values={Object.keys(pseudoProperties[prop])}
                  />
                ),
              )}
              {(
                Object.keys(
                  unresponsiveProperties,
                ) as Array<UnresponsiveProperties>
              ).map((prop) => (
                <AtomicProperty
                  key={prop}
                  name={prop}
                  values={Object.keys(unresponsiveProperties[prop])}
                />
              ))}
            </Tiles>
          </Box>
        </>
      ),
    },
    {
      label: 'Padding and margins',
      description: (
        <>
          <Text>
            Padding can be applied in all directions using our{' '}
            <TextLink href="/foundations/layout#spacing">space scale.</TextLink>{' '}
            Margin is also supported with the same syntax, but padding is
            recommended over margin in most cases to avoid issues with{' '}
            <TextLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">
              collapsing margins.
            </TextLink>
          </Text>
          <Code playroom={false}>
            {dedent`
              // styles.css.ts
              import { atoms } from 'braid-design-system/css';

              export const className = ${
                source(atoms({ paddingX: 'gutter', paddingY: 'large' })).code
              };
            `}
          </Code>
          <ThemedExample background="body">
            <Stack space="gutter" align="center">
              <Inline space="gutter" align="center" alignY="center">
                <Box
                  background="formAccentHover"
                  borderRadius="standard"
                  padding="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="standard"
                    padding="medium"
                  >
                    <Text>padding</Text>
                  </Box>
                </Box>
                <Inline space="gutter" align="center" alignY="center">
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingX="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingX</Text>
                    </Box>
                  </Box>
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingY="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingY</Text>
                    </Box>
                  </Box>
                </Inline>
              </Inline>
              <Inline
                space="gutter"
                collapseBelow="desktop"
                align="center"
                alignY="center"
              >
                <Inline space="gutter" align="center" alignY="center">
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingTop="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingTop</Text>
                    </Box>
                  </Box>
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingRight="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingRight</Text>
                    </Box>
                  </Box>
                </Inline>
                <Inline space="gutter" align="center" alignY="center">
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingBottom="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingBottom</Text>
                    </Box>
                  </Box>
                  <Box
                    background="formAccentHover"
                    borderRadius="standard"
                    paddingLeft="medium"
                  >
                    <Box
                      background="formAccent"
                      borderRadius="standard"
                      padding="medium"
                    >
                      <Text>paddingLeft</Text>
                    </Box>
                  </Box>
                </Inline>
              </Inline>
            </Stack>
          </ThemedExample>
        </>
      ),
    },
    {
      label: 'Responsive padding and margins',
      description: (
        <>
          <Text>
            Padding and margins can also differ across screen sizes by providing
            responsive values, e.g.{' '}
            <Strong>
              {
                "padding={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}"
              }
            </Strong>
          </Text>
          <Code playroom={false}>
            {dedent`
              // styles.css.ts
              import { atoms } from 'braid-design-system/css';

              export const className = ${
                source(
                  atoms({
                    padding: {
                      mobile: 'small',
                      tablet: 'medium',
                      desktop: 'large',
                      wide: 'xlarge',
                    },
                  }),
                ).code
              };
            `}
          </Code>
          <ThemedExample background="body">
            <Inline space="medium" align="center">
              <Box
                background="formAccentHover"
                borderRadius="standard"
                padding={{
                  mobile: 'small',
                  tablet: 'medium',
                  desktop: 'large',
                  wide: 'xlarge',
                }}
              >
                <Box
                  background="formAccent"
                  borderRadius="standard"
                  padding="medium"
                >
                  <Text>Responsive padding</Text>
                </Box>
              </Box>
            </Inline>
          </ThemedExample>
        </>
      ),
    },
    {
      label: 'Shadows, borders and outlines',
      description: (
        <>
          <Text>
            The atoms function provides a series of <Strong>boxShadow</Strong>{' '}
            values that handle a wide variety of use cases. Note that box
            shadows are also used for outlines and borders so that their
            presence doesn’t alter the dimensions of the element.
          </Text>
          <Code playroom={false}>
            {dedent`
              // styles.css.ts
              import { atoms } from 'braid-design-system/css';

              export const className = ${
                source(
                  atoms({
                    boxShadow: 'large',
                  }),
                ).code
              };
            `}
          </Code>
          <Alert tone="caution">
            <Text>
              These box shadows are likely to change over time, so it’s
              important that you only use them within the semantic context they
              were designed for, e.g. only using “borderField” for actual field
              borders. If you choose semantic box shadows based solely on their
              appearance, your application’s colours may change in unexpected
              ways when upgrading Braid.
            </Text>
          </Alert>
          <ThemedExample background="body">
            <Tiles space="large" columns={{ mobile: 1, desktop: 2 }}>
              {Object.entries(
                validateBoxShadows({
                  small: 'Used for small shadows.',
                  medium: 'Used for medium shadows.',
                  large: 'Used for large shadows.',
                  borderStandard: 'Used for neutral element borders.',
                  borderStandardInverted:
                    'Used for standard borders on dark backgrounds.',
                  borderStandardInvertedLarge:
                    'Used for large standard borders on dark backgrounds.',
                  borderField: 'Used for borders around form fields.',
                  borderFormHover:
                    'Used for borders around form fields on hover.',
                  outlineFocus:
                    'Used for focus states of interactive elements.',
                  borderFormAccent:
                    'Used for borders around prominent interactive elements.',
                  borderFormAccentLarge:
                    'Used for large borders around prominent interactive elements.',
                  borderBrandAccentLarge:
                    'Used for large borders around branded elements.',
                  borderPositive:
                    'Used for borders around “positive” elements.',
                  borderPositiveLight:
                    'Used for borders around “positiveLight” elements.',
                  borderCritical:
                    'Used for borders around “critical” elements.',
                  borderCriticalLarge:
                    'Used for large borders around “critical” elements.',
                  borderCriticalLight:
                    'Used for borders around “criticalLight” elements.',
                  borderCaution: 'Used for borders around “caution” elements.',
                  borderCautionLight:
                    'Used for borders around “cautionLight” elements.',
                  borderInfo: 'Used for borders around “info” elements.',
                  borderInfoLight:
                    'Used for borders around “infoLight” elements.',
                  borderPromote: 'Used for borders around “promote” elements.',
                  borderPromoteLight:
                    'Used for borders around “promoteLight” elements.',
                }),
              ).map(([boxShadow, description]) => (
                <Columns key={boxShadow} space="medium" alignY="center">
                  <Column width="content">
                    <Box
                      background={
                        boxShadow.includes('Inverted') ? 'brand' : 'card'
                      }
                      borderRadius="standard"
                      padding="gutter"
                    >
                      <Box
                        boxShadow={boxShadow as keyof BoxShadowDocs}
                        borderRadius="standard"
                        padding="gutter"
                      />
                    </Box>
                  </Column>
                  <Column>
                    <Box paddingRight="medium">
                      <Stack space="small">
                        <Text weight="medium">
                          <Box style={{ wordBreak: 'break-all' }}>
                            {boxShadow}
                          </Box>
                        </Text>
                        <Text tone="secondary">{description}</Text>
                      </Stack>
                    </Box>
                  </Column>
                </Columns>
              ))}
            </Tiles>
          </ThemedExample>
        </>
      ),
    },
    {
      label: 'CSS reset',
      description: (
        <>
          <Text>
            Braid uses locally-scoped classes to manage CSS resets. This is
            managed automatically when using{' '}
            <TextLink href="/components/Box">Box</TextLink> elements, but if
            you’re targeting native non-Braid elements, you can manually apply a
            CSS reset via the <Strong>reset</Strong> option which accepts a
            native element type.
          </Text>
          <Code playroom={false}>
            {dedent`
              // styles.css.ts
              import { atoms } from 'braid-design-system/css';

              export const className = ${
                source(
                  atoms({
                    reset: 'span',
                  }),
                ).code
              };
            `}
          </Code>
        </>
      ),
    },
  ],
};

export default docs;
