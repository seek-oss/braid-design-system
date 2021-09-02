import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Box,
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
import source from '../../utils/source.macro';
import Code from '../../../site/src/App/Code/Code';
import { BoxProps } from './Box';
import {
  responsiveProperties,
  unresponsiveProperties,
  pseudoProperties,
  UnresponsiveProperties,
  ResponsiveProperties,
  PseudoProperties,
} from '../../css/atoms/atomicProperties';

type BackgroundDocs = Required<
  Record<NonNullable<BoxProps['background']>, string>
>;
const validateBackgrounds = (backgrounds: BackgroundDocs) => backgrounds;

type BoxShadowDocs = Required<
  Record<NonNullable<BoxProps['boxShadow']>, string>
>;
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
                formAccentDisabled:
                  'Disabled colour for “formAccent” elements.',
                input: 'Used for input fields.',
                inputDisabled: 'Used for input fields when disabled.',
                card: 'Used for card surfaces.',
                selection:
                  'Used for user selections, e.g. selected item in an Autosuggest.',
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
                neutralLight: 'Used for light “neutral” elements.',
              }),
            ).map(([background, description]) => (
              <Columns key={background} space="medium" alignY="center">
                <Column width="content">
                  <Box background="card" borderRadius="large" padding="gutter">
                    <Box
                      background={background as keyof BackgroundDocs}
                      boxShadow={
                        ['card', 'input'].includes(background)
                          ? 'borderStandard'
                          : undefined
                      }
                      borderRadius="large"
                      padding="gutter"
                    />
                  </Box>
                </Column>
                <Column>
                  <Box paddingRight="medium">
                    <Stack space="small">
                      <Text weight="medium">
                        <Box style={{ wordBreak: 'break-all' }}>
                          {background}
                        </Box>
                      </Text>
                      <Text tone="secondary">{description}</Text>
                    </Stack>
                  </Box>
                </Column>
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
                borderStandard: 'Used for neutral element borders.',
                borderStandardInverted:
                  'Used for standard borders on dark backgrounds.',
                borderStandardInvertedLarge:
                  'Used for large standard borders on dark backgrounds.',
                borderField: 'Used for borders around form fields.',
                borderFormHover:
                  'Used for borders around form fields on hover.',
                outlineFocus: 'Used for focus states of interactive elements.',
                borderFormAccent:
                  'Used for borders around prominent interactive elements.',
                borderFormAccentLarge:
                  'Used for large borders around prominent interactive elements.',
                borderBrandAccentLarge:
                  'Used for large borders around branded elements.',
                borderPositive: 'Used for borders around “positive” elements.',
                borderPositiveLight:
                  'Used for borders around “positiveLight” elements.',
                borderCritical: 'Used for borders around “critical” elements.',
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
                    borderRadius="large"
                    padding="gutter"
                  >
                    <Box
                      boxShadow={boxShadow as keyof BoxShadowDocs}
                      borderRadius="large"
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
