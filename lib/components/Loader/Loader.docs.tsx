import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box, Loader } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Loader />,
    },
    {
      label: 'Delay visibility (used to prevent loading flicker)',
      gallery: false,
      Example: () => <Loader delayVisibility />,
    },
    {
      label: 'xsmall',
      gallery: false,
      Example: () => <Loader size="xsmall" />,
    },
    {
      label: 'small',
      gallery: false,
      Example: () => <Loader size="small" />,
    },
    {
      label: 'standard',
      gallery: false,
      Example: () => <Loader size="standard" />,
    },
    {
      label: 'large',
      gallery: false,
      Example: () => <Loader size="large" />,
    },
    {
      label: 'Loader Contrast',
      docsSite: false,
      gallery: false,
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

export default docs;
