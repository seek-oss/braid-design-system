import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Heading } from './Heading';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { background as boxBackgrounds } from '../Box/useBoxStyles.treat';
import { heading as headingLevels } from '../../hooks/typography/typography.treat';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Level 1',
      Example: () => <Heading level="1">Heading Level 1</Heading>,
    },
    {
      label: 'Level 1 Weak',
      Example: () => (
        <Heading level="1" weight="weak">
          Heading Level 1 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 2',
      Example: () => <Heading level="2">Heading Level 2</Heading>,
    },
    {
      label: 'Level 2 Weak',
      Example: () => (
        <Heading level="2" weight="weak">
          Heading Level 2 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 3',
      Example: () => <Heading level="3">Heading Level 3</Heading>,
    },
    {
      label: 'Level 3 Weak',
      Example: () => (
        <Heading level="3" weight="weak">
          Heading Level 3 Weak
        </Heading>
      ),
    },
    {
      label: 'Level 4',
      Example: () => <Heading level="4">Heading Level 4</Heading>,
    },
    {
      label: 'Level 4 Weak',
      Example: () => (
        <Heading level="4" weight="weak">
          Heading Level 4 Weak
        </Heading>
      ),
    },
    {
      label: 'Heading Spacing',
      docsSite: false,
      Example: () => {
        const levels = Object.keys(headingLevels) as Array<
          keyof typeof headingLevels
        >;

        return (
          <Stack space="medium">
            {levels.sort().map(level => (
              <Box background="neutralLight">
                <Heading level={level}>
                  Level {level} Heading (Line 1)
                  <br />
                  Level {level} Heading (Line 2)
                </Heading>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Heading Spacing (Legacy)',
      docsSite: false,
      Example: () => {
        const levels = Object.keys(headingLevels) as Array<
          keyof typeof headingLevels
        >;

        return (
          <Stack space="medium">
            {levels.sort().map(level => (
              <Box background="neutralLight">
                <Heading level={level} _LEGACY_SPACE_>
                  Level {level} Heading (Line 1)
                  <br />
                  Level {level} Heading (Line 2)
                </Heading>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Heading Contrast',
      docsSite: false,
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Stack space="medium">
            {backgrounds.sort().map(background => (
              <Box background={background}>
                <Heading level="4">{background}</Heading>
              </Box>
            ))}
          </Stack>
        );
      },
    },
  ],
};

export default docs;
