import React, { Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { Box, Button, Stack, Text, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>Renders a standard button element.</Text>
      <Text tone="secondary">
        If you want a link that looks like a button, check out{' '}
        <TextLink href="/components/ButtonLink">ButtonLink.</TextLink>
      </Text>
    </Stack>
  ),
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
      label: 'Loading Button',
      Container,
      Example: () => <Button loading>Loading</Button>,
      storybook: false,
    },
    {
      label: 'Weak Button Contrast',
      docsSite: false,
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
  snippets: [
    {
      name: 'Standard',
      code: <Button>Submit</Button>,
    },
    {
      name: 'Strong',
      code: <Button weight="strong">Submit</Button>,
    },
    {
      name: 'Weak',
      code: <Button weight="weak">Submit</Button>,
    },
  ],
};

export default docs;
