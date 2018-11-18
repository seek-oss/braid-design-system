import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import parsePropTypes from 'parse-prop-types';
import { Box, Text } from '../../../../lib/components';

const typeValueToString = option => {
  if (option.type.name === 'oneOfType') {
    return option.type.value
      .map(x => {
        if (x.name === 'oneOf') {
          return x.value
            .map(y => {
              return JSON.stringify(y);
            })
            .join(' | ');
        }

        return x.name;
      })
      .join(' | ');
  }

  if (option.type.name === 'oneOf') {
    return option.type.value
      .map(x => {
        return JSON.stringify(x);
      })
      .join(' | ');
  }

  return option.type.name;
};

export default class ComponentProps extends Component {
  static propTypes = {
    component: PropTypes.node.isRequired
  };

  render() {
    const { component } = this.props;
    const propTypes = parsePropTypes(component);
    const options = Object.keys(propTypes).map(propName => ({
      name: propName,
      ...propTypes[propName]
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
              Type: {typeValueToString(option)}
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
