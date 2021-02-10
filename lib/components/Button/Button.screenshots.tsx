import React, { Fragment, ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box, Button } from '../';
import { Inline } from '../Inline/Inline';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button>Standard</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button tone="critical">Standard</Button>
          <Button tone="critical" variant="ghost">
            Ghost
          </Button>
          <Button tone="critical" variant="soft">
            Soft
          </Button>
          <Button tone="critical" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'BrandAccent',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button tone="brandAccent">Standard</Button>
          <Button tone="brandAccent" variant="ghost">
            Ghost
          </Button>
          <Button tone="brandAccent" variant="soft">
            Soft
          </Button>
          <Button tone="brandAccent" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'Small size',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button size="small">Standard</Button>
          <Button size="small" variant="ghost">
            Ghost
          </Button>
          <Button size="small" variant="soft">
            Soft
          </Button>
          <Button size="small" variant="transparent">
            Transparent
          </Button>
        </Inline>
      ),
    },
    {
      label: 'Legacy weights',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <Button weight="strong">Strong</Button>
          <Button weight="regular">Regular</Button>
          <Button weight="weak">Weak</Button>
        </Inline>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="medium">
                <Inline space="small" collapseBelow="desktop">
                  <Button>Standard</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="soft">Soft</Button>
                  <Button variant="transparent">Transparent</Button>
                </Inline>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
    {
      label: 'Contrast - critical',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="medium">
                <Inline space="small" collapseBelow="desktop">
                  <Button tone="critical">Standard</Button>
                  <Button tone="critical" variant="ghost">
                    Ghost
                  </Button>
                  <Button tone="critical" variant="soft">
                    Soft
                  </Button>
                  <Button tone="critical" variant="transparent">
                    Transparent
                  </Button>
                </Inline>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
    {
      label: 'Contrast - brandAccent',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="medium">
                <Inline space="small" collapseBelow="desktop">
                  <Button tone="brandAccent">Standard</Button>
                  <Button tone="brandAccent" variant="ghost">
                    Ghost
                  </Button>
                  <Button tone="brandAccent" variant="soft">
                    Soft
                  </Button>
                  <Button tone="brandAccent" variant="transparent">
                    Transparent
                  </Button>
                </Inline>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};
