import { Box, List, Stack, Strong, Text, TextLink } from 'braid-design-system';

import type { PatternDocs } from '../../../../types';

const lightPalette = [
  '#e60278',
  '#072254',
  '#3e8fe0',
  '#5b2084',
  '#1fa575',
  '#10727f',
  '#a00043',
  '#a04bcb',
  '#1d559d',
  '#ef672a',
  '#838fa5',
  '#d5292a',
  '#5c0202',
  '#08492d',
];

const darkPalette = [
  '#f155ad',
  '#2a71c1',
  '#b0d5f4',
  '#be68e8',
  '#8bdec5',
  '#137d8b',
  '#d6016a',
  '#e1b2f5',
  '#6ab0ea',
  '#fd8849',
  '#ffffff',
  '#fb999a',
  '#dc2c2d',
  '#21a979',
];

const Swatches = ({ colours }: { colours: string[] }) => (
  <Box display="flex" flexWrap="wrap">
    {colours.map((colour) => (
      <Box key={colour} padding="xxsmall">
        <Stack space="xxsmall">
          <Box
            borderRadius="standard"
            style={{ background: colour, width: 48, height: 48 }}
          />
          <Text size="xsmall" tone="secondary">
            {colour}
          </Text>
        </Stack>
      </Box>
    ))}
  </Box>
);

export const docs: PatternDocs = {
  description: (
    <Text>
      How to create consistent, on-brand, and accessible data visualisations
      using a dedicated colour palette.
    </Text>
  ),
  additional: [
    {
      label: 'Summary',
      description: (
        <>
          <List space="large">
            <Text>Updated palette to support NVL colour updates</Text>
            <Text>
              Zero minor issues for 96% of the population in light mode, down
              from 3
            </Text>
            <Text>
              Zero minor issues for 96% of the population in dark mode, down
              from 3
            </Text>
            <Text>
              One major issue for the deuteranopia audience (0.56% of the
              population) in dark mode, down from 4
            </Text>
            <Text>
              24% decrease in minor issues across all eye conditions and modes
            </Text>
            <Text>Palette reduced from 15 to 14 colours</Text>
          </List>
          <Text>
            We have made some adjustments to the data vis palette to align with
            the New Visual Language (NVL) palette, as well as performance
            enhancements including the order of the categorical palette.
          </Text>
        </>
      ),
    },
    {
      label: 'Brand representation',
      description: (
        <>
          <Text>Our data vis palette is founded on the SEEK brand.</Text>
          <Text>
            To improve how we present data visualisations at SEEK, we adjusted
            some colours so there was a “just noticeable difference” across the
            entire palette. These adjustments are based on the SEEK extended
            colour palette and have been specifically curated both to improve
            the data vis experience and to stay true to our brand.
          </Text>
          <Text>
            We continue to adhere to the WCAG 2.1 standard of a 3:1 colour
            contrast ratio when compared to the background colour for light and
            dark modes.
          </Text>
          <Text>
            <Strong>Light mode</Strong>
          </Text>
          <Swatches colours={lightPalette} />
          <Text>
            <Strong>Dark mode</Strong>
          </Text>
          <Swatches colours={darkPalette} />
        </>
      ),
    },
    {
      label: 'NVL colours',
      description: (
        <Text>
          We updated the purple tones for the palette and replaced older values.
          Because we need to support a 3-colour tonal range for blue, this did
          not allow violet to be brought into the data vis palette due to colour
          conflicts. Not incorporating violet also has the added benefit of not
          confusing graphs with interactive elements in product scenarios.
        </Text>
      ),
    },
    {
      label: 'Building blocks',
      description: (
        <Text>
          We continue to support colour sets ranging from 1 to 5 colours,
          however we now offer 5 options for each set. Additionally, there are
          now better expected results as each option shares a consistent
          approach to colour groups.
        </Text>
      ),
    },
    {
      label: 'Accessibility',
      description: (
        <>
          <Text>
            Allowing SEEK data to be viewed easily by people of all abilities
            remains a priority. We tested these colours across no colour
            deficiency, deuteranomaly, protanomaly, protanopia and deuteranopia.
          </Text>
          <Text>
            Our aim was to reduce minor issues for those without colour
            deficiency, which represents 96% of the population. Previously the
            beta version for light and dark mode both had 3 minor issues, which
            have now been reduced to zero issues in both modes.
          </Text>
          <Text>
            Minor conflicts across the 5 tested eye conditions were also
            reduced. For light mode we decreased minor conflicts by 29% and dark
            mode by 18%.
          </Text>
          <Text>
            Major conflicts have also been reduced from 4 to 2 — one each for
            light and dark mode — both of which occur for deuteranopia, which
            affects roughly 1 in 200 people. The two conflicting colours that
            couldn&rsquo;t be resolved are colours that are unlikely to be used
            together.
          </Text>
          <Text>You can inspect the palettes in Viz Palette:</Text>
          <List space="large">
            <Text>
              <TextLink href="https://projects.susielu.com/viz-palette?colors=[%22#e60278%22,%22#072254%22,%22#3e8fe0%22,%22#5b2084%22,%22#1fa575%22,%22#10727f%22,%22#a00043%22,%22#a04bcb%22,%22#1d559d%22,%22#ef672a%22,%22#838fa5%22,%22#d5292a%22,%22#5c0202%22,%22#08492d%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22normal%22">
                Viz Palette — light mode
              </TextLink>
            </Text>
            <Text>
              <TextLink href="https://projects.susielu.com/viz-palette?colors=[%22#f155ad%22,%22#2a71c1%22,%22#b0d5f4%22,%22#be68e8%22,%22#8bdec5%22,%22#137d8b%22,%22#d6016a%22,%22#e1b2f5%22,%22#6ab0ea%22,%22#fd8849%22,%22#ffffff%22,%22#fb999a%22,%22#dc2c2d%22,%22#21a979%22]&backgroundColor=%22#1c2330%22&fontColor=%22black%22&mode=%22normal%22">
                Viz Palette — dark mode
              </TextLink>
            </Text>
          </List>
        </>
      ),
    },
    {
      label: 'Next steps',
      description: (
        <>
          <Text>
            We&rsquo;re looking to define basic colour usage for consistency.
            This will be added to over time as our approach to colour matures.
          </Text>
          <Text>
            If you&rsquo;re looking to create graphs for SEEK, start with the{' '}
            <TextLink href="https://www.figma.com/file/Z11g5WwPtpIbbrsfy7zgaw/Data-Vis-Palette?node-id=1%3A54">
              Data vis palette in Figma
            </TextLink>
            . You&rsquo;ll find help getting started with more on-brand and
            accessible data visualisations. If you have questions or feedback,
            please ask in the{' '}
            <TextLink href="https://seekchat.slack.com/archives/CMBLA5Q1E">
              #braid-design-support
            </TextLink>{' '}
            channel on Slack.
          </Text>
        </>
      ),
    },
  ],
};

export default docs;
