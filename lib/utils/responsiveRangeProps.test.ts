import { resolveResponsiveRangeProps } from './responsiveRangeProps';

describe('resolveResponsiveRangeProps', () => {
  const testData = [
    [{}, [false, false, false]],
    [{ above: 'mobile' }, [false, true, true]],
    [{ above: 'tablet' }, [false, false, true]],
    [{ below: 'desktop' }, [true, true, false]],
    [{ below: 'desktop' }, [true, true, false]],
    [{ above: 'mobile', below: 'desktop' }, [false, true, false]],
  ] as const;

  test.each(testData)('%p returns %p', (props, expected) => {
    expect(resolveResponsiveRangeProps(props)).toEqual(expected);
  });
});
