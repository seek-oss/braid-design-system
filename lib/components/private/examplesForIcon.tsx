import React, { ComponentType, Fragment } from 'react';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { UseIconProps } from '../../hooks/useIcon';
import {
  heading as headingSizes,
  text as textSizes,
  tone as tones,
} from '../../hooks/typography/typography.treat';

export default (Icon: ComponentType<UseIconProps>) => {
  return [
    {
      label: 'Standard',
      render: () => (
        <Box display="flex" style={{ alignItems: 'center' }}>
          <Box marginRight="xsmall">
            <Icon />
          </Box>
          <Text baseline={false}>Standard text</Text>
        </Box>
      ),
    },
    {
      label: 'Standard Inline',
      render: () => (
        <Text>
          Standard <Icon /> text
        </Text>
      ),
    },
    {
      label: 'Large',
      render: () => (
        <Box display="flex" style={{ alignItems: 'center' }}>
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
      render: () => (
        <Text size="large">
          Large <Icon /> text
        </Text>
      ),
    },
    {
      label: 'Fill to container, eg. 100x100',
      render: () => (
        <Box style={{ height: '100px', width: '100px' }}>
          <Icon size="fill" />
        </Box>
      ),
    },
    {
      label: 'Blocks sizes (i.e. full line height)',
      docsSite: false,
      render: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Fragment>
            {sizes.map(size => (
              <Box
                display="flex"
                marginBottom="xxsmall"
                style={{ alignItems: 'center' }}
              >
                <Box marginRight="xxsmall">
                  <Icon size={size} />
                </Box>
                <Text baseline={false}>{size}</Text>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
    {
      label: 'Auto size (via TextContext)',
      docsSite: false,
      render: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Fragment>
            {sizes.map(size => (
              <Text size={size}>
                <Icon /> {size}
              </Text>
            ))}
          </Fragment>
        );
      },
    },
    {
      label: 'Auto Size (via HeadingContext)',
      docsSite: false,
      render: () => {
        const headings = Object.keys(headingSizes) as Array<
          keyof typeof headingSizes
        >;

        return (
          <Fragment>
            {headings.sort().map(heading => (
              <Heading level={heading}>
                <Icon /> level {heading}
              </Heading>
            ))}
          </Fragment>
        );
      },
    },
    {
      label: 'Auto Tone (via TextContext)',
      docsSite: false,
      render: () => {
        const iconTones = Object.keys(tones) as Array<keyof typeof tones>;

        return (
          <Fragment>
            {iconTones.map(tone => (
              <Text tone={tone}>
                <Icon /> {tone}
              </Text>
            ))}
            <Text tone="critical">
              Critical text overridden to positive <Icon tone="positive" /> icon
            </Text>
          </Fragment>
        );
      },
    },
    {
      label: 'Auto Tone with Background Contrast (via TextContext)',
      docsSite: false,
      render: () => (
        <Box background="brand">
          <Text baseline={false}>
            Default <Icon />, explicitly positive <Icon tone="positive" />
          </Text>
        </Box>
      ),
    },
  ];
};
