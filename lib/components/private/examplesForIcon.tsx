import React, { ComponentType } from 'react';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { UseIconProps } from '../../hooks/useIcon';

export default (Icon: ComponentType<UseIconProps>) => {
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
      ),
    },
    {
      label: 'Standard Inline',
      render: () => (
        <Text>
          Standard <Icon inline /> text
        </Text>
      ),
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
      ),
    },
    {
      label: 'Large Inline',
      render: () => (
        <Text size="large">
          Large <Icon size="large" inline /> text
        </Text>
      ),
    },
  ];
};
