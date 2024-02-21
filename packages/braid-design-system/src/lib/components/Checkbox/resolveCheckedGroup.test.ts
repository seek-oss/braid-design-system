import { resolveCheckedGroup } from './resolveCheckedGroup';

type ResolveCheckedGroup = typeof resolveCheckedGroup;

describe('resolveCheckedGroup', () => {
  const data = [
    { input: [], result: false },
    { input: [false], result: false },
    { input: [false, false], result: false },
    { input: [true, false], result: 'mixed' },
    { input: [false, true], result: 'mixed' },
    { input: [true], result: true },
    { input: [true, true], result: true },
  ] as Array<{
    input: Parameters<ResolveCheckedGroup>[0];
    result: ReturnType<ResolveCheckedGroup>;
  }>;

  test.each(data)(`$input returns \`$result\``, ({ input, result }) => {
    expect(resolveCheckedGroup(input)).toEqual(result);
  });
});
