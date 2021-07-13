type ResponsiveArray<Value extends string | number> =
  ReadonlyArray<Value | null> & { length: 2 | 3 | 4 } & { 0: Value | null };

export const optimizeResponsiveArray = <Value extends string | number>(
  value: ResponsiveArray<Value>,
): ResponsiveArray<Value> => {
  let lastValue: Value | undefined;

  const values = value.map((v) => {
    if (v !== lastValue && v !== null) {
      lastValue = v;
      return v;
    }

    return null;
  });

  return [
    values[0] ?? null,
    values[1] ?? null,
    values[2] ?? null,
    values[3] ?? null,
  ] as const;
};
