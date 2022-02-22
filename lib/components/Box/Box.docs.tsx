import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Text,
  TextLink,
  Stack,
  Inline,
  Tiles,
  Columns,
  Column,
  Strong,
  Alert,
} from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from './Box';
import type { SimpleBackground } from './Box';
import source from '../../utils/source.macro';
import Code from '../../../site/src/App/Code/Code';
import {
  responsiveProperties,
  unresponsiveProperties,
  pseudoProperties,
  UnresponsiveProperties,
  ResponsiveProperties,
  PseudoProperties,
  BoxShadow,
} from '../../css/atoms/atomicProperties';
import { ThemedExample } from '../../../site/src/App/ThemeSetting';

type BackgroundDocs = Required<Record<SimpleBackground, string>>;
const validateBackgrounds = (backgrounds: BackgroundDocs) => backgrounds;

type BoxShadowDocs = Required<Record<BoxShadow, string>>;
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

const docs: ComponentDocs = {
  category: 'Layout',
  description: (
    <>
      <Text>
        Box is the lowest-level component for binding theme-based styles to an
        individual element on the screen. Internally, all Braid components are
        made up of Boxes.
      </Text>
      <Text>
        All elements rendered via Box are provided with a CSS reset to ensure
        that elements only have styling rules that have been explicitly
        specified.
      </Text>
    </>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Semantic elements',
      description: (
        <>
          <Text>
            By default, Box renders a <Strong>div</Strong> element. You can
            customise this via the <Strong>component</Strong> prop. Non-Braid
            props will also be forwarded to the underlying element.
          </Text>
          <Code playroom={false}>
            {
              source(
                <Box component="span" aria-hidden>
                  ...
                </Box>,
              ).code
            }
          </Code>
        </>
      ),
    },
    {
      label: 'Dynamic CSS classes',
      description: (
        <>
          <Text>
            The <Strong>className</Strong> prop supports the full{' '}
            <TextLink href="https://github.com/lukeed/clsx">clsx API.</TextLink>
          </Text>
          <Code playroom={false}>
            {(() => {
              const styles = {
                firstClass: null,
                secondClass: null,
                thirdClass: null,
              };

              return source(
                <Box
                  className={[
                    styles.firstClass,
                    styles.secondClass,
                    styles.thirdClass,
                  ]}
                >
                  ...
                </Box>,
              ).code;
            })()}
          </Code>
        </>
      ),
    },
    {
      label: 'CSS utilities',
      description: (
        <>
          <Text>
            Box provides a suite of common CSS utility props. Styles that
            regularly differ across screen sizes can also be expressed as
            responsive props, e.g.{' '}
            <Strong>
              {"justifyContent={{ mobile: 'center', tablet: 'flexStart' }}"}
            </Strong>
          </Text>
          <Text>
            These utilities are recommended where possible to reduce the amount
            of custom CSS in your application.
          </Text>
          <Code playroom={false}>
            {
              source(
                <Box
                  display="flex"
                  justifyContent={{ mobile: 'center', tablet: 'flexStart' }}
                  position="absolute"
                  top={0}
                  left={0}
                  width="full"
                  height="full"
                >
                  ...
                </Box>,
              ).code
            }
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
            {
              source(
                <Box paddingX="gutter" paddingY="large">
                  ...
                </Box>,
              ).code
            }
          </Code>
        </>
      ),
      Example: () =>
        source(
          <Stack space="gutter" align="center">
            <Inline space="gutter" align="center" alignY="center">
              <Box
                background="formAccentHover"
                borderRadius="large"
                padding="medium"
              >
                <Box
                  background="formAccent"
                  borderRadius="large"
                  padding="medium"
                >
                  <Text>padding</Text>
                </Box>
              </Box>
              <Inline space="gutter" align="center" alignY="center">
                <Box
                  background="formAccentHover"
                  borderRadius="large"
                  paddingX="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
                    padding="medium"
                  >
                    <Text>paddingX</Text>
                  </Box>
                </Box>
                <Box
                  background="formAccentHover"
                  borderRadius="large"
                  paddingY="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
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
                  borderRadius="large"
                  paddingTop="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
                    padding="medium"
                  >
                    <Text>paddingTop</Text>
                  </Box>
                </Box>
                <Box
                  background="formAccentHover"
                  borderRadius="large"
                  paddingRight="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
                    padding="medium"
                  >
                    <Text>paddingRight</Text>
                  </Box>
                </Box>
              </Inline>
              <Inline space="gutter" align="center" alignY="center">
                <Box
                  background="formAccentHover"
                  borderRadius="large"
                  paddingBottom="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
                    padding="medium"
                  >
                    <Text>paddingBottom</Text>
                  </Box>
                </Box>
                <Box
                  background="formAccentHover"
                  borderRadius="large"
                  paddingLeft="medium"
                >
                  <Box
                    background="formAccent"
                    borderRadius="large"
                    padding="medium"
                  >
                    <Text>paddingLeft</Text>
                  </Box>
                </Box>
              </Inline>
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Responsive padding and margins',
      description: (
        <Text>
          Padding and margins can also differ across screen sizes by providing
          responsive values, e.g.{' '}
          <Strong>
            {
              "padding={{ mobile: 'small', tablet: 'medium', desktop: 'large', wide: 'xlarge' }}"
            }
          </Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" align="center">
            <Box
              background="formAccentHover"
              borderRadius="large"
              padding={{
                mobile: 'small',
                tablet: 'medium',
                desktop: 'large',
                wide: 'xlarge',
              }}
            >
              <Box
                background="formAccent"
                borderRadius="large"
                padding="medium"
              >
                <Text>Responsive padding</Text>
              </Box>
            </Box>
          </Inline>,
        ),
    },
    {
      label: 'Backgrounds',
      description: (
        <>
          <Text>
            Box provides a series of <Strong>semantic</Strong> backgrounds,
            meaning that they are named based on their desired usage rather than
            what they happen to look like. This is what allows us to change
            colours in radically different ways across our suite of themes.
          </Text>
          <Code playroom={false}>
            {source(<Box background="brand">...</Box>).code}
          </Code>
          <Text>
            When a <TextLink href="/components/Text">Text</TextLink> component
            is placed on a dark background, the foreground colour either inverts
            or lightens based on the{' '}
            <TextLink href="/components/Text#contrast">
              contrast rules of Text.
            </TextLink>
          </Text>
          <Text>
            When using custom backgrounds or images, this can no longer work by
            default. However, you can opt back into this behaviour by setting
            the <Strong>background</Strong> to either{' '}
            <Strong>customLight</Strong> or <Strong>customDark</Strong>.
          </Text>
          <Stack space="xxsmall">
            <ThemedExample background="body">
              <Stack space="large">
                <Box
                  padding="medium"
                  background="customDark"
                  style={{
                    backgroundColor: '#3d0080',
                  }}
                >
                  <Text>Text on custom dark background</Text>
                </Box>
                <Box
                  padding="medium"
                  background="customLight"
                  style={{
                    backgroundColor: '#c8cfff',
                  }}
                >
                  <Text>Text on custom light background</Text>
                </Box>
              </Stack>
            </ThemedExample>
            <Code collapsedByDefault>
              {
                source(
                  <Stack space="large">
                    <Box
                      padding="medium"
                      background="customDark"
                      style={{
                        backgroundColor: '#3d0080',
                      }}
                    >
                      <Text>Text on custom dark background</Text>
                    </Box>
                    <Box
                      padding="medium"
                      background="customLight"
                      style={{
                        backgroundColor: '#c8cfff',
                      }}
                    >
                      <Text>Text on custom light background</Text>
                    </Box>
                  </Stack>,
                ).code
              }
            </Code>
          </Stack>
          <Alert tone="caution">
            <Text>
              These background colours are likely to change over time, so it’s
              important that you only use them within the semantic context they
              were designed for, e.g. only using the “selection” colour for
              actual user selections. If you choose colours based solely on
              their appearance, your application’s colours may change in
              unexpected ways when upgrading Braid.
            </Text>
          </Alert>
        </>
      ),
      Example: () => {
        const { code, value } = source(
          <Tiles space="large" columns={{ mobile: 1, desktop: 2 }}>
            {Object.entries(
              validateBackgrounds({
                body: 'Used for elements that need to match the body background.',
                // TODO: COLORMODE RELEASE
                // bodyDark:
                //   'Used for elements that need to match the body background in dark context.',
                brand: 'Used for branding larger areas of the screen.',
                brandAccent: 'Used for hero elements on the screen.',
                brandAccentHover: 'Hover colour for “brandAccent” elements.',
                brandAccentActive: 'Active colour for “brandAccent” elements.',
                brandAccentSoft: 'Used for soft “brandAccent” elements',
                brandAccentSoftActive:
                  'Active colour for “brandAccentSoft” elements.',
                brandAccentSoftHover:
                  'Hover colour for brandAccentSoft” elements.',
                formAccent:
                  'Used for prominent interactive elements, typically within a form.',
                formAccentHover: 'Hover colour for “formAccent” elements.',
                formAccentActive: 'Active colour for “formAccent” elements.',
                formAccentSoft: 'Used for soft “formAccent” elements',
                formAccentSoftActive:
                  'Active colour for “formAccentSoft” elements.',
                formAccentSoftHover:
                  'Hover colour for formAccentSoft” elements.',
                positive: 'Used for heavier “positive” elements.',
                positiveLight: 'Used for light “positive” elements.',
                critical: 'Used for heavier “critical” elements.',
                criticalHover: 'Hover colour for “critical” elements.',
                criticalActive: 'Active colour for “critical” elements.',
                criticalLight: 'Used for light “critical” elements.',
                criticalSoft: 'Used for soft “critical” elements',
                criticalSoftActive:
                  'Active colour for “criticalSoft” elements.',
                criticalSoftHover: 'Hover colour for criticalSoft” elements.',
                caution: 'Used for heavier “caution” elements.',
                cautionLight: 'Used for light “caution” elements.',
                info: 'Used for heavier “info” elements.',
                infoLight: 'Used for light “info” elements.',
                promote: 'Used for heavier “promote” elements.',
                promoteLight: 'Used for light “promote” elements.',
                neutral: 'Used for heavier “neutral” elements.',
                neutralActive: 'Active colour for "neutral" elements',
                neutralHover: 'Hover colour for "neutral" elements',
                neutralLight: 'Used for light “neutral” elements.',
                neutralSoft: 'Used for soft “neutral” elements',
                neutralSoftActive: 'Active colour for "neutralSoft" elements',
                neutralSoftHover: 'Hover colour for "neutralSoft" elements',
                surface: 'Used for surfaces that sit on top of body elements',
                // TODO: COLORMODE RELEASE
                // surfaceDark:
                //   'Used for surfaces that sit on top of body elements in a dark context',
              }),
            ).map(([background, description]) => (
              <Columns
                key={background}
                space="medium"
                alignY={{ tablet: 'center' }}
              >
                <Column width="content">
                  <Box
                    background="surface"
                    borderRadius="large"
                    padding={{ mobile: 'small', tablet: 'gutter' }}
                  >
                    <Box
                      background={{
                        lightMode: background as keyof BackgroundDocs,
                        darkMode: background as keyof BackgroundDocs,
                      }}
                      boxShadow={
                        (
                          {
                            surface: { lightMode: 'borderNeutralLight' },
                            surfaceDark: { darkMode: 'borderNeutral' },
                          } as const
                        )[background]
                      }
                      borderRadius="large"
                      padding={{ mobile: 'medium', tablet: 'gutter' }}
                    />
                  </Box>
                </Column>
                <Stack space="small">
                  <Text weight="medium">
                    <Box style={{ wordBreak: 'break-all' }}>{background}</Box>
                  </Text>
                  <Text tone="secondary">{description}</Text>
                </Stack>
              </Columns>
            ))}
          </Tiles>,
        );

        return {
          code: code
            .replace('validateBackgrounds', '')
            .replace(' as keyof BackgroundDocs', ''),
          value,
        };
      },
    },
    {
      label: 'Shadows, borders and outlines',
      description: (
        <>
          <Text>
            Box provides a series of <Strong>boxShadow</Strong> values that
            handle a wide variety of use cases. Note that box shadows are also
            used for outlines and borders so that their presence doesn’t alter
            the dimensions of the element.
          </Text>
          <Code playroom={false}>
            {source(<Box boxShadow="large">...</Box>).code}
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
        </>
      ),
      Example: () => {
        const { code, value } = source(
          <Tiles space="large" columns={{ mobile: 1, desktop: 2 }}>
            {Object.entries(
              validateBoxShadows({
                small: 'Used for small shadows.',
                medium: 'Used for medium shadows.',
                large: 'Used for large shadows.',
                borderNeutral: 'Used for neutral element borders.',
                borderNeutralLarge: 'Used for large neutral element borders.',
                borderNeutralInverted:
                  'Used for neutral borders on dark backgrounds.',
                borderNeutralInvertedLarge:
                  'Used for large neutral borders on dark backgrounds.',
                borderNeutralLight: 'Used for light neutral element borders.',
                borderField: 'Used for borders around form fields.',
                outlineFocus: 'Used for focus states of interactive elements.',
                borderFormAccent:
                  'Used for borders around prominent interactive elements.',
                borderFormAccentLarge:
                  'Used for large borders around prominent interactive elements.',
                borderFormAccentLight:
                  'Used for borders around prominent interactive elements in a dark context.',
                borderFormAccentLightLarge:
                  'Used for large borders around prominent interactive elements in a dark context.',
                borderBrandAccentLarge:
                  'Used for large borders around branded elements.',
                borderBrandAccentLightLarge:
                  'Used for large borders around branded elements in a dark context.',
                borderPositive: 'Used for borders around “positive” elements.',
                borderPositiveLight:
                  'Used for borders around “positiveLight” elements.',
                borderCritical: 'Used for borders around “critical” elements.',
                borderCriticalLarge:
                  'Used for large borders around “critical” elements.',
                borderCriticalLight:
                  'Used for borders around “criticalLight” elements.',
                borderCriticalLightLarge:
                  'Used for large borders around “criticalLight” elements.',
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
              <Columns
                key={boxShadow}
                space="medium"
                alignY={{ tablet: 'center' }}
              >
                <Column width="content">
                  <Box
                    background={{
                      lightMode: boxShadow.includes('Inverted')
                        ? 'neutral'
                        : 'surface',
                      darkMode: /^border|outline/.test(boxShadow)
                        ? 'surfaceDark'
                        : 'surface',
                    }}
                    borderRadius="large"
                    padding={{ mobile: 'small', tablet: 'gutter' }}
                  >
                    <Box
                      boxShadow={{
                        lightMode: boxShadow as keyof BoxShadowDocs,
                        darkMode: boxShadow as keyof BoxShadowDocs,
                      }}
                      borderRadius="large"
                      padding={{ mobile: 'medium', tablet: 'gutter' }}
                    />
                  </Box>
                </Column>
                <Stack space="small">
                  <Text weight="medium">
                    <Box style={{ wordBreak: 'break-all' }}>{boxShadow}</Box>
                  </Text>
                  <Text tone="secondary">{description}</Text>
                </Stack>
              </Columns>
            ))}
          </Tiles>,
        );

        return {
          code: code
            .replace('validateBoxShadows', '')
            .replace(' as keyof BoxShadowDocs', ''),
          value,
        };
      },
    },
  ],
};

export default docs;
