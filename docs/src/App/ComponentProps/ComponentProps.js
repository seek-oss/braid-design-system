import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '../../../../lib/components';
import componentDocs from '../../../../lib/componentDocs/componentDocs.json';

export default class ComponentProps extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired
  };

  render() {
    const { componentName } = this.props;
    const { props = {} } = componentDocs[componentName] || {};

    const options = Object.keys(props).map(propName => ({
      name: propName,
      ...props[propName]
    }));

    return options.length === 0 ? null : (
      <Fragment>
        <Text weight="strong" paddingBottom="small">
          Options
        </Text>
        {options.map((option, i) => (
          <Box key={i} paddingBottom="small">
            <Text>{option.name}</Text>
            <Text color="secondary">
              Type: {option.type.name}
              {option.required && !option.defaultValue ? ' (Required)' : ''}
            </Text>
            {option.defaultValue ? (
              <Text color="secondary">
                Default: {JSON.stringify(option.defaultValue.value)}
              </Text>
            ) : null}
          </Box>
        ))}
      </Fragment>
    );
  }
}
