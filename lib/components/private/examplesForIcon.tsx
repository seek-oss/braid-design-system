import React, { ComponentType } from 'react';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { UseIconProps } from '../../hooks/useIcon';
import {
  heading as headingSizes,
  text as textSizes,
  tone as tones,
} from '../../hooks/typography/typography.treat';
import { Stack } from '../Stack/Stack';

export default (Icon: ComponentType<UseIconProps>) => {
  return [
    {
      label: 'Standard',
      Example: () => (
        <Box display="flex" alignItems="center">
          <Box marginRight="xsmall">
            <Icon />
          </Box>
          <Text baseline={false}>Standard text</Text>
        </Box>
      ),
    },
    {
      label: 'Standard Inline',
      Example: () => (
        <Text>
          Standard <Icon /> text
        </Text>
      ),
    },
    {
      label: 'Large',
      Example: () => (
        <Box display="flex" alignItems="center">
          <Box marginRight="xsmall">
            <Icon size="large" />
          </Box>
          <Text size="large" baseline={false}>
            Large text
          </Text>
        </Box>
      ),
    },
    {
      label: 'Large Inline',
      Example: () => (
        <Text size="large">
          Large <Icon /> text
        </Text>
      ),
    },
    {
      label: 'Fill to container, eg. 100x100',
      Example: () => (
        <Box style={{ height: '100px', width: '100px' }}>
          <Icon size="fill" />
        </Box>
      ),
    },
    {
      label: 'Blocks sizes (i.e. full line height)',
      docsSite: false,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="small">
            {sizes.map(size => (
              <Box display="flex" alignItems="center">
                <Box marginRight="xxsmall">
                  <Icon size={size} />
                </Box>
                <Text baseline={false}>{size}</Text>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto size (via TextContext)',
      docsSite: false,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="medium">
            {sizes.map(size => (
              <Text size={size}>
                <Icon /> {size}
              </Text>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Size (via HeadingContext)',
      docsSite: false,
      Example: () => {
        const headings = Object.keys(headingSizes) as Array<
          keyof typeof headingSizes
        >;

        return (
          <Stack space="large">
            {headings.sort().map(heading => (
              <Heading level={heading}>
                <Icon /> level {heading}
              </Heading>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Auto Tone (via TextContext)',
      docsSite: false,
      Example: () => {
        const iconTones = Object.keys(tones) as Array<keyof typeof tones>;

        return (
          <Stack space="small">
            {iconTones.map(tone => (
              <Text tone={tone}>
                <Icon /> {tone}
              </Text>
            ))}
            <Text tone="critical">
              Critical text overridden to positive <Icon tone="positive" /> icon
            </Text>
          </Stack>
        );
      },
    },
    {
      label: 'Auto Tone with Background Contrast (via TextContext)',
      docsSite: false,
      Example: () => (
        <Box background="brand">
          <Text baseline={false}>
            Default <Icon />, explicitly positive <Icon tone="positive" />
          </Text>
        </Box>
      ),
    },
  ];
};
