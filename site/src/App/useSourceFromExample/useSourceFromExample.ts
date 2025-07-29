import useScope from 'braid-src/lib/playroom/useScope';

import type { ComponentExample } from '../../types';

const noop = () => {};

export const useSourceFromExample = ({
  Example,
  code: codeOverride,
}: Pick<ComponentExample, 'Example' | 'code'>) => {
  const playroomScope = useScope();

  if (!Example) {
    return { code: codeOverride, value: undefined };
  }

  return Example({ handler: noop, ...playroomScope }); // eslint-disable-line new-cap
};
