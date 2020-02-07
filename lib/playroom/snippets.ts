import reactElementToJsxString from 'react-element-to-jsx-string';
import { flatten } from 'lodash';
import { ComponentDocs } from '../../site/src/types';
import { Snippets } from 'sku/playroom';

const req = require.context('../components', true, /\.docs\.tsx?$/);
export default flatten(
  req.keys().map(filename => {
    const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
    if (!matches) {
      return [];
    }

    const { snippets = [] } = req(filename).default as ComponentDocs;
    return snippets.map(snippet => ({
      ...snippet,
      group: snippet.group || matches[1],
    }));
  }),
).map<Snippets[number]>(snippet => ({
  ...snippet,
  group: snippet.group,
  code: reactElementToJsxString(snippet.code, {
    sortProps: false,
    useBooleanShorthandSyntax: false,
  }),
}));
