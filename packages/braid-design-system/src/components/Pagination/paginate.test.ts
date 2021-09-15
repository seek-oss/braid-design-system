import { maxPages, paginate } from './paginate';

describe('paginate', () => {
  it(`should return the required pages when 'total' < ${maxPages}`, () => {
    expect(paginate({ page: 1, total: 4 })).toEqual([1, 2, 3, 4]);
  });

  it(`should return the first ${maxPages} pages when 'page' is '1'`, () => {
    expect(paginate({ page: 1, total: 20 })).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it(`should return the ${maxPages} pages around the selected 'page'`, () => {
    expect(paginate({ page: 12, total: 20 })).toEqual([
      9, 10, 11, 12, 13, 14, 15,
    ]);
  });

  it(`should return the last ${maxPages} pages when 'page' is the 'total'`, () => {
    expect(paginate({ page: 20, total: 20 })).toEqual([
      14, 15, 16, 17, 18, 19, 20,
    ]);
  });

  it(`should return the correct pages when 'page' is < the middle page`, () => {
    expect(paginate({ page: 3, total: 20 })).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it(`should return the correct pages when 'page' is the middle page`, () => {
    expect(paginate({ page: 4, total: 20 })).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it(`should return the correct pages when 'page' is > the middle page`, () => {
    expect(paginate({ page: 5, total: 20 })).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });
});
