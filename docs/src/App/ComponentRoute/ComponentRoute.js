import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import dedent from 'dedent';
import ComponentProps from '../ComponentProps/ComponentProps';
import { ThemeProvider, Box, Text } from '../../../../lib/components';
import {
  wireframe,
  jobStreet,
  seekAsia,
  seekAnz
} from '../../../../lib/themes';

const themes = [wireframe, jobStreet, seekAsia, seekAnz];

export default class ComponentRoute extends Component {
  static propTypes = {
    componentName: PropTypes.string.isRequired,
    category: PropTypes.string,
    sourceUrlPrefix: PropTypes.string.isRequired
  };

  render() {
    const { componentName, category, sourceUrlPrefix } = this.props;
    const docs = category
      ? require(`../../../../lib/components/${category}/${componentName}/${componentName}.docs.js`)
          .default
      : require(`../../../../lib/components/${componentName}/${componentName}.docs.js`)
          .default;
    const examples = docs.examples || [];

    const componentPath = category ? `${category}/` : '';
    const sourceUrl = `${sourceUrlPrefix}/lib/components/${componentPath}${componentName}`;

    return (
      <Box>
        <Text size="large" weight="strong" paddingBottom="small">
          {componentName}
        </Text>
        {examples.length > 0 ? (
          <Text weight="strong" paddingBottom="small">
            Example
            {examples.length > 1 ? 's' : ''}
          </Text>
        ) : null}
        {examples.map(({ label, render, code }, index) => (
          <Box key={label} marginBottom="xxlarge">
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
              paddingTop="xxsmall"
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

        <Box paddingBottom="small">
          <ComponentProps componentName={componentName} />
        </Box>

        <Text weight="strong" paddingBottom="small">
          Source
        </Text>
        <Text paddingBottom="large">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Text>
      </Box>
    );
  }
}
