import {
  Children,
  Fragment,
  isValidElement,
  useContext,
  useMemo,
  type FC,
} from 'react';

import SpaceDebugContext from '../../playroom/SpaceDebugContext';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { DebugSpace } from '../../playroom/components/DebugSpace/DebugSpace';
import flattenChildren from '../../utils/flattenChildren';

import { type StackProps, Stack as BraidStack } from './Stack';

export const Stack: FC<StackProps> = ({
  space,
  align,
  children,
  ...restProps
}) => {
  const debug = useContext(SpaceDebugContext);
  const c = useMemo(
    () =>
      debug
        ? Children.toArray(flattenChildren(children))
            .filter((child) => child && isValidElement(child) && child.type)
            .map((child, index) => (
              <Fragment key={index}>
                {debug && index > 0 ? <DebugSpace space={space} /> : null}
                {child}
              </Fragment>
            ))
        : children,
    [children, space, debug],
  );

  return (
    <BraidStack
      space={debug ? 'none' : cleanSpaceValue(space) || 'none'}
      align={typeof align !== 'boolean' ? align : undefined}
      {...restProps}
    >
      {debug ? c : children}
    </BraidStack>
  );
};
