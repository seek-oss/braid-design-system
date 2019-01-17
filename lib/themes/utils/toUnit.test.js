import { px } from './toUnit';

const cases = [
  {
    input: 1,
    output: '1px'
  },
  {
    input: 0,
    output: '0'
  },
  {
    input: 123.23,
    output: '123.23px'
  }
];

describe('toUnit', () => {
  cases.forEach(({ input, output }) => {
    it(`should convert \'${input}\' to \'${output}\'`, () => {
      expect(px(input)).toEqual(output);
    });
  });
});
