import useScope from 'braid-src/lib/playroom/useScope';

import type { ComponentExample } from '../../types';

const noop = () => {};
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
