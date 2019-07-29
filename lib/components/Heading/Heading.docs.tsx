import React, { Fragment, ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Heading } from './Heading';
import { Box } from '../Box/Box';
import { background as boxBackgrounds } from '../../hooks/useBox/box.treat';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Level 1',
      render: () => <Heading level="1">Heading Level 1</Heading>,
    },
    {
      label: 'Level 1 Weak',
      render: () => (
        <Heading level="1" weight="weak">
          Heading Level 1 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 2',
      render: () => <Heading level="2">Heading Level 2</Heading>,
    },
    {
      label: 'Level 2 Weak',
      render: () => (
        <Heading level="2" weight="weak">
          Heading Level 2 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 3',
      render: () => <Heading level="3">Heading Level 3</Heading>,
    },
    {
      label: 'Level 3 Weak',
      render: () => (
        <Heading level="3" weight="weak">
          Heading Level 3 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 4',
      render: () => <Heading level="4">Heading Level 4</Heading>,
    },
    {
      label: 'Level 4 Weak',
      render: () => (
        <Heading level="4" weight="weak">
          Heading Level 4 Weak
        </Heading>
      ),
    },
    {
      label: 'Heading Contrast',
      docsSite: false,
      Container,
      render: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map(background => (
              <Box background={background}>
                <Heading level="4">{background}</Heading>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};

export default docs;
