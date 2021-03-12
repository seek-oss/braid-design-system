import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Rating } from '../';
import { background as boxBackgrounds } from '../Box/useBoxStyles.css';

export const screenshots: ComponentScreenshot = {
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
};
