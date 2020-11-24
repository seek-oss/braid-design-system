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
).map<Snippet>((snippet) => {
  let code = '';

  if (typeof snippet.code === 'string') {
    code = snippet.code;
  } else if (
    typeof snippet.code === 'object' &&
    snippet.code !== null &&
    'value' in snippet.code &&
    'code' in snippet.code
  ) {
    code = snippet.code.code;
  } else {
    code = reactElementToJsxString(snippet.code, {
      sortProps: false,
      useBooleanShorthandSyntax: false,
    });
  }

  return {
    ...snippet,
    group: snippet.group,
    code,
  };
});
