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
