import React, { Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text } from './Text';
import { Box } from '../Box/Box';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';

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
        <Box background="brand" paddingBottom="xsmall" paddingLeft="xsmall">
          <Text>Brand background.</Text>
        </Box>
      ),
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
