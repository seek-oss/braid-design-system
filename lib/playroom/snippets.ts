import { flatten } from 'lodash';
import { Snippet } from '../components/private/Snippets';
import { reactElementToJsxString } from '../utils/reactElementToJsxString';

const req = require.context('../components', true, /\.snippets\.tsx?$/);
export default flatten(
  req.keys().map((filename) => {
    const matches = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/);
    if (!matches) {
      return [];
    }

    const snippets = req(filename).snippets as Snippet[];

    return snippets.map((snippet) => ({
      ...snippet,
      group: snippet.group || matches[1],
    }));
  }),
).map<Snippet>((snippet) => ({
  ...snippet,
  group: snippet.group,
  code:
    typeof snippet.code === 'string'
      ? snippet.code
      : reactElementToJsxString(snippet.code, {
          sortProps: false,
          useBooleanShorthandSyntax: false,
        }),
}));
