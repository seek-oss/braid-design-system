import { px } from './toUnit';

const convertCases = [
  {
    input: '1',
    output: '1px'
  },
  {
    input: 1,
    output: '1px'
  },
  {
    input: '123',
    output: '123px'
  },
  {
    input: '123.23',
    output: '123.23px'
  }
];

const noConvertCases = [
  {
    input: '0',
    output: '0'
  },
  {
    input: 0,
    output: 0
  },
  {
    input: '123abc',
    output: '123abc'
  },
  {
    input: 'abc123',
    output: 'abc123'
  },
  {
    input: 'abc',
    output: 'abc'
  },
  {
    input: '',
    output: ''
  }
];

describe('toUnit', () => {
  convertCases.forEach(({ input, output }) => {
    it(`should convert \'${input}\' to \'${output}\'`, () => {
      expect(px(input)).toEqual(output);
    });
  });

  noConvertCases.forEach(({ input, output }) => {
    it(`should not convert \'${input}\'`, () => {
      expect(px(input)).toEqual(output);
    });
  });
});
