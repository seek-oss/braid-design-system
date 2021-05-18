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
} from '../../sprinkles/atomicProperties';

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
        All elements rendered via Box are provided with a{' '}
        <TextLink href="https://github.com/seek-oss/braid-design-system/blob/master/lib/reset/reset.treat.ts">
          CSS reset
        </TextLink>{' '}
        to ensure that elements only have styling rules that have been
        explicitly specified.
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
            <TextLink href="https://github.com/JedWatson/classnames">
              Classnames API.
            </TextLink>
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
            <Strong>{"justifyContent={['center', 'flexStart']}"}</Strong>
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
                  justifyContent={['center', 'flexStart']}
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
            <Tiles space="xlarge" columns={[1, 2]}>
              {(Object.keys(
                responsiveProperties,
              ) as Array<ResponsiveProperties>).map((prop) => (
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
              {(Object.keys(
                unresponsiveProperties,
              ) as Array<UnresponsiveProperties>).map((prop) => (
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
          </Stack>,
        ),
    },
    {
      label: 'Responsive padding and margins',
      description: (
        <Text>
          Padding and margins can also differ across screen sizes by providing
          an array of responsive values, e.g.{' '}
          <Strong>{"['small', 'medium', 'large']"}</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Inline space="medium" align="center">
            <Box
              background="formAccentHover"
              borderRadius="standard"
              padding={['small', 'medium', 'large']}
            >
              <Box
                background="formAccent"
                borderRadius="standard"
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
          <Tiles space="large" columns={[1, 1, 2]}>
            {Object.entries(
              validateBackgrounds({
                body:
                  'Used for elements that need to match the body background.',
                brand: 'Used for branding larger areas of the screen.',
                brandAccent: 'Used for hero elements on the screen.',
                brandAccentHover: 'Hover colour for “brandAccent” elements.',
                brandAccentActive: 'Hover colour for “brandAccent” elements.',
                formAccent:
                  'Used for prominent interactive elements, typically within a form.',
                formAccentHover: 'Hover colour for “formAccent” elements.',
                formAccentActive: 'Active colour for “formAccent” elements.',
                formAccentDisabled:
                  'Disabled colour for “formAccent” elements.',
                input: 'Used for input fields.',
                inputDisabled: 'Used for input fields when disabled.',
                card: 'Used for card surfaces.',
                selection:
                  'Used for user selections, e.g. selected item in an Autosuggest.',
                positive: 'Used for heavier “positive” elements.',
                positiveLight: 'Used for lighter “positive” elements.',
                critical: 'Used for heavier “critical” elements.',
                criticalLight: 'Used for lighter “critical” elements.',
                criticalHover: 'Hover colour for “critical” elements.',
                criticalActive: 'Active colour for “critical” elements.',
                caution: 'Used for heavier “caution” elements.',
                cautionLight: 'Used for lighter “caution” elements.',
                info: 'Used for heavier “info” elements.',
                infoLight: 'Used for lighter “info” elements.',
                promote: 'Used for heavier “promote” elements.',
                promoteLight: 'Used for lighter “promote” elements.',
                neutral: 'Used for heavier “neutral” elements.',
                neutralLight: 'Used for lighter “neutral” elements.',
              }),
            ).map(([background, description]) => (
              <Columns key={background} space="medium" alignY="center">
                <Column width="content">
                  <Box
                    background="card"
                    borderRadius="standard"
                    padding="gutter"
                  >
                    <Box
                      background={background as keyof BackgroundDocs}
                      boxShadow={
                        ['card', 'input'].includes(background)
                          ? 'borderStandard'
                          : undefined
                      }
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
          <Tiles space="large" columns={[1, 1, 2]}>
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
                borderCritical: 'Used for borders around “critical” elements.',
                borderCriticalLarge:
                  'Used for large borders around “critical” elements.',
                borderCaution: 'Used for borders around “caution” elements.',
                borderInfo: 'Used for borders around “info” elements.',
                borderPromote: 'Used for borders around “promote” elements.',
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
