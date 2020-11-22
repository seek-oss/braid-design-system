import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box, Loader } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Loader />,
    },
    {
      label: 'Delay visibility (used to prevent loading flicker)',
      Example: () => <Loader delayVisibility />,
    },
    {
      label: 'xsmall',
      Example: () => <Loader size="xsmall" />,
    },
    {
      label: 'small',
      Example: () => <Loader size="small" />,
    },
    {
      label: 'standard',
      Example: () => <Loader size="standard" />,
    },
    {
      label: 'large',
      Example: () => <Loader size="large" />,
    },
    {
      label: 'Loader Contrast',
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="xsmall">
                <Loader />
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};
