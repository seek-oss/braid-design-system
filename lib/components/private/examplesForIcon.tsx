import React, { ComponentType } from 'react';
import { Omit } from 'utility-types';
import Text from '../Text/Text';
import { IconProps } from '../icons/Icon/Icon';

export default (Icon: ComponentType<Omit<IconProps, 'svgComponent'>>) => {
  return [
    {
      label: 'Standard',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon marginRight="xsmall" />
          <Text baseline={false}>Standard text</Text>
        </div>
      )
    },
    {
      label: 'Standard Inline',
      render: () => (
        <Text>
          Standard
          <Icon inline marginLeft="xsmall" marginRight="xsmall" />
          text
        </Text>
      )
    },
    {
      label: 'Large',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size="large" marginRight="xsmall" />
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
          <Icon size="large" inline marginLeft="xsmall" marginRight="xsmall" />
          text
        </Text>
      )
    }
  ];
};
