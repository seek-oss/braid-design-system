import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box, Button } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default Button',
      Container,
      Example: () => <Button>Submit</Button>,
    },
    {
      label: 'Strong Button',
      Container,
      Example: () => <Button weight="strong">Submit</Button>,
    },
    {
      label: 'Weak Button',
      Container,
      Example: () => <Button weight="weak">Submit</Button>,
    },
    {
      label: 'Weak Button on Brand Background',
      background: 'brand',
      Container,
      Example: () => <Button weight="weak">Submit</Button>,
    },
    {
      label: 'Weak Button Contrast',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="medium">
                <Button weight="weak">{background}</Button>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};
