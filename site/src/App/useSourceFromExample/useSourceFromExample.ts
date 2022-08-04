import noop from 'lodash/noop';
import { ComponentExample } from '../../types';
import useScope from 'braid-design-system/lib/playroom/useScope';

export const useSourceFromExample = (
  id: string,
  { Example, code: codeOverride }: Pick<ComponentExample, 'Example' | 'code'>,
) => {
  let returnCode, returnValue;
  const playroomScope = useScope();

  if (Example) {
    const result = Example({ id, handler: noop, ...playroomScope }); // eslint-disable-line new-cap
    returnCode = result.code.replace(/id={id}/g, '');
    returnValue = result.value;
  }

  return {
    code: codeOverride ?? returnCode,
    value: returnValue,
  };
};
