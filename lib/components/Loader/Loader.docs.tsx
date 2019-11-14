import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Loader } from './Loader';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box } from '../Box/Box';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default',
      Example: () => <Loader />,
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
      docsSite: false,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map(background => (
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
