import React, { Fragment, ReactNode } from 'react';
import { titleCase } from 'title-case';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Text, Stack, Column, Columns, IconPositive } from '../';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from '../Box/Box';
import { text as textSizes } from '../../hooks/typography/typography.css';
import { backgrounds, textAlignments } from '../../utils/docsHelpers';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    { label: 'Standard Text', Example: () => <Text>Standard text.</Text> },
    {
      label: 'Small Text',
      Example: () => <Text size="small">Small text.</Text>,
    },
    {
      label: 'Large Text',
      Example: () => <Text size="large">Large text.</Text>,
    },
    {
      label: 'Truncating long text',
      Example: () => (
        <Box style={{ width: 90 }}>
          <Text truncate>Long piece of text</Text>
        </Box>
      ),
    },
    {
      label: 'Text on dark background',
      background: 'neutral',
      Container,
      Example: () => (
        <Stack space="small">
          <Text>Neutral text</Text>
          <Text tone="secondary">Secondary text</Text>
          <Text tone="critical">Critical text</Text>
          <Text tone="caution">Caution text</Text>
          <Text tone="positive">Positive text</Text>
          <Text tone="info">Info text</Text>
          <Text tone="promote">Promote text</Text>
          <Text tone="formAccent">FormAccent text</Text>
          <Text tone="brandAccent">BrandAccent text</Text>
        </Stack>
      ),
    },
    {
      label: 'Text Alignment',
      Container,
      Example: () => (
        <Stack space="medium">
          {textAlignments.map((alignment) => (
            <Text align={alignment} key={alignment}>
              {titleCase(alignment)}
            </Text>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Text Alignment (responsive)',
      Container,
      Example: () => (
        <Text align={['right', 'center', 'left']}>
          Right aligned mobile, center on tablet, left on desktop
        </Text>
      ),
    },
    {
      label: 'Text Spacing',
      background: 'surface',
      Container,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="medium">
            {sizes.sort().map((size) => (
              <Box key={size} background="neutralLight">
                <Text size={size}>
                  {titleCase(size)} Text (Line 1)
                  <br />
                  {titleCase(size)} Text (Line 2)
                </Text>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Text Contrast',
      Container,
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="xsmall">
              <Columns space="medium">
                <Column>
                  <Text size="small">
                    {background} <IconPositive />
                  </Text>
                </Column>
                <Column width="content">
                  <Text size="small" tone="secondary">
                    Secondary <IconPositive />
                  </Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
