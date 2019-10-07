import React, { Fragment, ReactNode } from 'react';
import { titleCase } from 'change-case';
import { ComponentDocs } from '../../../site/src/types';
import { Text } from './Text';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { text as textSizes } from '../../hooks/typography/typography.treat';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
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
      label: 'Text on Brand Background',
      Container,
      Example: () => (
        <Box background="brand" padding="xsmall">
          <Text>Brand background.</Text>
        </Box>
      ),
    },
    {
      label: 'Text Spacing',
      docsSite: false,
      Container,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="medium">
            {sizes.sort().map(size => (
              <Box background="neutralLight">
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
      label: 'Text Spacing (Legacy)',
      docsSite: false,
      Container,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="medium">
            {sizes.sort().map(size => (
              <Box background="neutralLight">
                <Text size={size} _LEGACY_SPACE_>
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
      docsSite: false,
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map(background => (
              <Box background={background}>
                <Text baseline={false}>{background}</Text>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};

export default docs;
