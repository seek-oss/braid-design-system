import noop from 'lodash/noop';
import { ComponentExample } from '../../site/src/types';
import useScope from '../playroom/useScope';
import reactElementToJsxString from 'react-element-to-jsx-string';

export const useSourceFromExample = (
  id: string,
  { Example, code: codeOverride }: Pick<ComponentExample, 'Example' | 'code'>,
) => {
  let returnCode, returnValue;
  const playroomScope = useScope();

  if (Example) {
    const result = Example({ id, handler: noop, ...playroomScope }); // eslint-disable-line new-cap

    if ('value' in result) {
      returnCode = result.code.replace(/id={id}/g, '');
      returnValue = result.value;
    } else {
      returnValue = result;
      returnCode = reactElementToJsxString(returnValue, {
        useBooleanShorthandSyntax: false,
        showDefaultProps: false,
        showFunctions: false,
        filterProps: ['onChange', 'onBlur', 'onFocus'],
      });
    }
  }

  return {
    code: codeOverride ?? returnCode,
    value: returnValue,
  };
};
