import React from 'react';
import Text from '../Text/Text';

export default Icon => {
  return [
    {
      label: 'Standard',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon marginRight="smaller" />
          <Text baseline={false}>Standard text</Text>
        </div>
      )
    },
    {
      label: 'Standard Inline',
      render: () => (
        <Text>
          Standard
          <Icon inline marginLeft="smaller" marginRight="smaller" />
          text
        </Text>
      )
    },
    {
      label: 'Large',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon size="large" marginRight="smaller" />
          <Text size="large" baseline={false}>
            Standard text
          </Text>
        </div>
      )
    },
    {
      label: 'Large Inline',
      render: () => (
        <Text size="large">
          Large
          <Icon
            size="large"
            inline
            marginLeft="smaller"
            marginRight="smaller"
          />
          text
        </Text>
      )
    }
  ];
};
