import { type Match, reverseMatches } from './reverseMatches';

describe('reverseMatches', () => {
  it('should return intervals for non-matching parts of the suggestion', () => {
    const suggestion = 'Apples etc';
    const matches: Match[] = [
      [2, 4],
      [6, 8],
    ];
    const expected: Match[] = [
      [0, 2],
      [4, 6],
      [8, 10],
    ];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });

  it('should handle no matches', () => {
    const suggestion = 'Apple';
    const matches: Match[] = [];
    const expected: Match[] = [[0, 5]];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });

  it('should handle matches that cover the entire suggestion', () => {
    const suggestion = 'Apple';
    const matches: Match[] = [[0, 5]];
    const expected: Match[] = [];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });

  it('should handle matches at the start of the suggestion', () => {
    const suggestion = 'Apple';
    const matches: Match[] = [[0, 2]];
    const expected: Match[] = [[2, 5]];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });

  it('should handle matches at the end of the suggestion', () => {
    const suggestion = 'Apple';
    const matches: Match[] = [[3, 5]];
    const expected: Match[] = [[0, 3]];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });

  it('should handle matches for a single character suggestion', () => {
    const suggestion = 'A';
    const matches: Match[] = [[0, 1]];
    const expected: Match[] = [];

    expect(reverseMatches(suggestion, matches)).toEqual(expected);
  });
});
