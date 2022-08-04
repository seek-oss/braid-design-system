import { resolveResponsiveRangeProps } from './resolveResponsiveRangeProps';

describe('resolveResponsiveRangeProps', () => {
  const testData = [
    [{}, [false, false, false, false]],
    [{ above: 'mobile' }, [false, true, true, true]],
    [{ above: 'tablet' }, [false, false, true, true]],
    [{ above: 'desktop' }, [false, false, false, true]],
    [{ below: 'wide' }, [true, true, true, false]],
    [{ below: 'desktop' }, [true, true, false, false]],
    [{ below: 'tablet' }, [true, false, false, false]],
    [{ above: 'mobile', below: 'wide' }, [false, true, true, false]],
    [{ above: 'mobile', below: 'desktop' }, [false, true, false, false]],
    [{ above: 'tablet', below: 'wide' }, [false, false, true, false]],
  ] as const;

  test.each(testData)('%p returns %p', (props, expected) => {
    expect(resolveResponsiveRangeProps(props)).toEqual(expected);
  });
});
