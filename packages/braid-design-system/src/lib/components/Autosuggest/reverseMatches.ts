/*
  In each Match,
  - First number: index of the first highlighted character in the match
  - Second number: index of the last highlighted character in the match *plus one*

  This matches the format expected by the parse function
  See https://github.com/moroshko/autosuggest-highlight?tab=readme-ov-file#parsetext-matches
*/

export type Match = [number, number];

export function reverseMatches(suggestion: string, matches: Match[]): Match[] {
  const suggestionLength = suggestion.length;
  const reversedMatches: Match[] = [];

  let currentStart = 0;

  for (const [start, end] of matches) {
    if (currentStart < start) {
      reversedMatches.push([currentStart, start]);
    }

    currentStart = end;
  }

  if (currentStart < suggestionLength) {
    reversedMatches.push([currentStart, suggestionLength]);
  }

  return reversedMatches;
}
