import React, { Component } from 'react';
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
import { ComponentDocs } from '../../types';

const themes = [wireframe, jobStreet, seekAsia, seekAnz];

interface ComponentRouteProps {
  componentName: string;
  category?: string;
  sourceUrlPrefix: string;
}

export default class ComponentRoute extends Component<ComponentRouteProps> {
  render() {
    const { componentName, category, sourceUrlPrefix } = this.props;
    const docs: ComponentDocs = category
      ? require(`../../../../lib/components/${category}/${componentName}/${componentName}.docs.tsx`)
          .default
      : require(`../../../../lib/components/${componentName}/${componentName}.docs.tsx`)
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
          <Box key={index} marginBottom="xxlarge">
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
              {render
                ? reactElementToJSXString(render({ id: 'id' }), {
                    useBooleanShorthandSyntax: false,
                    showDefaultProps: false,
                    showFunctions: true
                  })
                : null}
              {code ? dedent(code) : null}
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
