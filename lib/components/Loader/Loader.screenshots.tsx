import React, { Fragment } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Loader } from '../';
import { backgrounds } from '../../utils/docsHelpers';

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
      Example: () => (
        <Fragment>
          {backgrounds.map((background) => (
            <Box key={background} background={background} padding="xsmall">
              <Loader />
            </Box>
          ))}
        </Fragment>
      ),
    },
  ],
};
