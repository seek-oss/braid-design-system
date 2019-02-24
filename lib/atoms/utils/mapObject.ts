import toPairs from 'lodash/toPairs';
import fromPairs from 'lodash/fromPairs';
import { Dictionary } from 'lodash';

type MapFn<Value, NewValue> = (key: string, value: Value) => [string, NewValue];

export default <Value, NewValue>(
  dict: Dictionary<Value>,
  fn: MapFn<Value, NewValue>
): Dictionary<NewValue> =>
  fromPairs(toPairs(dict).map(([key, value]) => fn(key, value)));
