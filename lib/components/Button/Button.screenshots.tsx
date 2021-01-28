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
      label: 'Standard Button',
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
      label: 'Standard Critical Button',
      Container,
      Example: () => <Button tone="critical">Delete</Button>,
    },
    {
      label: 'Strong Critical Button',
      Container,
      Example: () => (
        <Button weight="strong" tone="critical">
          Delete
        </Button>
      ),
    },
    {
      label: 'Weak Critical Button',
      Container,
      Example: () => (
        <Button weight="weak" tone="critical">
          Delete
        </Button>
      ),
    },
    {
      label: 'Small Standard Button',
      Container,
      Example: () => <Button size="small">Submit</Button>,
    },
    {
      label: 'Small Strong Button',
      Container,
      Example: () => (
        <Button weight="strong" size="small">
          Submit
        </Button>
      ),
    },
    {
      label: 'Small Weak Button',
      Container,
      Example: () => (
        <Button weight="weak" size="small">
          Submit
        </Button>
      ),
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
    {
      label: 'Weak Critical Button Contrast',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="medium">
                <Button weight="weak" tone="critical">
                  {background}
                </Button>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};
