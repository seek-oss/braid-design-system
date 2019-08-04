import React, { Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text } from './Text';
import { Box } from '../Box/Box';
import { background as boxBackgrounds } from '../../hooks/useBox/box.treat';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    { label: 'Standard Text', render: () => <Text>Standard text.</Text> },
    {
      label: 'Small Text',
      render: () => <Text size="small">Small text.</Text>,
    },
    {
      label: 'Large Text',
      render: () => <Text size="large">Large text.</Text>,
    },
    {
      label: 'Text on Brand Background',
      Container,
      render: () => (
        <Box background="brand" paddingBottom="xsmall" paddingLeft="xsmall">
          <Text>Brand background.</Text>
        </Box>
      ),
    },
    {
      label: 'Text Contrast',
      docsSite: false,
      Container,
      render: () => {
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
