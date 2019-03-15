import React, { Fragment } from 'react';
import map from 'lodash/map';
import { Box, Text } from '../../../../lib/components';
import componentDocs from '../../../../lib/componentDocs/componentDocs.json';

type ComponentName = keyof typeof componentDocs;

interface Props {
  componentName: string;
}

const isValidComponentName = (
  componentName: string,
): componentName is ComponentName => {
  return componentDocs.hasOwnProperty(componentName);
};

const ComponentProps = ({ componentName }: Props) => {
  if (!isValidComponentName(componentName)) {
    return null;
  }

  const { props = {} } = componentDocs[componentName] || {};

  return Object.keys(props).length === 0 ? null : (
    <Fragment>
      <Box paddingBottom="small">
        <Text weight="strong">Options</Text>
      </Box>
      {map(props, (option, propName) => {
        if (!option) {
          return null;
        }

        return (
          <Box key={propName} paddingBottom="small">
            <Text>{propName}</Text>
            <Text color="secondary">
              Type: {option.type.name}
              {option.required ? ' (Required)' : ''}
            </Text>
          </Box>
        );
      })}
    </Fragment>
  );
};

ComponentProps.displayName = 'ComponentProps';

export default ComponentProps;
