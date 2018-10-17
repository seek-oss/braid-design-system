import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import parsePropTypes from 'parse-prop-types';
import dedent from 'dedent';
import { ThemeProvider, Box, Text } from '../../../../lib/components';
import {
  wireframe,
  jobStreet,
  seekAsia,
  seekAnz
} from '../../../../lib/themes';

const themes = [wireframe, jobStreet, seekAsia, seekAnz];

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

export default class ComponentRoute extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;
    const { componentName } = match.params;
    const docs = require(`../../../../lib/components/${componentName}/${componentName}.docs.js`)
      .default;
    const propTypes = parsePropTypes(docs.component);
    const options = Object.keys(propTypes).map(propName => ({
      name: propName,
      ...propTypes[propName]
    }));
    const examples = docs.examples || [];

    return (
      <Box>
        <Text size="large" weight="strong" paddingBottom="small">
          {match.params.componentName}
        </Text>

        {examples.length > 0 ? (
          <Text weight="strong" paddingBottom="small">
            Example
            {examples.length > 1 ? 's' : ''}
          </Text>
        ) : null}
        {examples.map(({ label, render, code }, index) => (
          <Box key={label} marginBottom="largest">
            {label ? <Text paddingBottom="small">{label}</Text> : null}
            {render
              ? themes.map(theme => (
                  <Box key={theme.name} marginBottom="large">
                    <Text color="secondary" paddingBottom="small">
                      Theme: {theme.name}
                    </Text>
                    <ThemeProvider theme={theme}>
                      {render({ id: `${index}_${theme.name}` })}
                    </ThemeProvider>
                  </Box>
                ))
              : null}
            <Text color="secondary" paddingBottom="small">
              Code:
            </Text>
            <Text
              component="pre"
              color="white"
              paddingLeft="small"
              paddingRight="small"
              paddingTop="smallest"
              paddingBottom="small"
              borderRadius="standard"
              style={{
                backgroundColor: '#2b2b2b',
                overflowX: 'auto'
              }}
            >
              {code
                ? dedent(code)
                : reactElementToJSXString(render({ id: 'id' }), {
                    useBooleanShorthandSyntax: false,
                    showDefaultProps: false,
                    showFunctions: true,
                    displayName: ({ type }) => {
                      if (typeof type === 'string') {
                        return type;
                      }

                      // Remove decorators from displayName
                      // e.g. 'withTheme(Box)' becomes 'Box'
                      return type.displayName.match(
                        /(^|\()([A-Z][A-Za-z]*)($|\))/
                      )[2];
                    }
                  })}
            </Text>
          </Box>
        ))}

        {options.length === 0 ? null : (
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
        )}
      </Box>
    );
  }
}
