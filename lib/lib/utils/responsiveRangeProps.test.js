import { resolveResponsiveRangeProps } from './responsiveRangeProps';
describe('resolveResponsiveRangeProps', function () {
  var testData = [[{}, [false, false, false]], [{
    above: 'mobile'
  }, [false, true, true]], [{
    above: 'tablet'
  }, [false, false, true]], [{
    below: 'desktop'
  }, [true, true, false]], [{
    below: 'desktop'
  }, [true, true, false]], [{
    above: 'mobile',
    below: 'desktop'
  }, [false, true, false]]];
  test.each(testData)('%p returns %p', function (props, expected) {
    expect(resolveResponsiveRangeProps(props)).toEqual(expected);
  });
});