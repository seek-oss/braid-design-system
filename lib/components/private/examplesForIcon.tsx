import React, { ComponentType } from 'react';
import { Omit } from 'utility-types';
import Text from '../Text/Text';
import Box from '../Box/Box';
import { IconProps } from '../icons/Icon/Icon';

export default (Icon: ComponentType<Omit<IconProps, 'svgComponent'>>) => {
  return [
    {
      label: 'Standard',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box marginRight="xsmall">
            <Icon />
          </Box>
          <Text baseline={false}>Standard text</Text>
        </div>
      )
    },
    {
      label: 'Standard Inline',
      render: () => (
        <Text>
          Standard
          <Box marginLeft="xsmall" marginRight="xsmall">
            <Icon inline />
          </Box>
          text
        </Text>
      )
    },
    {
      label: 'Large',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box marginRight="xsmall">
            <Icon size="large" />
          </Box>
          <Text size="large" baseline={false}>
            Large text
          </Text>
        </div>
      )
    },
    {
      label: 'Large Inline',
      render: () => (
        <Text size="large">
          Large
          <Box marginLeft="xsmall" marginRight="xsmall">
            <Icon size="large" inline />
          </Box>
          text
        </Text>
      )
    }
  ];
};
