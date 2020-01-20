import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Inline } from '../Inline/Inline';
import { UseIconProps } from '../../hooks/useIcon';
import {
  heading as headingSizes,
  text as textSizes,
  tone as tones,
} from '../../hooks/typography/typography.treat';
import { Stack } from '../Stack/Stack';

import * as icons from './index';

type IconName = keyof typeof icons;
const iconNames = Object.keys(icons).map(icon => icon as IconName);

const Icons = ({ tone }: { tone?: UseIconProps['tone'] }) => (
  <Inline space="small">
    {iconNames.map(icon => {
      const IconComponent = icons[icon];
      return <IconComponent key={icon} tone={tone} />;
    })}
  </Inline>
);

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => <Icons />,
    },
    {
      label: 'Cropped',
      Example: () => (
        <Inline space="small">
          {iconNames.map(icon => {
            const IconComponent = icons[icon];
            return (
              <Box style={{ height: 24 }} boxShadow="borderCritical" key={icon}>
                <IconComponent size="fill" crop />
              </Box>
            );
          })}
        </Inline>
      ),
    },
    {
      label: 'Auto size (via TextContext)',
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="large">
            {sizes.map(size => (
              <Stack key={size} space="medium">
                <Text size={size}>{size}</Text>
                <Text size={size}>
                  <Icons />
                </Text>
              </Stack>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Size (via HeadingContext)',
      Example: () => {
        const headings = Object.keys(headingSizes) as Array<
          keyof typeof headingSizes
        >;

        return (
          <Stack space="large">
            {headings
              .sort()
              .reverse()
              .map(heading => (
                <Stack key={heading} space="medium">
                  <Heading level={heading}>Level {heading}</Heading>
                  <Heading level={heading}>
                    <Icons />
                  </Heading>
                </Stack>
              ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Tone (via TextContext)',
      Example: () => {
        const iconTones = ['neutral', ...Object.keys(tones)].sort() as Array<
          keyof typeof tones | 'neutral'
        >;

        return (
          <Stack space="large">
            {iconTones.map(tone => (
              <Stack key={tone} space="medium">
                <Text tone={tone}>{tone}</Text>
                <Text tone={tone}>
                  <Icons />
                </Text>
              </Stack>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Override auto tone explicitly',
      Example: () => (
        <Text tone="critical">
          Critical text overridden to positive icons:
          <Icons tone="positive" />
        </Text>
      ),
    },
    {
      label: 'Auto Tone with Background Contrast (via TextContext)',
      Example: () => (
        <Box background="brand" padding="xsmall">
          <Stack space="medium">
            <Text>Default:</Text>
            <Text>
              <Icons />
            </Text>
            <Text>Explicitly positive:</Text>
            <Text>
              <Icons tone="positive" />
            </Text>
          </Stack>
        </Box>
      ),
    },
  ],
};

export default docs;
