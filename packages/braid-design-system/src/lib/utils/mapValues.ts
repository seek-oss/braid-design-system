export function mapValues<T extends object, TResult>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => TResult,
) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: fn(value, key as keyof T),
    }),
    {} as Record<keyof T, TResult>,
  );
}
