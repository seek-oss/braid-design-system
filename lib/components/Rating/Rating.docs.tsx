import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box, Rating } from '../';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Rating rating={3} />,
    },
    {
      label: 'Hide the text rating',
      Example: () => <Rating rating={4.2} showTextRating={false} />,
    },
    {
      label: 'large',
      Example: () => <Rating rating={3} size="large" />,
    },
    {
      label: 'small',
      Example: () => <Rating rating={2} size="small" />,
    },
    {
      label: 'xsmall',
      Example: () => <Rating rating={1.5} size="xsmall" />,
    },
    {
      label: 'Rating Contrast',
      docsSite: false,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="xsmall">
                <Rating rating={1.5} size="xsmall" />
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <Rating rating={3} />,
    },
    {
      name: 'Without text rating',
      code: <Rating rating={4.2} showTextRating={false} />,
    },
    {
      name: 'Large',
      code: <Rating rating={3.7} size="large" />,
    },
  ],
};

export default docs;
